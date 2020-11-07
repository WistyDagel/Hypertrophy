import React, { Component } from 'react';
import Navigation from '../Navigation';

class CurrentWorkout extends Component {
    constructor(props){
        super(props);
        this.state = {
            userData: this.props.location.data,
            workoutData: this.props.location.workoutData
        }

        this.renderDay = this.renderDay.bind(this);
    }

    //TODO
    //STREAMLINE THE RENDER WITH METHODS WHICH BUILD AN ARRAY OF WORKOUTS
    renderDay = (data) => {
        var day = data.currentDay;
        var dayArray = [];

        if(day == undefined){
            return (
                <div className="row">
                    <h4>Rest Day</h4>
                </div>
            );
        } else {
            for (let i = 0; i < day.exercises.length; i++) {
                dayArray.push(
                    <div key={i} className="row">
                        <div className="col">
                            <h4>{day.exercises[i].description}</h4>
                        </div>
                        <div className="col">
                            <h4>Sets: {day.exercises[i].sets}</h4>
                        </div>
                        <div className="col">
                            <h4>Reps: {day.exercises[i].reps}</h4>
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
                    <div className="dayBox maxwidth">
                        <h2>{this.state.workoutData.day1.name}</h2>
                        <hr/>
                        <this.renderDay currentDay={this.state.workoutData.day1}/>
                    </div>
                    <div className="day2 maxwidth">
                        <h2>{this.state.workoutData.day2.name}</h2>
                        <hr/>
                        <this.renderDay currentDay={this.state.workoutData.day2}/>
                    </div>
                    <div className="day3 maxwidth">
                        <h2>{this.state.workoutData.day3.name}</h2>
                        <hr/>
                        <this.renderDay currentDay={this.state.workoutData.day3}/>
                    </div>
                    <div className="day4 maxwidth">
                        <h2>{this.state.workoutData.day4.name}</h2>
                        <hr/>
                        <this.renderDay currentDay={this.state.workoutData.day4}/>
                    </div>
                    <div className="day5 maxwidth">
                        <h2>{this.state.workoutData.day5.name}</h2>
                        <hr/>
                        <this.renderDay currentDay={this.state.workoutData.day5}/>
                    </div>
                    <div className="day6 maxwidth">
                        <h2>Day 6</h2>
                        <hr/>
                        <this.renderDay currentDay={this.state.workoutData.day6}/>
                    </div>
                    <div className="day7 maxwidth">
                        <h2>Day 7</h2>
                        <hr/>
                        <this.renderDay currentDay={this.state.workoutData.day7}/>
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