import React, { Component } from 'react';
import Navigation from '../Navigation';

class CurrentWorkout extends Component {
    constructor(props){
        super(props);
        this.state = {
            userData: this.props.location.data,
            workoutData: this.props.location.workoutData
        }

        this.renderWorkoutPlan = this.renderWorkoutPlan.bind(this);
    }

    //TODO
    //STREAMLINE THE RENDER WITH METHODS WHICH BUILD AN ARRAY OF WORKOUTS
    renderWorkoutPlan = () => {
        
    }

    render() {
        return  (
            <>
            <div className="flexbox">
                <div className="header">
                    <h2>Hypertrophy</h2>
                    <hr/>
                    <br/>
                </div>
                <div className="col">
                    <h2>Current Workout Plan</h2>
                    <div className="row">
                        <div className="col">
                            <h3>Name</h3>
                            <br/>
                            <h3>Description</h3>
                        </div>
                        <div className="col">
                            <h4>{this.state.workoutData.name}</h4>
                            <br/>
                            <h4>{this.state.workoutData.description}</h4>
                        </div>
                    </div>    
                    <br/>
                    <div className="day1 maxwidth">
                        <h2>{this.state.workoutData.day1.name}</h2>
                        <hr/>
                        <div className="row">
                            <h4>{this.state.workoutData.day1.exercises[0].description}</h4>
                            <h4>Sets: {this.state.workoutData.day1.exercises[0].sets}</h4>
                            <h4>Reps: {this.state.workoutData.day1.exercises[0].reps}</h4>
                        </div>
                        <div className="row">
                            <h4>{this.state.workoutData.day1.exercises[1].description}</h4>
                            <h4>Sets: {this.state.workoutData.day1.exercises[1].sets}</h4>
                            <h4>Reps: {this.state.workoutData.day1.exercises[1].reps}</h4>
                        </div>
                        <div className="row">
                            <h4>{this.state.workoutData.day1.exercises[2].description}</h4>
                            <h4>Sets: {this.state.workoutData.day1.exercises[2].sets}</h4>
                            <h4>Reps: {this.state.workoutData.day1.exercises[2].reps}</h4>
                        </div>
                        <div className="row">
                            <h4>{this.state.workoutData.day1.exercises[3].description}</h4>
                            <h4>Sets: {this.state.workoutData.day1.exercises[3].sets}</h4>
                            <h4>Reps: {this.state.workoutData.day1.exercises[3].reps}</h4>
                        </div>
                        <div className="row">
                            <h4>{this.state.workoutData.day1.exercises[4].description}</h4>
                            <h4>Sets: {this.state.workoutData.day1.exercises[4].sets}</h4>
                            <h4>Reps: {this.state.workoutData.day1.exercises[4].reps}</h4>
                        </div>
                    </div>
                    <div className="day2 maxwidth">
                        <h2>{this.state.workoutData.day2.name}</h2>
                        <hr/>
                        <div className="row">
                            <h4>{this.state.workoutData.day2.exercises[0].description}</h4>
                            <h4>Sets: {this.state.workoutData.day2.exercises[0].sets}</h4>
                            <h4>Reps: {this.state.workoutData.day2.exercises[0].reps}</h4>
                        </div>
                        <div className="row">
                            <h4>{this.state.workoutData.day2.exercises[1].description}</h4>
                            <h4>Sets: {this.state.workoutData.day2.exercises[1].sets}</h4>
                            <h4>Reps: {this.state.workoutData.day2.exercises[1].reps}</h4>
                        </div>
                        <div className="row">
                            <h4>{this.state.workoutData.day2.exercises[2].description}</h4>
                            <h4>Sets: {this.state.workoutData.day2.exercises[2].sets}</h4>
                            <h4>Reps: {this.state.workoutData.day2.exercises[2].reps}</h4>
                        </div>
                        <div className="row">
                            <h4>{this.state.workoutData.day2.exercises[3].description}</h4>
                            <h4>Sets: {this.state.workoutData.day2.exercises[3].sets}</h4>
                            <h4>Reps: {this.state.workoutData.day2.exercises[3].reps}</h4>
                        </div>
                        <div className="row">
                            <h4>{this.state.workoutData.day2.exercises[4].description}</h4>
                            <h4>Sets: {this.state.workoutData.day2.exercises[4].sets}</h4>
                            <h4>Reps: {this.state.workoutData.day2.exercises[4].reps}</h4>
                        </div>
                    </div>
                    <div className="day3 maxwidth">
                        <h2>{this.state.workoutData.day3.name}</h2>
                        <hr/>
                        <div className="row">
                            <h4>{this.state.workoutData.day3.exercises[0].description}</h4>
                            <h4>Sets: {this.state.workoutData.day3.exercises[0].sets}</h4>
                            <h4>Reps: {this.state.workoutData.day3.exercises[0].reps}</h4>
                        </div>
                        <div className="row">
                            <h4>{this.state.workoutData.day3.exercises[1].description}</h4>
                            <h4>Sets: {this.state.workoutData.day3.exercises[1].sets}</h4>
                            <h4>Reps: {this.state.workoutData.day3.exercises[1].reps}</h4>
                        </div>
                        <div className="row">
                            <h4>{this.state.workoutData.day3.exercises[2].description}</h4>
                            <h4>Sets: {this.state.workoutData.day3.exercises[2].sets}</h4>
                            <h4>Reps: {this.state.workoutData.day3.exercises[2].reps}</h4>
                        </div>
                        <div className="row">
                            <h4>{this.state.workoutData.day3.exercises[3].description}</h4>
                            <h4>Sets: {this.state.workoutData.day3.exercises[3].sets}</h4>
                            <h4>Reps: {this.state.workoutData.day3.exercises[3].reps}</h4>
                        </div>
                        <div className="row">
                            <h4>{this.state.workoutData.day3.exercises[4].description}</h4>
                            <h4>Sets: {this.state.workoutData.day3.exercises[4].sets}</h4>
                            <h4>Reps: {this.state.workoutData.day3.exercises[4].reps}</h4>
                        </div>
                    </div>
                    <div className="day4 maxwidth">
                        <h2>{this.state.workoutData.day4.name}</h2>
                        <hr/>
                        <div className="row">
                            <h4>{this.state.workoutData.day4.exercises[0].description}</h4>
                            <h4>Sets: {this.state.workoutData.day4.exercises[0].sets}</h4>
                            <h4>Reps: {this.state.workoutData.day4.exercises[0].reps}</h4>
                        </div>
                        <div className="row">
                            <h4>{this.state.workoutData.day4.exercises[1].description}</h4>
                            <h4>Sets: {this.state.workoutData.day4.exercises[1].sets}</h4>
                            <h4>Reps: {this.state.workoutData.day4.exercises[1].reps}</h4>
                        </div>
                        <div className="row">
                            <h4>{this.state.workoutData.day4.exercises[2].description}</h4>
                            <h4>Sets: {this.state.workoutData.day4.exercises[2].sets}</h4>
                            <h4>Reps: {this.state.workoutData.day4.exercises[2].reps}</h4>
                        </div>
                        <div className="row">
                            <h4>{this.state.workoutData.day4.exercises[3].description}</h4>
                            <h4>Sets: {this.state.workoutData.day4.exercises[3].sets}</h4>
                            <h4>Reps: {this.state.workoutData.day4.exercises[3].reps}</h4>
                        </div>
                        <div className="row">
                            <h4>{this.state.workoutData.day4.exercises[4].description}</h4>
                            <h4>Sets: {this.state.workoutData.day4.exercises[4].sets}</h4>
                            <h4>Reps: {this.state.workoutData.day4.exercises[4].reps}</h4>
                        </div>
                    </div>
                    <div className="day5 maxwidth">
                        <h2>{this.state.workoutData.day5.name}</h2>
                        <hr/>
                        <div className="row">
                            <h4>{this.state.workoutData.day5.exercises[0].description}</h4>
                            <h4>Sets: {this.state.workoutData.day5.exercises[0].sets}</h4>
                            <h4>Reps: {this.state.workoutData.day5.exercises[0].reps}</h4>
                        </div>
                        <div className="row">
                            <h4>{this.state.workoutData.day5.exercises[1].description}</h4>
                            <h4>Sets: {this.state.workoutData.day5.exercises[1].sets}</h4>
                            <h4>Reps: {this.state.workoutData.day5.exercises[1].reps}</h4>
                        </div>
                        <div className="row">
                            <h4>{this.state.workoutData.day5.exercises[2].description}</h4>
                            <h4>Sets: {this.state.workoutData.day5.exercises[2].sets}</h4>
                            <h4>Reps: {this.state.workoutData.day5.exercises[2].reps}</h4>
                        </div>
                        <div className="row">
                            <h4>{this.state.workoutData.day5.exercises[3].description}</h4>
                            <h4>Sets: {this.state.workoutData.day5.exercises[3].sets}</h4>
                            <h4>Reps: {this.state.workoutData.day5.exercises[3].reps}</h4>
                        </div>
                        <div className="row">
                            <h4>{this.state.workoutData.day5.exercises[4].description}</h4>
                            <h4>Sets: {this.state.workoutData.day5.exercises[4].sets}</h4>
                            <h4>Reps: {this.state.workoutData.day5.exercises[4].reps}</h4>
                        </div>
                    </div>
                    <div className="day6 maxwidth">
                        <h2>Day 6</h2>
                        <hr/>
                    </div>
                    <div className="day7 maxwidth">
                        <h2>Day 7</h2>
                        <hr/>
                    </div>
                    <br/>
                </div>
                <Navigation userData={this.state.userData}/>
            </div>
            </>
        );
    }
}

export default CurrentWorkout;