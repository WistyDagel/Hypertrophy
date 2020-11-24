import React, { Component } from 'react';
import Header from '../Header';
import Navigation from '../Navigation';

class CurrentWorkout extends Component {
    constructor(props){
        super(props);
        this.state = {
            workoutPlan: JSON.parse(window.sessionStorage.getItem("workoutPlan"))
        }

        this.renderDay = this.renderDay.bind(this);
    }

    async componentDidMount(){
        await fetch(`http://localhost:3001/users/${window.sessionStorage.getItem("userId")}`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                userData: data[0]
            })
        });

        // await fetch(`http://localhost:3001/workoutplan/${this.state.userData.workoutPlanID}`, {
        //     method: "GET",
        //     headers: {'Content-Type': "application/json"},
        // })
        // .then(res=> res.json())
        // .then(data => {
        //     this.setState({
        //         workoutPlan: data[0]
        //     })
        // })
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
                    <div key={i}>
                        <div className="">
                            <div className="workoutDescription">
                                <h4 className="planTitle">{day.exercises[i].description}</h4>
                            </div>
                        </div>
                        <div className="planRow">
                            <div className="workoutDuration">
                                <h4>Duration: X minutes</h4>
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
                <div className="col content">
                    <h2>Current Workout Plan</h2>
                    <div className="row">
                        <div className="col">
                            <h2 className="planTitle">{this.state.workoutPlan.name}</h2>
                            <br/>
                            <h4 className="planDescription">{this.state.workoutPlan.description}</h4>
                        </div>
                    </div>    
                    <br/>
                    <div className="dayBox maxwidth">
                        <h2>{this.state.workoutPlan.day1.name}</h2>
                        <hr/>
                        <this.renderDay currentDay={this.state.workoutPlan.day1}/>
                    </div>
                    <div className="dayBox maxwidth">
                        <h2>{this.state.workoutPlan.day2.name}</h2>
                        <hr/>
                        <this.renderDay currentDay={this.state.workoutPlan.day2}/>
                    </div>
                    <div className="dayBox maxwidth">
                        <h2>{this.state.workoutPlan.day3.name}</h2>
                        <hr/>
                        <this.renderDay currentDay={this.state.workoutPlan.day3}/>
                    </div>
                    <div className="dayBox maxwidth">
                        <h2>{this.state.workoutPlan.day4.name}</h2>
                        <hr/>
                        <this.renderDay currentDay={this.state.workoutPlan.day4}/>
                    </div>
                    <div className="dayBox maxwidth">
                        <h2>{this.state.workoutPlan.day5.name}</h2>
                        <hr/>
                        <this.renderDay currentDay={this.state.workoutPlan.day5}/>
                    </div>
                    <div className="dayBox maxwidth">
                        {/* <h2>{this.state.workoutPlan.day6.name}</h2> */}
                        <h2>Day 6</h2>
                        <hr/>
                        <this.renderDay currentDay={this.state.workoutPlan.day6}/>
                    </div>
                    <div className="dayBox maxwidth">
                        {/* <h2>{this.state.workoutPlan.day7.name}</h2> */}
                        <h2>Day 7</h2>
                        <hr/>
                        <this.renderDay currentDay={this.state.workoutPlan.day7}/>
                    </div>
                    <br/>
                    <br/>
                </div>
                <Navigation/>
            </div>
            </>
        );
    }
}

export default CurrentWorkout;