import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Navigation from '../Navigation';

//IDEA
//USE SESSION STORAGE FOR CREATING ZWORKOUT PLAN

var workoutData = {
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

class CreateWorkout extends Component {
    constructor(props){
        super(props);
        this.state = {
            userData: '',
            workoutData: {
                name: '',
                description: '',
                day1: {
                    "name": "Sunday",
                    "exercises": [
                    ]
                },
                day2: {
                    "name": "Monday",
                    "exercises": [
                    ]
                },
                day3: {
                    "name": "Tuesday",
                    "exercises": [
                    ]
                },
                day4: {
                    "name": "Wednesday",
                    "exercises": [
                    ]
                },
                day5: {
                    "name": "Thursday",
                    "exercises": [
                    ]
                },
                day6: {
                    "name": "Friday",
                    "exercises": [
                    ]
                },
                day7: {
                    "name": "Saturday",
                    "exercises": [
                    ]
                },
            },
            // renderExercise: false,
            currentDay: "",
            description: "",
            duration: "",
            sets: "",
            reps: "",
            
        }
 
        //UPDATES ALL THE INPUT BOX FIELDS - CREATE PAGE
        this.updateWorkoutName = this.updateWorkoutName.bind(this);
        this.updateWorkoutDescription = this.updateWorkoutDescription.bind(this);
        this.updateNameDay1 = this.updateNameDay1.bind(this);
        this.updateNameDay2 = this.updateNameDay2.bind(this);
        this.updateNameDay3 = this.updateNameDay3.bind(this);
        this.updateNameDay4 = this.updateNameDay4.bind(this);
        this.updateNameDay5 = this.updateNameDay5.bind(this);
        this.updateNameDay6 = this.updateNameDay6.bind(this);
        this.updateNameDay7 = this.updateNameDay7.bind(this);

        this.setStorage = this.setStorage.bind(this);

        this.createWorkoutPlan = this.createWorkoutPlan.bind(this);

        this.renderDay = this.renderDay.bind(this);
    }
    
    
    async componentDidMount(){
        //Gets the most current iteration of the user
        await fetch(`http://localhost:3001/users/${window.sessionStorage.getItem("userId")}`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                userData: data[0]
            })
        });

        var workoutSession = JSON.parse(window.sessionStorage.getItem("workoutSession"));

        if(workoutSession != undefined){
            console.log(workoutSession);
            this.setState({
                workoutData: workoutSession
            })
        }
    }

    // componentDidMount(){
    //     var workoutSession = JSON.parse(window.sessionStorage.getItem("workoutPlan"));

    //     if(workoutSession != undefined){
    //         console.log(workoutSession);
    //         this.setState({
    //             workoutData: workoutSession
    //         })
    //     }
    // }

    // FUNCTIONS FOR CREATE WORKOUT PAGE
    updateWorkoutName(evt) {
        this.state.workoutData.name = evt.target.value;
    }

    updateWorkoutDescription(evt) {
        this.state.workoutData.description = evt.target.value;
    }

    updateNameDay1(evt) {
        this.state.workoutData.day1.name = evt.target.value;
    }

    updateNameDay2(evt) {
        this.state.workoutData.day2.name = evt.target.value;
    }

    updateNameDay3(evt) {
        this.state.workoutData.day3.name = evt.target.value;
    }

    updateNameDay4(evt) {
        this.state.workoutData.day4.name = evt.target.value;
    }

    updateNameDay5(evt) {
        this.state.workoutData.day5.name = evt.target.value;
    }

    updateNameDay6(evt) {
        this.state.workoutData.day6.name = evt.target.value;
    }

    updateNameDay7(evt) {
        this.state.workoutData.day7.name = evt.target.value;
    }

    //Creates the Workout Plan
    createWorkoutPlan = () => {
        // if(this.state.workoutData.day1.name == ""){
        //     this.state.workoutData.day1.name == "Sunday"
        // } else if (this.state.workoutData.day2.name == ""){
        //     this.state.workoutData.day2.name == "Monday"
        // } else if (this.state.workoutData.day3.name == ""){
        //     this.state.workoutData.day3.name == "Tuesday"            
        // } else if (this.state.workoutData.day4.name == ""){
        //     this.state.workoutData.day4.name == "Wednesday"            
        // } else if (this.state.workoutData.day5.name == ""){
        //     this.state.workoutData.day5.name == "Thursday"            
        // } else if (this.state.workoutData.day6.name == ""){
        //     this.state.workoutData.day6.name == "Friday"          
        // } else if (this.state.workoutData.day7.name == ""){
        //     this.state.workoutData.day7.name == "Saturday"            
        // }

        fetch("http://localhost:3001/workoutplan", {
            method: "POST",
            headers: {'Content-Type': "application/json"},
            body: JSON.stringify({
                name: this.state.workoutData.name,
                description: this.state.workoutData.description,
                day1: this.state.workoutData.day1,
                day2: this.state.workoutData.day2,
                day3: this.state.workoutData.day3,
                day4: this.state.workoutData.day4,
                day5: this.state.workoutData.day5,
                day6: this.state.workoutData.day6,
                day7: this.state.workoutData.day7,
            })
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                console.log(data);
            }
        });

        window.sessionStorage.removeItem("workoutSession");
    }

    setStorage = () => {
        console.log(this.state.workoutData);
        window.sessionStorage.setItem("workoutSession", JSON.stringify(this.state.workoutData));
    }

    renderDay = (data) => {
        var day = data.currentDay;
        var dayArray = [];

        if(day == undefined){
            return (
                <></>
            );
        } else {
            for (let i = 0; i < day.exercises.length; i++) {
                dayArray.push(
                    <div key={i}>
                        <div className="">
                            <div className="workoutDescription">
                                <h4 className="planTitle">{day.exercises[i].description}</h4>
                            </div>
                        </div>
                        <div className="planRow">
                            <div className="workoutDuration">
                                <h4>Duration: {day.exercises[i].duration}</h4>
                            </div>
                            <div className="workoutSets">
                                <h4>Sets: {day.exercises[i].sets}</h4>
                            </div>
                            <div className="workoutSets">
                                <h4>Reps: {day.exercises[i].reps}</h4>
                            </div>
                        </div>
                    </div>
                );
            }
            return dayArray;
        }
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
                                <input onChange={this.updateWorkoutName} defaultValue={this.state.workoutData.name}></input>
                                <br/>
                                <input onChange={this.updateWorkoutDescription} defaultValue={this.state.workoutData.description}></input>
                            </div>
                        </div>    
                    </div>
                    <br/>
                    <div className="dayBox maxwidth">
                        <h2>Sunday</h2>
                        <div className="row alignLeft">
                            <div className="col">
                                <h4>Name:</h4>
                            </div>
                            <div className="col">
                                <input onChange={this.updateNameDay1} defaultValue={this.state.workoutData.day1.name}></input>
                            </div>
                        </div> 
                        <hr/>
                        <this.renderDay currentDay={this.state.workoutData.day1}/>
                        <div id="border" onClick={() => this.setStorage()} className="button">
                            <Link
                                to={{
                                    pathname: "/addexercisewp",
                                    data: "day1"
                                }}
                            >Add Exercise</Link>
                        </div>
                    </div>
                    <div className="dayBox maxwidth">
                        <h2>Monday</h2>
                        <div className="row alignLeft">
                            <div className="col">
                                <h4>Name:</h4>
                            </div>
                            <div className="col">
                                <input onChange={this.updateNameDay2} defaultValue={this.state.workoutData.day2.name}></input>
                            </div>
                        </div> 
                        <hr/>
                        <this.renderDay currentDay={this.state.workoutData.day2}/>
                        <div id="border" onClick={() => this.setStorage()} className="button">
                            <Link
                                to={{
                                    pathname: "/addexercisewp",
                                    data: "day2"
                                }}
                            >Add Exercise</Link>
                        </div>
                    </div>
                    <div className="dayBox maxwidth">
                        <h2>Tuesday</h2>
                        <div className="row alignLeft">
                            <div className="col">
                                <h4>Name:</h4>
                            </div>
                            <div className="col">
                                <input onChange={this.updateNameDay3} defaultValue={this.state.workoutData.day3.name}></input>
                            </div>
                        </div> 
                        <hr/>
                        <this.renderDay currentDay={this.state.workoutData.day3}/>
                        <div id="border" onClick={() => this.setStorage()} className="button">
                            <Link
                                to={{
                                    pathname: "/addexercisewp",
                                    data: "day3"
                                }}
                            >Add Exercise</Link>
                        </div>
                    </div>
                    <div className="dayBox maxwidth">
                        <h2>Wednesday</h2>
                        <div className="row alignLeft">
                            <div className="col">
                                <h4>Name:</h4>
                            </div>
                            <div className="col">
                                <input onChange={this.updateNameDay4} defaultValue={this.state.workoutData.day4.name}></input>
                            </div>
                        </div> 
                        <hr/>
                        <this.renderDay currentDay={this.state.workoutData.day4}/>
                        <div id="border" onClick={() => this.setStorage()} className="button">
                            <Link
                                to={{
                                    pathname: "/addexercisewp",
                                    data: "day4"
                                }}
                            >Add Exercise</Link>
                        </div>
                    </div>
                    <div className="dayBox maxwidth">
                        <h2>Thursday</h2>
                        <div className="row alignLeft">
                            <div className="col">
                                <h4>Name:</h4>
                            </div>
                            <div className="col">
                                <input onChange={this.updateNameDay5} defaultValue={this.state.workoutData.day5.name}></input>
                            </div>
                        </div> 
                        <hr/>
                        <this.renderDay currentDay={this.state.workoutData.day5}/>
                        <div id="border" onClick={() => this.setStorage()} className="button">
                            <Link
                                to={{
                                    pathname: "/addexercisewp",
                                    data: "day5"
                                }}
                            >Add Exercise</Link>
                        </div>
                    </div>
                    <div className="dayBox maxwidth">
                        <h2>Friday</h2>
                        <div className="row alignLeft">
                            <div className="col">
                                <h4>Name:</h4>
                            </div>
                            <div className="col">
                                <input onChange={this.updateNameDay6} defaultValue={this.state.workoutData.day6.name}></input>
                            </div>
                        </div> 
                        <hr/>
                        <this.renderDay currentDay={this.state.workoutData.day6}/>
                        <div id="border" onClick={() => this.setStorage()} className="button">
                            <Link
                                to={{
                                    pathname: "/addexercisewp",
                                    data: "day6"
                                }}
                            >Add Exercise</Link>
                        </div>
                    </div>
                    <div className="dayBox maxwidth">
                        <h2>Saturday</h2>
                        <div className="row alignLeft">
                            <div className="col">
                                <h4>Name:</h4>
                            </div>
                            <div className="col">
                                <input onChange={this.updateNameDay7} defaultValue={this.state.workoutData.day7.name}></input>
                            </div>
                        </div> 
                        <hr/>
                        <this.renderDay currentDay={this.state.workoutData.day7}/>
                        <div id="border" onClick={() => this.setStorage()} className="button">
                            <Link
                                to={{
                                    pathname: "/addexercisewp",
                                    data: "day7"
                                }}
                            >Add Exercise</Link>
                        </div>
                    </div>
                    <br/>
                    <div id="border" onClick={() =>this.createWorkoutPlan()} className="button">
                        <a href='/selectworkout'>Create Workout Plan</a>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                </div>                
                <Navigation/>
            </div>
            </>
        );
    }
}

export default CreateWorkout;