import React, { Component } from 'react';
import Header from '../Header';
import Navigation from '../Navigation';

class AddExerciseWP extends Component {
    constructor(){
        super();

        this.state = {
            description: "",
            duration: "",
            sets: "",
            reps: ""
        }

        this.updateDescription = this.updateDescription.bind(this);
        this.updateDuration = this.updateDuration.bind(this);
        this.updateSets = this.updateSets.bind(this);
        this.updateReps = this.updateReps.bind(this);
        this.appendExercise = this.appendExercise.bind(this);
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

    appendExercise = () => {
        var exerciseArray = [];

        exerciseArray.push(
            this.state
        );

        return exerciseArray;
    }

    render() {
        return  (
            <>
            <div className="flexbox">
                <Header/>
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
                    <div className="button">
                        <a id="border" href='/createworkout'>Add Exercise</a>
                    </div>
                </div>
                <Navigation/>
            </div>
            </>
        );
    }
}

export default AddExerciseWP;