import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';

//TODO 
//Google Authentication 
//Store User data to the back end and database
//Store Google accountObj to the user collection

class SignUp3 extends Component {
    constructor(props){
        super(props);

        this.state = {
            users: [],
            userData: this.props.location.data,
            associatedEmail: '',
            userExists: false,
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
        console.log(this.state.users);
    }

    googleSuccess = (response) => {
        //Checks to see if an account with the associated googleId already exists
        for (let i = 0; i < this.state.users.length; i++) {
            if(this.state.users[i].googleID == response.profileObj.googleId){
                this.setState({
                    associatedEmail: response.profileObj.email,
                    userExists: true
                });
            }
        }
        console.log(response);
        console.log('Success')
    }

    googleFailure = (response) => {
        console.log(response);
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
                    <a href="/home">Home</a>
                </div>
            </div>
            </>
        );
    }

    userAlreadyExists = () => {
        return (
            <>
            <div className="content">
                <p>This user already exists!</p>
                <h3>"{this.state.associatedEmail}"</h3>
                <br/>
                <h4>Please, login below.</h4>
                <a href="/login">Login</a>
            </div>
            </>
        )
    }

    greeting = () => {
        if(this.state.userExists){
            return <this.userAlreadyExists/>;
        } else {
            return <this.userGreeting/>;
        }
    }

    render() {
        console.log(this.state.userData);
        return  (
            <>
            <div className="header">
                <h2>Sign Up</h2>
                <hr/>
            </div>
            <div className="content">
                <h2>Google sign in</h2>
                <br/>
                <GoogleLogin
                    clientId="274810096435-rdi9f6mopojj0be9d141h8dbr79iflud.apps.googleusercontent.com"
                    buttonText="Login with Google"
                    onSuccess={this.googleSuccess}
                    onFailure={this.googleFailure}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
            <br/>
            <br/>
            <this.greeting/>
            </>
        );
    }
}

export default SignUp3;