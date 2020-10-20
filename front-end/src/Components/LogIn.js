import React, { Component } from 'react';

class LogIn extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return  (
            <>
            <div className="header">
                <h2>Log In</h2>
                <hr/>
            </div>
            <div className="content">
                <h2>Google sign in</h2>
                <br/>
                <div className="button">
                    <a href="/home">Home</a>
                </div>
            </div>
            </>
        );
    }
}

export default LogIn;