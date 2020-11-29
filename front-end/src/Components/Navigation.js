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
                <div className="button col">
                    <img style={{width: "20px", height: "20px"}} src={home}></img>
                    <Link
                        to={{
                            pathname: '/home',
                        }}
                    >Home</Link>
                </div>
                <div className="button col">
                    <img style={{width: "20px", height: "20px"}} src={log}></img>
                    <Link
                        to={{
                            pathname: '/fitnesslog',
                        }}
                    >Log</Link>
                </div>
                <div className="button col">
                    <img style={{width: "20px", height: "20px"}} src={apple}></img>
                    <Link
                        to={{
                            pathname: '/mealhome',
                        }}
                    >Diet</Link>
                </div>
                <div className="button col">
                    <img style={{width: "20px", height: "20px"}} src={dumbbell}></img>
                    <Link
                        to={{
                            pathname: '/workouthome',
                        }}
                    >Exercise</Link>
                </div>
            </div>
        );
    }
}
 
export default Navigation;