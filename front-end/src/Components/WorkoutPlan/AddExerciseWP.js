import React, { Component } from 'react';
import Header from '../Header';
import Navigation from '../Navigation';

//IDEA
//USE LOCAL STORAGE TO PULL CURRENT WORKOUT PLAN BEING CREATED

class AddExerciseWP extends Component {
    constructor(props){
        super(props);

        this.state = {
            workoutData: JSON.parse(window.sessionStorage.getItem("workoutSession")),
            currentDay: this.props.location.data,
            description: "N/A",
            duration: "N/A",
            sets: "N/A",
            reps: "N/A"
        }

        this.updateDescription = this.updateDescription.bind(this);
        this.updateDuration = this.updateDuration.bind(this);
        this.updateSets = this.updateSets.bind(this);
        this.updateReps = this.updateReps.bind(this);
        this.appendExercise = this.appendExercise.bind(this);
        this.setStorage = this.setStorage.bind(this);
    }

    async componentDidMount(){
        await console.log(JSON.parse(window.sessionStorage.getItem("workoutSession")));
    }

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

    async appendExercise() {
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
                this.state.workoutData.day2.exercises.push(exercise);
                break;
            case "day3":
                this.state.workoutData.day3.exercises.push(exercise);
                break;        
            case "day4":
                this.state.workoutData.day4.exercises.push(exercise);
                break;   
            case "day5":
                this.state.workoutData.day5.exercises.push(exercise);
                break; 
            case "day6":
                this.state.workoutData.day6.exercises.push(exercise);
                break;
            case "day7":
                this.state.workoutData.day7.exercises.push(exercise);
                break;
            default:
                break;
        }
        await window.sessionStorage.setItem("workoutSession", JSON.stringify(this.state.workoutData));
    }

    setStorage = () => {
        console.log(this.state.workoutData);
    }

    render() {
        return  (
            <>
            <div className="flexbox">
                <Header/>
                <div className="col addExercise">
                    {/* <div className="row">
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
                            <input style={{marginRight: "120px"}} className="smallInput" onChange={this.updateSets}></input>
                            <br/>
                            <input style={{marginRight: "120px"}} className="smallInput" onChange={this.updateReps}></input>
                        </div>
                    </div>     */}
                    <div className="row">
                        <h4>Description:</h4>
                        <input onChange={this.updateDescription}></input>
                    </div>
                    <br/>
                    <div className="row">
                        <h4 style={{marginLeft: "25px"}}>Duration: </h4>
                        <input onChange={this.updateDuration}></input>
                    </div>
                    <br/>
                    <div className="row">
                        <h4>Sets: </h4>
                        <input style={{marginRight: "65px"}} className="smallInput" onChange={this.updateSets}></input>
                    </div>
                    <br/>
                    <div className="row">
                        <h4>Reps: </h4>
                        <input style={{marginRight: "70px"}} className="smallInput" onChange={this.updateReps}></input>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <div onClick={() => this.appendExercise()} className="button border-black">
                        <a href='/createworkout'>Add Exercise</a>
                    </div>
                </div>
                <Navigation/>
            </div>
            </>
        );
    }
}

export default AddExerciseWP;