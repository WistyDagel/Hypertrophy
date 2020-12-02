import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import calcStats from './CalculateStats';
import Navigation from './Navigation';

class EditInformation extends Component {
    constructor(props){
        super(props);

        this.state = {
            loseWeight: false,
            maintainWeight: false,
            gainWeight: false,
            notActive: false,
            lightActive: false,
            active: false,
            veryActive: false,
            male: false,
            female: false,
            age: '',
            heightFt: '',
            heightIn: '',
            weight: ''
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
                loseWeight: data[0].accountObj.goalsAndActivity.loseWeight,
                maintainWeight: data[0].accountObj.goalsAndActivity.maintainWeight,
                gainWeight: data[0].accountObj.goalsAndActivity.gainWeight,
                notActive: data[0].accountObj.goalsAndActivity.notActive,
                lightActive: data[0].accountObj.goalsAndActivity.lightActive,
                active: data[0].accountObj.goalsAndActivity.active,
                veryActive: data[0].accountObj.goalsAndActivity.veryActive,
                male: data[0].accountObj.male,
                female: data[0].accountObj.female,
                age: data[0].accountObj.age,
                heightFt: data[0].accountObj.heightFt,
                heightIn: data[0].accountObj.heightIn,
                weight: data[0].accountObj.weight
            })
        });

        if(this.state.loseWeight){
            var loseWeight = document.getElementById('lweight');    
            loseWeight.style.backgroundColor = "#29abe2";
            loseWeight.style.color = "#fff";
        }

        if(this.state.maintainWeight){
            var maintainWeight = document.getElementById('mweight');  
            maintainWeight.style.backgroundColor = "#29abe2";
            maintainWeight.style.color = "#fff";
        }

        if(this.state.gainWeight){
            var gainWeight = document.getElementById('gweight');
            gainWeight.style.backgroundColor = "#29abe2";
            gainWeight.style.color = "#fff";
        }

        if(this.state.notActive){
            var notActive = document.getElementById('nactive');    
            notActive.style.backgroundColor = "#29abe2";
            notActive.style.color = "#fff";
        }

        if(this.state.lightActive){
            var lightActive = document.getElementById('lactive');  
            lightActive.style.backgroundColor = "#29abe2";
            lightActive.style.color = "#fff";
        }

        if(this.state.active){
            var active = document.getElementById('active');
            active.style.backgroundColor = "#29abe2";
            active.style.color = "#fff";
        }

        if(this.state.veryActive){
            var veryActive = document.getElementById('vactive');
            veryActive.style.backgroundColor = "#29abe2";
            veryActive.style.color = "#fff";
        }

        if(this.state.male){
            var male = document.getElementById('male');
            male.style.backgroundColor = "#29abe2";
            male.style.color = "#fff";
        }

        if(this.state.female){
            var female = document.getElementById('female');
            female.style.backgroundColor = "#29abe2";
            female.style.color = "#fff";
        }
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

    updateUserInfo = () => {
        var accountObj = {
            goalsAndActivity: {
                loseWeight: this.state.loseWeight,
                maintainWeight: this.state.maintainWeight,
                gainWeight: this.state.gainWeight,
                notActive: this.state.notActive,
                lightActive: this.state.lightActive,
                active: this.state.active,
                veryActive: this.state.veryActive,
            },
            male: this.state.male,
            female: this.state.female,
            age: this.state.age,
            heightFt: this.state.heightFt,
            heightIn: this.state.heightIn,
            weight: this.state.weight
        }
        
        //Calculate data at this point with CalcStats component
        var cal = calcStats.calculateCalories(accountObj);
        //0:proteins, 1: carbs, 2: fats, 3: sugars
        var nutrientList = calcStats.calculateMacros(cal);
        fetch(`http://localhost:3001/users/${window.sessionStorage.getItem("userId")}`, {
            method: "PUT",
            headers: {'Content-Type': "application/json"},
            body: JSON.stringify({
                accountObj: accountObj,
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

    //UPDATE VISUAL LOOK TO BUTTONS THAT ARE CURRENTLY CLICKED

    render() {
        return  (
            <>
            <Header/>
            <div className="content">
                <h1>Goals and Activity</h1>
                <hr style={{width: "100%"}}/>
                <br/>
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
                <h1>Personal Information</h1>
                <hr style={{width: "100%"}}/>
                <br/>
                <h2>I am</h2>
                <div id="male" className="button border-blue" onClick={this.handleMale}>
                    <p>Male</p>
                </div>
                <br/>
                <div id="female" className="button border-blue" onClick={this.handleFemale}>
                    <p>Female</p>
                </div>
                <h2>How old are you?</h2>
                <div className="row center">
                    <input type="number" min="1" max="110" required="required" className="smallInput" onChange={this.handleAge} defaultValue={this.state.age}></input>
                    <p>(years old)</p>
                </div>
                <h2>How tall are you?</h2>
                <div className="row center">
                    <input type="number" min="4" max="7" required="required" className="smallInput" onChange={this.handleHeightFt} defaultValue={this.state.heightFt}></input>
                    <p>ft</p>
                    <input type="number" min="1" max="11" required="required" className="smallInput" onChange={this.handleHeightIn} defaultValue={this.state.heightIn}></input>
                    <p>in</p>
                </div>
                <h2>How much do you weigh?</h2>
                <div className="row center">
                    <input type="number" min="50" max="600" required="required" className="smallInput" onChange={this.handleWeight} defaultValue={this.state.weight}></input>
                    <p>lbs</p>
                </div>
                <div style={{padding: "0px 20px"}} onClick={() => this.updateUserInfo()} className="button black">
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