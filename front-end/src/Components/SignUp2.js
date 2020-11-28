import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import logo from '../Logo/logo.png';


class SignUp2 extends Component {
    constructor(props){
        super(props);

        this.state = {
            goalsAndActivity: this.props.location.data,
            male: false,
            female: false,
            age: '',
            heightFt: '',
            heightIn: '',
            weight: ''
        }

        this.handleMale = this.handleMale.bind(this);
        this.handleFemale = this.handleFemale.bind(this);
        this.handleAge = this.handleAge.bind(this);
        this.handleHeightFt = this.handleHeightFt.bind(this);
        this.handleHeightIn = this.handleHeightIn.bind(this);
        this.handleWeight = this.handleWeight.bind(this);
    }

    async handleMale() {
        await this.setState({
            male: true,
            female: false
        });
    }

    async handleFemale() {
        await this.setState({
            male: false,
            female: true
        });
    }

    async handleAge(evt) {
        await this.setState({ age: evt.target.value });
    }

    async handleHeightFt(evt) {
        await this.setState({ heightFt: evt.target.value });
    }

    async handleHeightIn(evt) {
        await this.setState({ heightIn: evt.target.value });
    }

    async handleWeight(evt) {
        await this.setState({ weight: evt.target.value });
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
            <div className="content">
                <h2>I am</h2>
                <div className="button border-blue" onClick={this.handleMale}>
                    <p>Male</p>
                </div>
                <br/>
                <div className="button border-blue" onClick={this.handleFemale}>
                    <p>Female</p>
                </div>
                <h2>How old are you?</h2>
                <div className="row center">
                    <input className="smallInput" onChange={this.handleAge}></input>
                    <p>(years old)</p>
                </div>
                <h2>How tall are you?</h2>
                <div className="row center">
                    <input className="smallInput" onChange={this.handleHeightFt}></input>
                    <p>ft</p>
                    <input className="smallInput" onChange={this.handleHeightIn}></input>
                    <p>in</p>
                </div>
                <h2>How much do you weigh?</h2>
                <div className="row center">
                    <input className="smallInput" onChange={this.handleWeight}></input>
                    <p>lbs</p>
                </div>
                <br/>
                <div className="button black">
                    <Link
                        to={{
                            pathname: '/signup3',
                            data: this.state
                        }}
                    >Next</Link>
                    {/* <a href="/signup3">Next</a> */}
                </div>
            </div>
            </>
        );
    }
}

export default SignUp2;