import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import { Link } from 'react-router-dom';

//TODO 
//Google Authentication 
//Store User data to the back end and database
//Store Google accountObj to the user collection
//Fix Welcome so it only shows when user has logged in

class SignUp3 extends Component {
    constructor(props){
        super(props);

        this.state = {
            users: [],
            userData: this.props.location.data,
            associatedEmail: '',
            userExists: false,
            userCreated: false,
            user: '',
            name: ''
        }

        this.googleSuccess = this.googleSuccess.bind(this);
        this.googleFailure = this.googleFailure.bind(this);
        this.userGreeting = this.userGreeting.bind(this);
        this.userAlreadyExists = this.userAlreadyExists.bind(this);
        this.greeting = this.greeting.bind(this);
    }

    async componentDidMount(){
        //Fetch the data from the back end server and database it is connected to
        await fetch('http://localhost:3001/users')
        .then(res => res.json())
        .then(data => {
            this.setState({
                users: data
            });
        });
    }

    googleSuccess = (response) => {
        //Stores the name and email of the current person signing up
        this.setState({
            associatedEmail: response.profileObj.email,
            name: response.profileObj.givenName
        });
        //Checks to see if an account with the associated googleId already exists
        for (let i = 0; i < this.state.users.length; i++) {
            if(this.state.users[i].googleObj.googleId == response.profileObj.googleId){
                this.setState({
                    userExists: true
                });
            } 
        }
        //Only creates the account if the user does not exist
        if(!this.state.userExists){
            fetch("http://localhost:3001/users", {
                method: "POST",
                headers: {'Content-Type': "application/json"},
                body: JSON.stringify({
                    googleObj: response.profileObj,
                    accountObj: this.state.userData,
                })
            })
            .then(res => res.json())
            .then(data => {
                if(data){
                    this.setState({
                        userCreated: true,
                        user: data
                    })
                }
            })
        }
        console.log('Success')
    }

    googleFailure = (response) => {
        console.log('Error')
    }

    userGreeting = () => {
        return (
            <>
            <div className="content">
                <h3>Welcome, {this.state.name}!</h3>
                <br/>
                <h4>Please proceed to the home screen</h4>
                <div className="button">
                    <Link
                        to={{
                            pathname: '/home',
                            data: this.state.user
                        }}
                    >Home</Link>
                </div>
            </div>
            </>
        );
    }

    userAlreadyExists = () => {
        return (
            <>
            <div className="content">
                <p>A user with the associated email already exists!</p>
                <br/>
                <h4>Please, login below.</h4>
                <a href="/login">Login</a>
            </div>
            </>
        )
    }

    //Return HTML content based on current data
    //TODO - Switch from google sign in to the user greeting page or user exists page 
    greeting = () => {
        if(this.state.userExists){
            return <this.userAlreadyExists/>;
        } else if(this.state.userCreated) {
            return <this.userGreeting/>;
        } else {
            return (
                <>
                <h2>Google sign in</h2>
                <br/>
                <GoogleLogin
                    clientId="274810096435-rdi9f6mopojj0be9d141h8dbr79iflud.apps.googleusercontent.com"
                    buttonText="Sign Up with Google"
                    onSuccess={this.googleSuccess}
                    onFailure={this.googleFailure}
                    cookiePolicy={'single_host_origin'}
                />
                </>
            )
        }
    }

    render() {
        return  (
            <>
            <div className="header">
                <h2>Sign Up</h2>
                <hr/>
            </div>
            <div className="content">
                <this.greeting/>
            </div>
            <br/>
            <br/>
            </>
        );
    }
}

export default SignUp3;