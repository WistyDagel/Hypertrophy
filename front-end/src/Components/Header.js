import React, { Component } from 'react';
import logo from '../Logo/favicon-32x32.png';

class Header extends Component {
    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <div className="header">
                <div className="headerRow">
                    <img className="logoImage" src={logo}></img>
                    <h2 className="logoText">Hypertrophy</h2>
                </div>
                <hr/>
            </div>
        );
    }
}
 
export default Header;