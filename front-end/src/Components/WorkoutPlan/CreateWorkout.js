import React, { Component } from 'react';
import Header from '../Header';
import Navigation from '../Navigation';

class CreateWorkout extends Component {
    constructor(props){
        super(props);
        this.state = {
            userData: this.props.location.data,
            name: '',
            description: '',
            day1: {
                "name": "",
                "exercises": [
                ]
            },
            day2: {
                "name": "",
                "exercises": [
                ]
            },
            day3: {
                "name": "",
                "exercises": [
                ]
            },
            day4: {
                "name": "",
                "exercises": [
                ]
            },
            day5: {
                "name": "",
                "exercises": [
                ]
            },
            day6: {
                "name": "",
                "exercises": [
                ]
            },
            day7: {
                "name": "",
                "exercises": [
                ]
            },
        }

        this.updateNameDay1 = this.updateNameDay1.bind(this);
        this.updateNameDay2 = this.updateNameDay2.bind(this);
        this.updateNameDay3 = this.updateNameDay3.bind(this);
        this.updateNameDay4 = this.updateNameDay4.bind(this);
        this.updateNameDay5 = this.updateNameDay5.bind(this);
        this.updateNameDay6 = this.updateNameDay6.bind(this);
        this.updateNameDay7 = this.updateNameDay7.bind(this);
    }

    async updateNameDay1(evt) {
        await this.setState({ day1:{name: evt.target.value}});
    }

    async updateNameDay2(evt) {
        await this.setState({ day2:{name: evt.target.value}});
    }

    async updateNameDay3(evt) {
        await this.setState({ day3:{name: evt.target.value}});
    }

    async updateNameDay4(evt) {
        await this.setState({ day4:{name: evt.target.value}});
    }

    async updateNameDay5(evt) {
        await this.setState({ day5:{name: evt.target.value}});
    }

    async updateNameDay6(evt) {
        await this.setState({ day6:{name: evt.target.value}});
    }

    async updateNameDay7(evt) {
        await this.setState({ day7:{name: evt.target.value}});
    }

    //TODO
    //CREATE ACTUAL JSON BASED ON USER ENTRY
    componentDidMount(){
        // fetch("http://localhost:3001/workoutplan", {
        //     method: "POST",
        //     headers: {'Content-Type': "application/json"},
        //     body: JSON.stringify({
        //         name: '',
        //         description: "",
        //         day1: this.state.day1,
        //         day2: this.state.day2,
        //         day3: this.state.day3,
        //         day4: this.state.day4,
        //         day5: this.state.day5,
        //         day6: this.state.day6,
        //         day7: this.state.day7
        //     })
        // })
        // .then(res => res.json())
        // .then(data => {
        //     if(data){
        //         console.log(data);
        //     }
        // });
    }

    render() {
        return  (
            <>
            <div className="flexbox">
                <Header/>
                <div className="content">
                    <div className="entrybox">
                        <h2>Create your workout plan</h2>
                        <br/>
                        <div className="row">
                            <div className="col">
                                <h4>Name:</h4>
                                <br/>
                                <h4>Description:</h4>
                            </div>
                            <div className="col">
                                <input></input>
                                <br/>
                                <input></input>
                            </div>
                        </div>    
                    </div>
                    <br/>
                    <div className="dayBox maxwidth">
                        <h2>Day 1</h2>
                        <div className="row alignLeft">
                            <div className="col">
                                <h4>Name:</h4>
                            </div>
                            <div className="col">
                                <input onChange={this.updateNameDay1}></input>
                            </div>
                        </div> 
                        <hr/>
                        <a href="/addexercisewp">Add Exercise</a>
                    </div>
                    <div className="dayBox maxwidth">
                        <h2>Day 2</h2>
                        <div className="row alignLeft">
                            <div className="col">
                                <h4>Name:</h4>
                            </div>
                            <div className="col">
                                <input onChange={this.updateNameDay2}></input>
                            </div>
                        </div> 
                        <hr/>
                        <a href="/addexercise">Add Exercise</a>
                    </div>
                    <div className="dayBox maxwidth">
                        <h2>Day 3</h2>
                        <div className="row alignLeft">
                            <div className="col">
                                <h4>Name:</h4>
                            </div>
                            <div className="col">
                                <input onChange={this.updateNameDay3}></input>
                            </div>
                        </div> 
                        <hr/>
                        <a href="/addexercise">Add Exercise</a>
                    </div>
                    <div className="dayBox maxwidth">
                        <h2>Day 4</h2>
                        <div className="row alignLeft">
                            <div className="col">
                                <h4>Name:</h4>
                            </div>
                            <div className="col">
                                <input onChange={this.updateNameDay4}></input>
                            </div>
                        </div> 
                        <hr/>
                        <a href="/addexercise">Add Exercise</a>
                    </div>
                    <div className="dayBox maxwidth">
                        <h2>Day 5</h2>
                        <div className="row alignLeft">
                            <div className="col">
                                <h4>Name:</h4>
                            </div>
                            <div className="col">
                                <input onChange={this.updateNameDay5}></input>
                            </div>
                        </div> 
                        <hr/>
                        <a href="/addexercise">Add Exercise</a>
                    </div>
                    <div className="dayBox maxwidth">
                        <h2>Day 6</h2>
                        <div className="row alignLeft">
                            <div className="col">
                                <h4>Name:</h4>
                            </div>
                            <div className="col">
                                <input onChange={this.updateNameDay6}></input>
                            </div>
                        </div> 
                        <hr/>
                        <a href="/addexercise">Add Exercise</a>
                    </div>
                    <div className="day7 maxwidth">
                        <h2>Day 7</h2>
                        <div className="row alignLeft">
                            <div className="col">
                                <h4>Name:</h4>
                            </div>
                            <div className="col">
                                <input onChange={this.updateNameDay7}></input>
                            </div>
                        </div> 
                        <hr/>
                        <a href="/addexercise">Add Exercise</a>
                    </div>
                    <br/>
                </div>
                <Navigation userData={this.state.userData}/>
            </div>
            </>
        );
    }
}

export default CreateWorkout;