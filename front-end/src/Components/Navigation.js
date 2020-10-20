import React, { Component } from 'react';
 
import { NavLink } from 'react-router-dom';
 

class Navigation extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="navbar">
                <div className="button">
                    <a href="/home">Home</a>
                </div>
                <div className="button">
                    <a href="/fitnesslog">Log</a>
                </div>
                <div className="button">
                    <a href="/mealhome">Diet</a>
                </div>
                <div className="button">
                    <a href="/workouthome">Exercise</a>
                </div>
            </div>
        );
    }
}
 
export default Navigation;