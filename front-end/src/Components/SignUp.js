import React, { Component } from 'react';

class SignUp extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return  (
            <>
            <div className="header">
                <h2>Sign Up</h2>
                <hr/>
            </div>
            <div className="content">
                <h2>What is your goal?</h2>
                <div className="button">
                    <p id="border">Lose Weight</p>
                </div>
                <div className="button">
                    <p id="border">Maintain Weight</p>
                </div>
                <div className="button">
                    <p id="border">Gain Weight</p>
                </div>
                <h2>What is your daily activity?</h2>
                <div className="button">
                    <p id="border">Not Very Active</p>
                </div>
                <div className="button">
                    <p id="border">Lightly Active</p>
                </div>
                <div className="button">
                    <p id="border">Active</p>
                </div>
                <div className="button">
                    <p id="border">Very Active</p>
                </div>
                <br/>
                <div className="button">
                    <a href="/signup2">Next</a>
                </div>
            </div>
            </>
        );
    }
}

export default SignUp;