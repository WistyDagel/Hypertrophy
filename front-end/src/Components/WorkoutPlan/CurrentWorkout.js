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
                <div className="col content">
                    <br/>
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
                        <h2>{this.state.workoutPlan.day6.name}</h2>
                        {/* <h2>Day 6</h2> */}
                        <hr/>
                        <this.renderDay currentDay={this.state.workoutPlan.day6}/>
                    </div>
                    <div className="dayBox maxwidth">
                        <h2>{this.state.workoutPlan.day7.name}</h2>
                        {/* <h2>Day 7</h2> */}
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