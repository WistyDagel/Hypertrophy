import React, { Component } from 'react';
import logo from '../Logo/logo.png';

class Greeting extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return  (
            <>
            <div className="flexbox">
                <div className="content">
                    <div className="logo">
                        <img src={logo}></img>
                        <h1 className="logoText">Hypertrophy</h1>
                    </div>
                    <div className="clickables">
                        <div className="button">
                            <a id="border" href='/signup'>Sign Up</a>
                        </div>
                        <div className="button">
                            <a href='/login'>Log In</a>
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default Greeting;