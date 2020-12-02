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
    async handleLoseWeight(evt){
        await this.setState({
            loseWeight: true,
            maintainWeight: false,
            gainWeight: false
        });
        var loseWeight = document.getElementById('lweight');    
        loseWeight.style.backgroundColor = "#29abe2";
        loseWeight.style.color = "#fff";
        var maintainWeight = document.getElementById('mweight');  
        maintainWeight.style.backgroundColor = "#fff";
        maintainWeight.style.color = "#515050";
        var gainWeight = document.getElementById('gweight');
        gainWeight.style.backgroundColor = "#fff";
        gainWeight.style.color = "#515050";
    }

    async handleMaintainWeight(){
        await this.setState({
            loseWeight: false,
            maintainWeight: true,
            gainWeight: false
        });
        var loseWeight = document.getElementById('lweight');    
        loseWeight.style.backgroundColor = "#fff";
        loseWeight.style.color = "#515050";
        var maintainWeight = document.getElementById('mweight');  
        maintainWeight.style.backgroundColor = "#29abe2";
        maintainWeight.style.color = "#fff";
        var gainWeight = document.getElementById('gweight');
        gainWeight.style.backgroundColor = "#fff";
        gainWeight.style.color = "#515050";
    }

    async handleGainWeight(){
        await this.setState({
            loseWeight: false,
            maintainWeight: false,
            gainWeight: true
        });
        var loseWeight = document.getElementById('lweight');    
        loseWeight.style.backgroundColor = "#fff";
        loseWeight.style.color = "#515050";
        var maintainWeight = document.getElementById('mweight');  
        maintainWeight.style.backgroundColor = "#fff";
        maintainWeight.style.color = "#515050";
        var gainWeight = document.getElementById('gweight');
        gainWeight.style.backgroundColor = "#29abe2";
        gainWeight.style.color = "#fff";
    }

    //ACTIVITY PORTION DATA
    async handleNotActive(){
        await this.setState({
            notActive: true,
            lightActive: false,
            active: false,
            veryActive: false
        });
        var notActive = document.getElementById('nactive');    
        notActive.style.backgroundColor = "#29abe2";
        notActive.style.color = "#fff";
        var lightActive = document.getElementById('lactive');  
        lightActive.style.backgroundColor = "#fff";
        lightActive.style.color = "#515050";
        var active = document.getElementById('active');
        active.style.backgroundColor = "#fff";
        active.style.color = "#515050";
        var veryActive = document.getElementById('vactive');
        veryActive.style.backgroundColor = "#fff";
        veryActive.style.color = "#515050";
    }

    async handleLightActive(){
        await this.setState({
            notActive: false,
            lightActive: true,
            active: false,
            veryActive: false
        });
        var notActive = document.getElementById('nactive');    
        notActive.style.backgroundColor = "#fff";
        notActive.style.color = "#515050";
        var lightActive = document.getElementById('lactive');  
        lightActive.style.backgroundColor = "#29abe2";
        lightActive.style.color = "#fff";
        var active = document.getElementById('active');
        active.style.backgroundColor = "#fff";
        active.style.color = "#515050";
        var veryActive = document.getElementById('vactive');
        veryActive.style.backgroundColor = "#fff";
        veryActive.style.color = "#515050";
    }

    async handleActive(){
        await this.setState({
            notActive: false,
            lightActive: false,
            active: true,
            veryActive: false
        });
        var notActive = document.getElementById('nactive');    
        notActive.style.backgroundColor = "#fff";
        notActive.style.color = "#515050";
        var lightActive = document.getElementById('lactive');  
        lightActive.style.backgroundColor = "#fff";
        lightActive.style.color = "#515050";
        var active = document.getElementById('active');
        active.style.backgroundColor = "#29abe2";
        active.style.color = "#fff";
        var veryActive = document.getElementById('vactive');
        veryActive.style.backgroundColor = "#fff";
        veryActive.style.color = "#515050";
    }

    async handleVeryActive(){
        await this.setState({
            notActive: false,
            lightActive: false,
            active: false,
            veryActive: true
        });
        var notActive = document.getElementById('nactive');    
        notActive.style.backgroundColor = "#fff";
        notActive.style.color = "#515050";
        var lightActive = document.getElementById('lactive');  
        lightActive.style.backgroundColor = "#fff";
        lightActive.style.color = "#515050";
        var active = document.getElementById('active');
        active.style.backgroundColor = "#fff";
        active.style.color = "#515050";
        var veryActive = document.getElementById('vactive');
        veryActive.style.backgroundColor = "#29abe2";
        veryActive.style.color = "#fff";
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
                    <div id="lweight" className="button border-blue" onClick={this.handleLoseWeight}>
                        <p>Lose Weight</p>
                    </div>
                    <p className="signUpPrint">.5 lb lost /week</p>
                    <br/>
                    <div id="mweight" className="button border-blue" onClick={this.handleMaintainWeight}>
                        <p>Maintain Weight</p>
                    </div>
                    <p className="signUpPrint">0 lbs lost /week</p>
                    <br/>
                    <div id="gweight" className="button border-blue" onClick={this.handleGainWeight}>
                        <p>Gain Weight</p>
                    </div>
                    <p className="signUpPrint">.5 lb gained /week</p>
                    <br/>
                    <h2>What is your daily activity?</h2>
                    <div id="nactive" className="button border-blue" onClick={this.handleNotActive}>
                        <p>Not Very Active</p>
                    </div>
                    <p className="signUpPrint">Little to no exercise /week</p>
                    <br/>
                    <div id="lactive" className="button border-blue" onClick={this.handleLightActive}>
                        <p>Lightly Active</p>
                    </div>
                    <p className="signUpPrint">1-3 exercise times/week</p>
                    <br/>
                    <div id="active" className="button border-blue" onClick={this.handleActive}>
                        <p>Active</p>
                    </div>
                    <p className="signUpPrint">4-6 exercise times/week</p>
                    <br/>
                    <div id="vactive" className="button border-blue" onClick={this.handleVeryActive}>
                        <p>Very Active</p>
                    </div>
                    <p className="signUpPrint">6+ exercise times/week</p>
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