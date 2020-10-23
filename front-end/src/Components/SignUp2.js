import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUp2 extends Component {
    constructor(props){
        super(props);

        this.state = {
            goalsAndActivity: this.props.location.data,
            male: 0,
            female: 0,
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
            male: 1,
            female: 0
        });
    }

    async handleFemale() {
        await this.setState({
            male: 0,
            female: 1
        });
    }

    async handleAge(evt) {
        await this.setState({ age: evt.target.value });
        console.log(this.state.age);
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
            <div className="header">
                <h2>Sign Up</h2>
                <hr/>
            </div>
            <div className="content">
                <h2>I am</h2>
                <div className="button" onClick={this.handleMale}>
                    <p id="border">Male</p>
                </div>
                <div className="button" onClick={this.handleFemale}>
                    <p id="border">Female</p>
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
                <div className="button">
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