import React, { Component } from 'react';
import Header from './Header';
import Navigation from './Navigation';

class AddExercise extends Component {
    constructor(){
        super();

        this.state = {
            fitnessLog: JSON.parse(window.sessionStorage.getItem("fitnessLog")),
            description: "N/A",
            duration: "N/A",
            sets: "N/A",
            reps: "N/A"
        }

        this.updateDescription = this.updateDescription.bind(this);
        this.updateDuration = this.updateDuration.bind(this);
        this.updateSets = this.updateSets.bind(this);
        this.updateReps = this.updateReps.bind(this);
    }

    async componentDidMount(){
        await console.log(JSON.parse(window.sessionStorage.getItem("fitnessLog")));
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

        this.state.fitnessLog.exercises.push(exercise);

        await window.sessionStorage.setItem("fitnessLog", JSON.stringify(this.state.fitnessLog));
    }


    render() {
        return  (
            <>
            <div className="flexbox">
                <Header/>
                <div className="col addExercise">
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
                        <a href='/fitnesslog'>Add Exercise</a>
                    </div>
                </div>
                <Navigation/>
            </div>
            </>
        );
    }
}

export default AddExercise;