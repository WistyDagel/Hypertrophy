import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import logout from '../Logo/logout.png';

class SiderBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: '',
        };
    }

    async componentDidMount(){
        await fetch(`http://localhost:3001/users/${window.sessionStorage.getItem("userId")}`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                userData: data[0].googleObj
            })
        });
    }

    render(){
        return (
            <Menu>
                <div className="sideBar">
                    <div className="userContent">
                        <br/>
                        <img src={this.state.userData.imageUrl}/>
                        <h3>{this.state.userData.name}</h3>
                        <div onClick={() => this.state.sidebarOpen = false} className="button">
                            <a href="/editaccount" id="border">Edit Information</a>
                        </div>
                    </div>
                    <div className="logOut button">
                        <a href="/">
                            <div style={{padding: 0}} className="row">
                                <img style={{width: "30px", height: "auto"}} src={logout}/>
                                <h4>Log Out</h4>
                            </div>
                        </a>
                    </div>
                </div>
            </Menu>
        );
    }
}

export default SiderBar;