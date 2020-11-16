import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Navigation from '../Navigation';
import workoutPlan from './WorkoutPlan';

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
            userData: this.props.location.data,
            workoutData: {
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

        //UPDATES ALL THE INPUT BOX FIELDS - EXERCISE PAGE
        // this.updateDescription = this.updateDescription.bind(this);
        // this.updateDuration = this.updateDuration.bind(this);
        // this.updateSets = this.updateSets.bind(this);
        // this.updateReps = this.updateReps.bind(this);

        //FUNCTIONS FOR PAGE RENDERING AND EDITING THE CURRENT WORKOUT PLAN
        // this.appendExercise = this.appendExercise.bind(this);
        // this.renderCreateWorkout = this.renderCreateWorkout.bind(this);
        // this.renderAddExercise = this.renderAddExercise.bind(this);
        // this.renderCreateWorkout = this.renderCreateWorkout.bind(this);
        this.createWorkoutPlan = this.createWorkoutPlan.bind(this);
    }

    componentDidMount(){
        var workoutSession = JSON.parse(window.sessionStorage.getItem("workoutPlan"));

        if(workoutSession != undefined){
            console.log(workoutSession);
            this.setState({
                workoutData: workoutSession
            })
        }
    }

    // FUNCTIONS FOR ADDING AN EXERCISE
    // async updateDescription(evt) {
    //     await this.setState({description: evt.target.value});
    // }

    // async updateDuration(evt) {
    //     await this.setState({duration: evt.target.value});
    // }

    // async updateSets(evt) {
    //     await this.setState({sets: evt.target.value});
    // }

    // async updateReps(evt) {
    //     await this.setState({reps: evt.target.value});
    // }

    // appendExercise() {
    //     var exercise = {   
    //         description: this.state.description,
    //         duration: this.state.duration,
    //         sets: this.state.sets,
    //         reps: this.state.reps
    //     }
    //     switch (this.state.currentDay) {
    //         case "day1":
    //             console.log(this.state.workoutData.day1.exercises.push({   
    //                 description: this.state.description,
    //                 duration: this.state.duration,
    //                 sets: this.state.sets,
    //                 reps: this.state.reps
    //             }));
    //             // this.state.workoutData.day1.exercises.push(exercise);
    //             break;
    //         case "day2":
    //             this.state.workoutData.day2.exercises.push(exercise);
    //             break;
    //         case "day3":
    //             this.state.workoutData.day3.exercises.push(exercise);
    //             break;        
    //         case "day4":
    //             this.state.workoutData.day4.exercises.push(exercise);
    //             break;   
    //         case "day5":
    //             this.state.workoutData.day5.exercises.push(exercise);
    //             break; 
    //         case "day6":
    //             this.state.workoutData.day6.exercises.push(exercise);
    //             break;
    //         case "day7":
    //             this.state.workoutData.day7.exercises.push(exercise);
    //             break;
    //         default:
    //             break;
    //     }

    //     workoutPlan.setWorkoutPlan(this.state.workoutData);
    //     console.log(workoutPlan.getWorkoutPlan());

    //     this.setState({
    //         renderExercise: false
    //     });
    // }

    // renderAddExercise(currentDay){
    //     this.setState({
    //         renderExercise: true,
    //         currentDay: currentDay
    //     })
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
    }
    
    // FUNCTION RENDERING CURRENT PAGE
    // renderCreateWorkout = () => {
    //     // if(this.state.renderExercise){
    //     //     return(
    //     //         <div className="col">
    //     //             <div className="row">
    //     //                 <div className="col">
    //     //                     <h4>Description:</h4>
    //     //                     <br/>
    //     //                     <h4>Duration: </h4>
    //     //                     <br/>
    //     //                     <h4>Sets: </h4>
    //     //                     <br/>
    //     //                     <h4>Reps: </h4>
    //     //                 </div>
    //     //                 <div className="col">
    //     //                     <input onChange={this.updateDescription}></input>
    //     //                     <br/>
    //     //                     <input onChange={this.updateDuration}></input>
    //     //                     <br/>
    //     //                     <input onChange={this.updateSets}></input>
    //     //                     <br/>
    //     //                     <input onChange={this.updateReps}></input>
    //     //                 </div>
    //     //             </div>    
    //     //             <br/>
    //     //             <br/>
    //     //             <br/>
    //     //             <div id="border" onClick={this.appendExercise} className="button">
    //     //                 <h3>Add Exercise</h3>
    //     //             </div>
    //     //         </div>
    //     //     )
    //     // } else {    
    //     //     return (
                
    //     //     )
    //     // }
    // }

    setStorage = () => {
        console.log(this.state.workoutData);
        window.sessionStorage.setItem("workoutPlan", JSON.stringify(this.state.workoutData));
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
                        <h2>Day 1</h2>
                        <div className="row alignLeft">
                            <div className="col">
                                <h4>Name:</h4>
                            </div>
                            <div className="col">
                                <input onChange={this.updateNameDay1} defaultValue={this.state.workoutData.day1.name}></input>
                            </div>
                        </div> 
                        <hr/>
                        <div id="border" onClick={() => this.setStorage()} className="button">
                            <Link
                                to={{
                                    pathname: "/addexercisewp",
                                    data: "day1"
                                }}
                            >Add Exercise</Link>
                            {/* <h4>Add Exercise</h4> */}
                        </div>
                    </div>
                    {/* <div className="dayBox maxwidth">
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
                        <div id="border" onClick={() => this.renderAddExercise("day2")} className="button">
                            <h4>Add Exercise</h4>
                        </div>
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
                        <div id="border" onClick={() => this.renderAddExercise("day3")} className="button">
                            <h4>Add Exercise</h4>
                        </div>
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
                        <div id="border" onClick={() => this.renderAddExercise("day4")} className="button">
                            <h4>Add Exercise</h4>
                        </div>
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
                        <div id="border" onClick={() => this.renderAddExercise("day5")} className="button">
                            <h4>Add Exercise</h4>
                        </div>
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
                        <div id="border" onClick={() => this.renderAddExercise("day6")} className="button">
                            <h4>Add Exercise</h4>
                        </div>
                    </div>
                    <div className="dayBox maxwidth">
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
                        <div id="border" onClick={() => this.renderAddExercise("day7")} className="button">
                            <h4>Add Exercise</h4>
                        </div>
                    </div> */}
                    <br/>
                    <button
                        id="border"
                        onClick={() => this.createWorkoutPlan()}
                    >Create Workout Plan</button>
                    <br/>
                    <br/>
                    <br/>
                </div>                
                <Navigation userData={this.state.userData}/>
            </div>
            </>
        );
    }
}

export default CreateWorkout;