import React, { Component } from 'react';
import logo from '../Logo/favicon-32x32.png';
import Sidebar from "./SideBar";


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: '',
        };
    }
    
    render(){
        return (
            <div className="row header">
                <div className="row">
                    <div className="headerRow">
                        <img className="logoImage" style={{marginTop: "5px"}} src={logo}></img>
                        <h2 className="logoText">Hypertrophy</h2>
                    </div>
                    <div className="sidebar">
                        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Header;