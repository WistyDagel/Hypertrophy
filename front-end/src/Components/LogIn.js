import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import { Link } from 'react-router-dom';

class LogIn extends Component {
    constructor(props){
        super(props);

        this.state = {
            users: [],
            userData: this.props.location.data,
            userNotExist: false,
            userSignedIn: false,
            associatedEmail: '',
            user: '',
            name: ''
        }

        this.googleSuccess = this.googleSuccess.bind(this);
        this.googleFailure = this.googleFailure.bind(this);
        this.userGreeting = this.userGreeting.bind(this);
        this.userNotExist = this.userNotExist.bind(this);
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
        // console.log(this.state.users);
        // console.log(this.state.userData);
    }

    googleSuccess = (response) => {
        //Stores the name and email of the current person signing up
        this.setState({
            associatedEmail: response.profileObj.email,
            name: response.profileObj.givenName
        });
        //checks to see if the user array is empty
        if(this.state.users.length == 0){
            this.setState({
                userNotExist: true
            });
        }
        //Checks to see if an account with the associated googleId exists and will have them sign up if they do not 
        for (let i = 0; i < this.state.users.length; i++) {
            if(this.state.users[i].googleObj.googleId == response.profileObj.googleId){
                this.setState({
                    userNotExist: false,
                    user: this.state.users[i]
                });
            } else {
                this.setState({
                    userNotExist: true
                })
            }
        }
        //User is now signed in depeneding on their account existing in the database
        if(!this.state.userNotExist){
            this.setState({
                userSignedIn: true
            });
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

    userNotExist = () => {
        return (
            <>
            <div className="content">
                <p>A user with that email doesn't exist</p>
                <br/>
                <h4>Please, sign up below.</h4>
                <a href="/signup">Sign Up</a>
            </div>
            </>
        )
    }

    //Return HTML content based on current data
    //TODO - Switch from google sign in to the user greeting page or user exists page 
    greeting = () => {
        if(this.state.userNotExist){
            return <this.userNotExist/>;
        } else if(this.state.userSignedIn) {
            return <this.userGreeting/>;
        } else {
            return (
                <>
                <h2>Google sign in</h2>
                <br/>
                <GoogleLogin
                    clientId="274810096435-rdi9f6mopojj0be9d141h8dbr79iflud.apps.googleusercontent.com"
                    buttonText="Login with Google"
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
                <h2>Log In</h2>
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

export default LogIn;