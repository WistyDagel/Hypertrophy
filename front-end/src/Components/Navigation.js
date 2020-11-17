import React, { Component } from 'react';
 
import { Link, NavLink } from 'react-router-dom';
 

class Navigation extends Component {
    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <div className="navbar">
                <div className="button">
                    <Link
                        to={{
                            pathname: '/home',
                        }}
                    >Home</Link>
                    {/* <a href="/home">Home</a> */}
                </div>
                <div className="button">
                    <Link
                        to={{
                            pathname: '/fitnesslog',
                        }}
                    >Log</Link>
                    {/* <a href="/fitnesslog">Log</a> */}
                </div>
                <div className="button">
                    <Link
                        to={{
                            pathname: '/mealhome',
                        }}
                    >Diet</Link>
                    {/* <a href="/mealhome">Diet</a> */}
                </div>
                <div className="button">
                    <Link
                        to={{
                            pathname: '/workouthome',
                        }}
                    >Exercise</Link>
                    {/* <a href="/workouthome">Exercise</a> */}
                </div>
            </div>
        );
    }
}
 
export default Navigation;