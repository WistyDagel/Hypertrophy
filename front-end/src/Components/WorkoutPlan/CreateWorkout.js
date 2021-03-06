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
                        <div className="row workoutDescription">
                            <h3 className="mealName">{day.exercises[i].description}</h3>
                        </div>
                        <div className="row">
                            <div style={{width: "150%"}} className="col border-black">
                                <h4>Duration</h4>
                                <h4>{day.exercises[i].duration}</h4>
                            </div>
                            <div style={{width: "100%"}} className="col border-black">
                                <h4>Sets</h4>
                                <h4>{day.exercises[i].sets}</h4>
                            </div>
                            <div style={{width: "100%"}} className="col border-black">
                                <h4>Reps</h4>
                                <h4>{day.exercises[i].reps}</h4>
                            </div>
                        </div>
                        <br/>
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
                    <div style={{minWidth: "375px", maxWidth: "375px"}}  className="entrybox">
                        <h2>Create your workout plan</h2>
                        <br/>
                        <div className="row">
                            <h4>Name:</h4>
                            <input style={{width: "230px"}} onChange={this.updateWorkoutName} defaultValue={this.state.workoutData.name}></input>
                        </div>
                        <br/>
                        <div className="row">
                            <h4>Description:</h4>
                            <textarea name="paragraph_text" cols="32" rows="2" onChange={this.updateWorkoutDescription} defaultValue={this.state.workoutData.description}></textarea>
                            {/* <div className="col">
                            </div>
                            <div className="col">
                                <br/>
                            </div> */}
                            {/* <input onChange={this.updateWorkoutDescription} defaultValue={this.state.workoutData.description}></input> */}
                        </div>   
                    </div>
                    <br/>
                    <div className="dayBox maxwidth">
                        <hr/>
                        <h2>Sunday</h2>
                        <div className="row alignLeft">
                            <div className="col">
                                <h4>Name:</h4>
                            </div>
                            <div className="col">
                                <input onChange={this.updateNameDay1} defaultValue={this.state.workoutData.day1.name}></input>
                            </div>
                        </div> 
                        <br/>
                        <this.renderDay currentDay={this.state.workoutData.day1}/>
                        <div style={{marginLeft: "10px"}} onClick={() => this.setStorage()} className="button border-blue">
                            <Link
                                to={{
                                    pathname: "/addexercisewp",
                                    data: "day1"
                                }}
                                >Add Exercise</Link>
                        </div>
                    </div>
                    <div className="dayBox maxwidth">
                        <hr/>
                        <h2>Monday</h2>
                        <div className="row alignLeft">
                            <div className="col">
                                <h4>Name:</h4>
                            </div>
                            <div className="col">
                                <input onChange={this.updateNameDay2} defaultValue={this.state.workoutData.day2.name}></input>
                            </div>
                        </div> 
                        <br/>
                        <this.renderDay currentDay={this.state.workoutData.day2}/>
                        <div style={{marginLeft: "10px"}} onClick={() => this.setStorage()} className="button border-blue">
                            <Link
                                to={{
                                    pathname: "/addexercisewp",
                                    data: "day2"
                                }}
                                >Add Exercise</Link>
                        </div>
                    </div>
                    <div className="dayBox maxwidth">
                        <hr/>
                        <h2>Tuesday</h2>
                        <div className="row alignLeft">
                            <div className="col">
                                <h4>Name:</h4>
                            </div>
                            <div className="col">
                                <input onChange={this.updateNameDay3} defaultValue={this.state.workoutData.day3.name}></input>
                            </div>
                        </div>
                        <br/>
                        <this.renderDay currentDay={this.state.workoutData.day3}/>
                        <div style={{marginLeft: "10px"}} onClick={() => this.setStorage()} className="button border-blue">
                            <Link
                                to={{
                                    pathname: "/addexercisewp",
                                    data: "day3"
                                }}
                                >Add Exercise</Link>
                        </div>
                    </div>
                    <div className="dayBox maxwidth">
                        <hr/>
                        <h2>Wednesday</h2>
                        <div className="row alignLeft">
                            <div className="col">
                                <h4>Name:</h4>
                            </div>
                            <div className="col">
                                <input onChange={this.updateNameDay4} defaultValue={this.state.workoutData.day4.name}></input>
                            </div>
                        </div> 
                        <br/>
                        <this.renderDay currentDay={this.state.workoutData.day4}/>
                        <div style={{marginLeft: "10px"}} onClick={() => this.setStorage()} className="button border-blue">
                            <Link
                                to={{
                                    pathname: "/addexercisewp",
                                    data: "day4"
                                }}
                                >Add Exercise</Link>
                        </div>
                    </div>
                    <div className="dayBox maxwidth">
                        <hr/>
                        <h2>Thursday</h2>
                        <div className="row alignLeft">
                            <div className="col">
                                <h4>Name:</h4>
                            </div>
                            <div className="col">
                                <input onChange={this.updateNameDay5} defaultValue={this.state.workoutData.day5.name}></input>
                            </div>
                        </div> 
                        <br/>
                        <this.renderDay currentDay={this.state.workoutData.day5}/>
                        <div style={{marginLeft: "10px"}} onClick={() => this.setStorage()} className="button border-blue">
                            <Link
                                to={{
                                    pathname: "/addexercisewp",
                                    data: "day5"
                                }}
                                >Add Exercise</Link>
                        </div>
                    </div>
                    <div className="dayBox maxwidth">
                        <hr/>
                        <h2>Friday</h2>
                        <div className="row alignLeft">
                            <div className="col">
                                <h4>Name:</h4>
                            </div>
                            <div className="col">
                                <input onChange={this.updateNameDay6} defaultValue={this.state.workoutData.day6.name}></input>
                            </div>
                        </div> 
                        <br/>
                        <this.renderDay currentDay={this.state.workoutData.day6}/>
                        <div style={{marginLeft: "10px"}} onClick={() => this.setStorage()} className="button border-blue">
                            <Link
                                to={{
                                    pathname: "/addexercisewp",
                                    data: "day6"
                                }}
                                >Add Exercise</Link>
                        </div>
                    </div>
                    <div className="dayBox maxwidth">
                        <hr/>
                        <h2>Saturday</h2>
                        <div className="row alignLeft">
                            <div className="col">
                                <h4>Name:</h4>
                            </div>
                            <div className="col">
                                <input onChange={this.updateNameDay7} defaultValue={this.state.workoutData.day7.name}></input>
                            </div>
                        </div> 
                        <br/>
                        <this.renderDay currentDay={this.state.workoutData.day7}/>
                        <div style={{marginLeft: "10px"}} onClick={() => this.setStorage()} className="button border-blue">
                            <Link
                                to={{
                                    pathname: "/addexercisewp",
                                    data: "day7"
                                }}
                            >Add Exercise</Link>
                        </div>
                    </div>
                    <br/>
                    <div onClick={() =>this.createWorkoutPlan()} className="button border-black">
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