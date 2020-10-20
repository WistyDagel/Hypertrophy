import React, { Component } from 'react';

class SignUp2 extends Component {
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
                <h2>I am</h2>
                <div className="button">
                    <p id="border">Male</p>
                </div>
                <div className="button">
                    <p id="border">Female</p>
                </div>
                <h2>How old are you?</h2>
                <input></input>
                <h2>How tall are you?</h2>
                <input></input>
                <p>ft</p>
                <input></input>
                <p>in</p>
                <h2>How much do you weigh?</h2>
                <input></input>
                <br/>
                <div className="button">
                    <a href="/signup3">Next</a>
                </div>
            </div>
            </>
        );
    }
}

export default SignUp2;