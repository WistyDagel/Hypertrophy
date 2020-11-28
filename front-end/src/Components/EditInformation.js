import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import calcStats from './CalculateStats';
import Navigation from './Navigation';

class EditInformation extends Component {
    constructor(props){
        super(props);

        this.state = {
            accountObj: ''
        }

        this.handleLoseWeight = this.handleLoseWeight.bind(this);
        this.handleMaintainWeight = this.handleMaintainWeight.bind(this);
        this.handleGainWeight = this.handleGainWeight.bind(this);
        this.handleNotActive = this.handleNotActive.bind(this);
        this.handleLightActive = this.handleLightActive.bind(this);
        this.handleActive = this.handleActive.bind(this);
        this.handleVeryActive = this.handleVeryActive.bind(this);
        this.handleMale = this.handleMale.bind(this);
        this.handleFemale = this.handleFemale.bind(this);
        this.handleAge = this.handleAge.bind(this);
        this.handleHeightFt = this.handleHeightFt.bind(this);
        this.handleHeightIn = this.handleHeightIn.bind(this);
        this.handleWeight = this.handleWeight.bind(this);

        this.updateUserInfo = this.updateUserInfo.bind(this);
    }

    async componentDidMount() {
        //Gets the most current iteration of the user
        await fetch(`http://localhost:3001/users/${window.sessionStorage.getItem("userId")}`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                accountObj: data[0].accountObj
            })
        });
    }

    //GOALS PORTION DATA
    handleLoseWeight(){
        this.state.accountObj.goalsAndActivity.loseWeight = true;
        this.state.accountObj.goalsAndActivity.maintainWeight = false;
        this.state.accountObj.goalsAndActivity.gainWeight = false;
        console.log(true);
    }

    handleMaintainWeight(){
        this.state.accountObj.goalsAndActivity.loseWeight = false;
        this.state.accountObj.goalsAndActivity.maintainWeight = true;
        this.state.accountObj.goalsAndActivity.gainWeight = false;
        console.log(true);
    }

    handleGainWeight(){
        this.state.accountObj.goalsAndActivity.loseWeight = false;
        this.state.accountObj.goalsAndActivity.maintainWeight = false;
        this.state.accountObj.goalsAndActivity.gainWeight = true;
        console.log(true);
    }

    //ACTIVITY PORTION DATA
    handleNotActive(){
        this.state.accountObj.goalsAndActivity.notActive = true;
        this.state.accountObj.goalsAndActivity.lightActive = false;
        this.state.accountObj.goalsAndActivity.active = false;
        this.state.accountObj.goalsAndActivity.veryActive = false;
        console.log(true);
    }

    handleLightActive(){
        this.state.accountObj.goalsAndActivity.notActive = false;
        this.state.accountObj.goalsAndActivity.lightActive = true;
        this.state.accountObj.goalsAndActivity.active = false;
        this.state.accountObj.goalsAndActivity.veryActive = false;
        console.log(true);
    }

    handleActive(){
        this.state.accountObj.goalsAndActivity.notActive = false;
        this.state.accountObj.goalsAndActivity.lightActive = false;
        this.state.accountObj.goalsAndActivity.active = true;
        this.state.accountObj.goalsAndActivity.veryActive = false;
        console.log(true);
    }

    handleVeryActive(){
        this.state.accountObj.goalsAndActivity.notActive = false;
        this.state.accountObj.goalsAndActivity.lightActive = false;
        this.state.accountObj.goalsAndActivity.active = false;
        this.state.accountObj.goalsAndActivity.veryActive = true;
        console.log(true);        
    }
    
    handleMale() {
        this.state.accountObj.male = true;
        this.state.accountObj.female = false;
    }

    handleFemale() {
        this.state.accountObj.male = false;
        this.state.accountObj.female = true;
    }

    handleAge(evt) {
        this.state.accountObj.age = evt.target.value;
    }

    handleHeightFt(evt) {
        this.state.accountObj.heightFt = evt.target.value;
    }

    handleHeightIn(evt) {
        this.state.accountObj.heightIn = evt.target.value;
    }

    handleWeight(evt) {
        this.state.accountObj.weight = evt.target.value;
    }

    updateUserInfo = () => {
        //Calculate data at this point with CalcStats component
        var cal = calcStats.calculateCalories(this.state.accountObj);
        //0:proteins, 1: carbs, 2: fats, 3: sugars
        var nutrientList = calcStats.calculateMacros(cal);
        fetch(`http://localhost:3001/users/${window.sessionStorage.getItem("userId")}`, {
            method: "PUT",
            headers: {'Content-Type': "application/json"},
            body: JSON.stringify({
                accountObj: this.state.accountObj,
                calories: cal,
                caloriesCopy: cal,
                proteins: nutrientList[0],
                carbs: nutrientList[1],
                fats: nutrientList[2],
                sugars: nutrientList[3],
            })
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                console.log(data);
            }
        });
    }

    render() {
        return  (
            <>
            <Header/>
            <div className="content">
                <h1>Goals and Activity</h1>
                <hr style={{width: "100%"}}/>
                <br/>
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
                <h1>Personal Information</h1>
                <hr style={{width: "100%"}}/>
                <br/>
                <h2>I am</h2>
                <div className="button" onClick={this.handleMale}>
                    <p id="border">Male</p>
                </div>
                <div className="button" onClick={this.handleFemale}>
                    <p id="border">Female</p>
                </div>
                <h2>How old are you?</h2>
                <div className="row center">
                    <input className="smallInput" defaultValue={this.state.accountObj.age} onChange={this.handleAge}></input>
                    <p>(years old)</p>
                </div>
                <h2>How tall are you?</h2>
                <div className="row center">
                    <input className="smallInput" defaultValue={this.state.accountObj.heightFt} onChange={this.handleHeightFt}></input>
                    <p>ft</p>
                    <input className="smallInput" defaultValue={this.state.accountObj.heightIn} onChange={this.handleHeightIn}></input>
                    <p>in</p>
                </div>
                <h2>How much do you weigh?</h2>
                <div className="row center">
                    <input className="smallInput" defaultValue={this.state.accountObj.weight} onChange={this.handleWeight}></input>
                    <p>lbs</p>
                </div>
                <div id="border" onClick={() => this.updateUserInfo()} className="button">
                        <a href='/home'>Update Information</a>
                </div>
                <br/>
                <br/>
                <br/>
            </div>
            <Navigation/>
            </>
        );
    }
}

export default EditInformation;