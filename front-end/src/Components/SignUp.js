import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUp extends Component {
    constructor(props){
        super(props);

        this.state = {
            loseWeight: 0,
            maintainWeight: 0,
            gainWeight: 0,
            notActive: 0,
            lightActive: 0,
            active: 0,
            veryActive: 0
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
            loseWeight: 1,
            maintainWeight: 0,
            gainWeight: 0
        });
    }

    async handleMaintainWeight(){
        await this.setState({
            loseWeight: 0,
            maintainWeight: 1,
            gainWeight: 0
        });
    }

    async handleGainWeight(){
        await this.setState({
            loseWeight: 0,
            maintainWeight: 0,
            gainWeight: 1
        });
    }

    //ACTIVITY PORTION DATA
    async handleNotActive(){
        await this.setState({
            notActive: 1,
            lightActive: 0,
            active: 0,
            veryActive: 0
        });
    }

    async handleLightActive(){
        await this.setState({
            notActive: 0,
            lightActive: 1,
            active: 0,
            veryActive: 0
        });
    }

    async handleActive(){
        await this.setState({
            notActive: 0,
            lightActive: 0,
            active: 1,
            veryActive: 0
        });
    }

    async handleVeryActive(){
        await this.setState({
            notActive: 0,
            lightActive: 0,
            active: 0,
            veryActive: 1
        });
    }

    render() {
        return  (
            <>
            <div className="header">
                <h2>Sign Up</h2>
                <hr/>
            </div>
            <form onSubmit={this.handleSubmit}>
                <div className="content">
                    <h2>What is your goal?</h2>
                    <div className="button" onClick={this.handleLoseWeight}>
                        <p id="border">Lose Weight</p>
                    </div>
                    <div className="button" onClick={this.handleMaintainWeight}>
                        <p id="border">Maintain Weight</p>
                    </div>
                    <div className="button" onClick={this.handleGainWeight}>
                        <p id="border">Gain Weight</p>
                    </div>
                    <h2>What is your daily activity?</h2>
                    <div className="button" onClick={this.handleNotActive}>
                        <p id="border">Not Very Active</p>
                    </div>
                    <div className="button" onClick={this.handleLightActive}>
                        <p id="border">Lightly Active</p>
                    </div>
                    <div className="button" onClick={this.handleActive}>
                        <p id="border">Active</p>
                    </div>
                    <div className="button" onClick={this.handleVeryActive}>
                        <p id="border">Very Active</p>
                    </div>
                    <br/>
                    <div className="button">
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