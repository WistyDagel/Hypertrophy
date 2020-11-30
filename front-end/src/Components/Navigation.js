import React, { Component } from 'react'; 
import { Link, NavLink } from 'react-router-dom';
import home from './Photos/home.png'
import log from './Photos/log.png'
import apple from './Photos/apple.png'
import dumbbell from './Photos/dumbbell.png'

 

class Navigation extends Component {
    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <div className="navbar">
                <div className="button">
                    <Link
                        className="navText"
                        to={{
                            pathname: '/home',
                        }}
                    >
                        <div className="col">
                            <img style={{width: "20px", height: "20px"}} src={home}></img>
                            Home
                        </div>
                    </Link>
                </div>
                <div className="button">
                    <Link
                        className="navText"
                        to={{
                            pathname: '/fitnesslog',
                        }}
                    >
                        <div className="col">
                            <img style={{width: "20px", height: "20px"}} src={log}></img>
                            Log
                        </div>
                    </Link>
                </div>
                <div className="button">
                    <Link
                        className="navText"
                        to={{
                            pathname: '/mealhome',
                        }}
                    >
                        <div className="col">
                            <img style={{width: "20px", height: "20px"}} src={apple}></img>
                            Diet
                        </div>
                    </Link>
                </div>
                <div className="button">
                    <Link
                        className="navText"
                        to={{
                            pathname: '/workouthome',
                        }}
                    >
                        <div className="col">
                            <img style={{width: "20px", height: "20px"}} src={dumbbell}></img>
                            Exercise
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}
 
export default Navigation;