import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Navigation from '../Navigation';
import workoutPlan from './WorkoutPlan';

class CreateWorkout extends Component {
    constructor(props){
        super(props);
        this.state = {
            userData: this.props.location.data,
            workoutData: workoutPlan.getWorkoutPlan(),
            renderAddExercise: false
        }
 
        this.updateNameDay1 = this.updateNameDay1.bind(this);
        this.updateNameDay2 = this.updateNameDay2.bind(this);
        this.updateNameDay3 = this.updateNameDay3.bind(this);
        this.updateNameDay4 = this.updateNameDay4.bind(this);
        this.updateNameDay5 = this.updateNameDay5.bind(this);
        this.updateNameDay6 = this.updateNameDay6.bind(this);
        this.updateNameDay7 = this.updateNameDay7.bind(this);
        this.updateDescription = this.updateDescription.bind(this);
        this.updateDuration = this.updateDuration.bind(this);
        this.updateSets = this.updateSets.bind(this);
        this.updateReps = this.updateReps.bind(this);
        this.appendExercise = this.appendExercise.bind(this);
        this.renderCreateWorkout = this.renderCreateWorkout.bind(this);
    }

    //TODO
    //CREATE ACTUAL JSON BASED ON USER ENTRY

    //CONDITIONAL RENDER FOR ADDING EXERCISE FOR EACH DAY - Bool is on for when they want to add an exericse to the current day

    componentDidMount(){  
        this.setState({
            workoutData: workoutPlan.getWorkoutPlan()
        });

        console.log(this.state.workoutData);
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

    // FUNCTIONS FOR ADDING AN EXERCISE
    async updateDescription(evt) {
        await this.setState({description: evt.target.value});
    }

    async updateDuration(evt) {
        await this.setState({duration: evt.target.value});
    }

    async updateSets(evt) {
        await this.setState({sets: evt.target.value});
    }

    async updateReps(evt) {
        await this.setState({reps: evt.target.value});
    }

    appendExercise() {
        var exercise = {   
            description: this.state.description,
            duration: this.state.duration,
            sets: this.state.sets,
            reps: this.state.reps
        }
        switch (this.state.currentDay) {
            case "day1":
                this.state.workoutData.day1.exercises.push(exercise);
                break;
            case "day2":
            
                break;
            case "day3":
        
                break;        
            case "day4":
        
                break;   
            case "day5":
        
                break; 
            case "day6":
        
                break;
            case "day7":
        
                break;
            default:
                break;
        }

        workoutPlan.setWorkoutPlan(this.state.workoutData);
        console.log(workoutPlan.getWorkoutPlan());
    }

    // FUNCTIONS FOR CREATE WORKOUT PAGE
    async updateNameDay1(evt) {
        await this.setState({workoutData: {day1:{name: evt.target.value}}});
    }

    async updateNameDay2(evt) {
        await this.setState({workoutData: {day2:{name: evt.target.value}}});
    }

    async updateNameDay3(evt) {
        await this.setState({workoutData: {day3:{name: evt.target.value}}});
    }

    async updateNameDay4(evt) {
        await this.setState({workoutData: {day4:{name: evt.target.value}}});
    }

    async updateNameDay5(evt) {
        await this.setState({workoutData: {day5:{name: evt.target.value}}});
    }

    async updateNameDay6(evt) {
        await this.setState({workoutData: {day6:{name: evt.target.value}}});
    }

    async updateNameDay7(evt) {
        await this.setState({workoutData: {day7:{name: evt.target.value}}});
    }
    
    // FUNCTION RENDERING CURRENT PAGE
    renderCreateWorkout = () => {
        if(this.state.renderAddExercise){
            <div className="col">
                <div className="row">
                    <div className="col">
                        <h4>Description:</h4>
                        <br/>
                        <h4>Duration: </h4>
                        <br/>
                        <h4>Sets: </h4>
                        <br/>
                        <h4>Reps: </h4>
                    </div>
                    <div className="col">
                        <input onChange={this.updateDescription}></input>
                        <br/>
                        <input onChange={this.updateDuration}></input>
                        <br/>
                        <input onChange={this.updateSets}></input>
                        <br/>
                        <input onChange={this.updateReps}></input>
                    </div>
                </div>    
                <br/>
                <br/>
                <br/>
                <div id="border" onClick={this.appendExercise} className="button">
                    <h3>Add Exercise</h3>
                </div>
                <div className="button">
                    <a id="border" href='/createworkout'>Go Back</a>
                </div>
            </div>
        } else {    
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
                    <Link
                        to={{
                            pathname:'/addexercisewp',
                            data: this.state.workoutData,
                            currentDay: "day1"
                        }}
                    >Add Exercise</Link>
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
                    <Link
                        to={{
                            pathname:'/addexercisewp',
                            data: this.state.workoutData
                        }}
                    >Add Exercise</Link>
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
                    <Link
                        to={{
                            pathname:'/addexercisewp',
                            data: this.state.workoutData
                        }}
                    >Add Exercise</Link>
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
                    <Link
                        to={{
                            pathname:'/addexercisewp',
                            data: this.state.workoutData
                        }}
                    >Add Exercise</Link>
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
                    <Link
                        to={{
                            pathname:'/addexercisewp',
                            data: this.state.workoutData
                        }}
                    >Add Exercise</Link>
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
                    <Link
                        to={{
                            pathname:'/addexercisewp',
                            data: this.state.workoutData
                        }}
                    >Add Exercise</Link>
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
                    <Link
                        to={{
                            pathname:'/addexercisewp',
                            data: this.state.workoutData
                        }}
                    >Add Exercise</Link>
                </div>
                <br/>
            </div>
        }
    }

    render() {
        return  (
            <>
            <div className="flexbox">
                <Header/>
                <this.renderCreateWorkout/>
                <Navigation userData={this.state.userData}/>
            </div>
            </>
        );
    }
}

export default CreateWorkout;