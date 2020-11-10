import React, { Component } from 'react';
 
import { Link, NavLink } from 'react-router-dom';
 

class Navigation extends Component {
    constructor(props){
        super(props);

        this.state = {
            userData: this.props.userData
        }
    }
    
    render(){
        return (
            <div className="navbar">
                <div className="button">
                    <Link
                        to={{
                            pathname: '/home',
                            data: this.state.userData
                        }}
                    >Home</Link>
                    {/* <a href="/home">Home</a> */}
                </div>
                <div className="button">
                    <Link
                        to={{
                            pathname: '/fitnesslog',
                            data: this.state.userData
                        }}
                    >Log</Link>
                    {/* <a href="/fitnesslog">Log</a> */}
                </div>
                <div className="button">
                    <Link
                        to={{
                            pathname: '/mealhome',
                            data: this.state.userData
                        }}
                    >Diet</Link>
                    {/* <a href="/mealhome">Diet</a> */}
                </div>
                <div className="button">
                    <Link
                        to={{
                            pathname: '/workouthome',
                            data: this.state.userData
                        }}
                    >Exercise</Link>
                    {/* <a href="/workouthome">Exercise</a> */}
                </div>
            </div>
        );
    }
}
 
export default Navigation;