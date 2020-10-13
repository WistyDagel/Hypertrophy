import React, { Component } from 'react';

class Greeting extends Component {
    constructor(){
        super();
    }

    render() {
        return  (
            <>
            <div className="Content">
                <a href='/signup'>Sign Up</a>
                <a href='/login'>Log In</a>
            </div>
            </>
        );
    }
}

export default Greeting;