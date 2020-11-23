import React, { Component } from 'react';
import logo from '../Logo/favicon-32x32.png';
import sidebarIcon from '../Logo/sidebar.png'
import Sidebar from "react-sidebar";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
          sidebarOpen: false
        };

        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
        this.renderSideBar = this.renderSideBar.bind(this);
    }
      
    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }

    renderSideBar(){
        return (
            <>
            <b>Sidebar content</b>
            </>
        );
    }
    
    render(){
        return (
            <div className="row">
                <div className="row">
                    <div className="headerRow">
                        <img className="logoImage" style={{marginTop: "5px"}} src={logo}></img>
                        <h2 className="logoText">Hypertrophy</h2>
                    </div>
                    <div className="sidebar">
                        <Sidebar
                            sidebar= {<div>
                                <b>Sidebar content</b>
                                <a href="/">Log Out</a>
                            </div>
                            }
                            open={this.state.sidebarOpen}
                            onSetOpen={this.onSetSidebarOpen}
                            styles={{ sidebar: { background: "white", width: "50%" } }}
                        >
                        <img className="logoImage" onClick={() => this.onSetSidebarOpen(true)} src={sidebarIcon}></img>
                        </Sidebar>                
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Header;