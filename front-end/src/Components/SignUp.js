import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import logo from '../Logo/logo.png';

class SignUp extends Component {
    constructor(props){
        super(props);

        this.state = {
            loseWeight: false,
            maintainWeight: false,
            gainWeight: false,
            notActive: false,
            lightActive: false,
            active: false,
            veryActive: false
        }

        this.handleLoseWeight = this.handleLoseWeight.bind(this);
        this.handleMaintainWeight = this.handleMaintainWeight.bind(this);
        this.handleGainWeight = this.handleGainWeight.bind(this);
        this.handleNotActive = this.handleNotActive.bind(this);
        this.handleLightActive = this.handleLightActive.bind(this);
        this.handleActive = this.handleActive.bind(this);
        this.handleVeryActive = this.handleVeryActive.bind(this);
    }

    //GOALS PORTION DATA
    async handleLoseWeight(){
        await this.setState({
            loseWeight: true,
            maintainWeight: false,
            gainWeight: false
        });
    }

    async handleMaintainWeight(){
        await this.setState({
            loseWeight: false,
            maintainWeight: true,
            gainWeight: false
        });
    }

    async handleGainWeight(){
        await this.setState({
            loseWeight: false,
            maintainWeight: false,
            gainWeight: true
        });
    }

    //ACTIVITY PORTION DATA
    async handleNotActive(){
        await this.setState({
            notActive: true,
            lightActive: false,
            active: false,
            veryActive: false
        });
    }

    async handleLightActive(){
        await this.setState({
            notActive: false,
            lightActive: true,
            active: false,
            veryActive: false
        });
    }

    async handleActive(){
        await this.setState({
            notActive: false,
            lightActive: false,
            active: true,
            veryActive: false
        });
    }

    async handleVeryActive(){
        await this.setState({
            notActive: false,
            lightActive: false,
            active: false,
            veryActive: true
        });
    }

    render() {
        return  (
            <>
            <div className="row header">
                <div className="row">
                    <div className="headerRow">
                        <img className="logoImage" style={{marginTop: "5px"}} src={logo}></img>
                        <h2 className="logoText">Hypertrophy</h2>
                    </div>
                </div>
            </div>
            <form onSubmit={this.handleSubmit}>
                <div className="content">
                    <h2>What is your goal?</h2>
                    <div className="button border-blue" onClick={this.handleLoseWeight}>
                        <p>Lose Weight</p>
                    </div>
                    <br/>
                    <div className="button border-blue" onClick={this.handleMaintainWeight}>
                        <p>Maintain Weight</p>
                    </div>
                    <br/>
                    <div className="button border-blue" onClick={this.handleGainWeight}>
                        <p>Gain Weight</p>
                    </div>
                    <br/>
                    <h2>What is your daily activity?</h2>
                    <div className="button border-blue" onClick={this.handleNotActive}>
                        <p>Not Very Active</p>
                    </div>
                    <br/>
                    <div className="button border-blue" onClick={this.handleLightActive}>
                        <p>Lightly Active</p>
                    </div>
                    <br/>
                    <div className="button border-blue" onClick={this.handleActive}>
                        <p>Active</p>
                    </div>
                    <br/>
                    <div className="button border-blue" onClick={this.handleVeryActive}>
                        <p>Very Active</p>
                    </div>
                    <br/>
                    <div className="button black">
                        <Link 
                            to={{
                                pathname: "/signup2",
                                data: this.state
                            }}
                        >Next</Link>
                        {/* <a href="/signup2">Next</a> */}
                    </div>
                </div>
            </form>
            </>
        );
    }
}

export default SignUp;