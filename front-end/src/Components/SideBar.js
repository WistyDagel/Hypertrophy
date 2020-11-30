import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import logout from '../Logo/logout.png';

class SiderBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: '',
        };

        this.renderDateAndTime = this.renderDateAndTime.bind(this);
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

    renderDateAndTime = () => {
        var date = new Date();

        var today = date.toString().split(/\s/g);

        var date = `${today[0]}, ${today[1]}/${today[2]}/${today[3]}`
        // var time = `${today[4]}`
  
        return (
            <>
            <div className="col">
                <h2>{date}</h2>
            </div>
            </>
        )
    }

    render(){
        return (
            <Menu>
                <div className="sideBar">
                    {this.renderDateAndTime()}
                    <div className="dateAndTime">
                    </div>
                    <div className="userContent">
                        <br/>
                        <img src={this.state.userData.imageUrl}/>
                        <h3>{this.state.userData.name}</h3>
                        <div onClick={() => this.state.sidebarOpen = false} className="button border-blue">
                            <a href="/editaccount">Edit Information</a>
                        </div>
                    </div>
                    <div className="logOut">
                        <a href="/">
                            <div style={{padding: 0}} className="row">
                                <img style={{width: "30px", height: "auto", paddingRight: "5px", paddingLeft: "10px"}} src={logout}/>
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