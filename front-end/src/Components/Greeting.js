import React, { Component } from 'react';
import logo from '../Logo/logo.png';

class Greeting extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        window.sessionStorage.clear();
    }
    render() {
        return  (
            <>
            <div className="flexbox">
                <div className="content">
                    <div className="logo">
                        <img style={{borderRadius: "100px"}} src={logo}></img>
                        <h1 className="logoText">Hypertrophy</h1>
                    </div>
                    <div className="clickables">
                        <div className="button blue">
                            <a href='/signup'>Sign Up</a>
                        </div>
                        <div className="button border-black">
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