import React, { Component } from 'react';
import Navigation from '../Navigation';

class CreateWorkout extends Component {
    constructor(props){
        super(props);
        this.state = {
            userData: this.props.location.data, 
        }
    }

    //TODO
    //CREATE ACTUAL JSON BASED ON USER ENTRY

    componentDidMount(){
        var day1 = {
            "name": "Chest Day",
            "exercises": [
              {
                "description": "Flat Bench Barbell Press",
                "sets": 3,
                "reps": 8
              },
              {
                "description": "Incline Barbell Press",
                "sets": 3,
                "reps": 8
              },
              {
                "description": "Flat Bench Alternate Dumbell Press",
                "sets": 3,
                "reps": 8
              },
              {
                "description": "Decline Dumbell Press",
                "sets": 3,
                "reps": 8
              },
              {
                "description": "Incline Dumbell Flys",
                "sets": 3,
                "reps": 8
              },
            ]
        }
        
        var day2 = {
            "name": "Back Day",
            "exercises": [
                {
                  "description": "Pull ups",
                  "sets": 3,
                  "reps": 8
                },
                {
                  "description": "Deadlifts",
                  "sets": 3,
                  "reps": 8
                },
                {
                  "description": "Seated Row",
                  "sets": 3,
                  "reps": 8
                },
                {
                  "description": "Back Extension",
                  "sets": 3,
                  "reps": 8
                },
                {
                  "description": "Bent Over Row",
                  "sets": 3,
                  "reps": 8
                },
              ]
        }
          
        var day3 = {
            "name": "Shoulder Day",
            "exercises": [
                {
                  "description": "Military Press",
                  "sets": 3,
                  "reps": 8
                },
                {
                  "description": "Arnold Press",
                  "sets": 3,
                  "reps": 8
                },
                {
                  "description": "Lateral Raise",
                  "sets": 3,
                  "reps": 8
                },
                {
                  "description": "Shrugs",
                  "sets": 3,
                  "reps": 8
                },
                {
                  "description": "Barbell Upright Row",
                  "sets": 3,
                  "reps": 8
                },
              ]
        }

        var day4 = {
            "name": "Leg Day",
            "exercises": [
                {
                  "description": "Squats",
                  "sets": 3,
                  "reps": 8
                },
                {
                  "description": "Leg Press",
                  "sets": 3,
                  "reps": 8
                },
                {
                  "description": "Leg Extension",
                  "sets": 3,
                  "reps": 8
                },
                {
                  "description": "Leg Curl",
                  "sets": 3,
                  "reps": 8
                },
                {
                  "description": "Lunges",
                  "sets": 3,
                  "reps": 8
                },
              ]
        }

        var day5 = {
            "name": "Arm Day",
            "exercises": [
                {
                  "description": "Dumbbel Curls",
                  "sets": 3,
                  "reps": 8
                },
                {
                  "description": "Tricep dips",
                  "sets": 3,
                  "reps": 8
                },
                {
                  "description": "Barbell Curls",
                  "sets": 3,
                  "reps": 8
                },
                {
                  "description": "Preacher Curls",
                  "sets": 3,
                  "reps": 8
                },
                {
                  "description": "Skull Crushers",
                  "sets": 3,
                  "reps": 8
                },
                {
                    "description": "Cable Kick-backs",
                    "sets": 3,
                    "reps": 8
                },
              ]
        }

        fetch("http://localhost:3001/workoutplan", {
            method: "POST",
            headers: {'Content-Type': "application/json"},
            body: JSON.stringify({
                name: 'Captain America Workout',
                description: "This is Chris Dazley's personal workout plan",
                day1: day1,
                day2: day2,
                day3: day3,
                day4: day4,
                day5: day5
            })
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                console.log(data);
            }
        });
    }

    render() {
        return  (
            <>
            <div className="flexbox">
                <div className="header">
                    <h2>Hypertrophy</h2>
                    <hr/>
                </div>
                <div className="content">
                    <div className="entrybox">
                        <h2>Create your workout plan</h2>
                        <br/>
                        <div className="row">
                            <div className="col">
                                <h4>Name:</h4>
                                <br/>
                                <h4>Description: </h4>
                            </div>
                            <div className="col">
                                <input></input>
                                <br/>
                                <input></input>
                            </div>
                        </div>    
                    </div>
                    <br/>
                    <div className="day1 maxwidth">
                        <h2>Day 1</h2>
                        <hr/>
                        <a href="/addexercise">Add Exercise</a>
                    </div>
                    <div className="day2 maxwidth">
                        <h2>Day 2</h2>
                        <hr/>
                        <a href="/addexercise">Add Exercise</a>
                    </div>
                    <div className="day3 maxwidth">
                        <h2>Day 3</h2>
                        <hr/>
                        <a href="/addexercise">Add Exercise</a>
                    </div>
                    <div className="day4 maxwidth">
                        <h2>Day 4</h2>
                        <hr/>
                        <a href="/addexercise">Add Exercise</a>
                    </div>
                    <div className="day5 maxwidth">
                        <h2>Day 5</h2>
                        <hr/>
                        <a href="/addexercise">Add Exercise</a>
                    </div>
                    <div className="day6 maxwidth">
                        <h2>Day 6</h2>
                        <hr/>
                        <a href="/addexercise">Add Exercise</a>
                    </div>
                    <div className="day7 maxwidth">
                        <h2>Day 7</h2>
                        <hr/>
                        <a href="/addexercise">Add Exercise</a>
                    </div>
                    <br/>
                </div>
                <Navigation userData={this.state.userData}/>
            </div>
            </>
        );
    }
}

export default CreateWorkout;