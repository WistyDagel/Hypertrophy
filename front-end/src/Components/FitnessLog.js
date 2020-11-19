import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import NutritionalBank from './NutritionalBank';

var fitnessLog = {
    breakfast: {
        "calories": 0,
        "proteins": 0,
        "carbs": 0,
        "fats": 0,
        "meal": [
        ]
    },

    lunch: {
        "calories": 0,
        "proteins": 0,
        "carbs": 0,
        "fats": 0,
        "meal": [
        ]
    },

    dinner: {
        "calories": 0,
        "proteins": 0,
        "carbs": 0,
        "fats": 0,
        "meal": [
        ]
    }, 

    snacks: {
        "calories": 0,
        "proteins": 0,
        "carbs": 0,
        "fats": 0,
        "meal": [
        ]
    },

    exercises: [

    ]
}

class FitnessLog extends Component {
    constructor(props){
        super(props);
        this.state = {
            userData: '',
            fitnessLog: {
                breakfast: {
                    "calories": 0,
                    "proteins": 0,
                    "carbs": 0,
                    "fats": 0,
                    "meal": [
                    ]
                },
            
                lunch: {
                    "calories": 0,
                    "proteins": 0,
                    "carbs": 0,
                    "fats": 0,
                    "meal": [
                    ]
                },
            
                dinner: {
                    "calories": 0,
                    "proteins": 0,
                    "carbs": 0,
                    "fats": 0,
                    "meal": [
                    ]
                }, 
            
                snacks: {
                    "calories": 0,
                    "proteins": 0,
                    "carbs": 0,
                    "fats": 0,
                    "meal": [
                    ]
                },
            
                exercises: [
                    
                ]
            }
        }

        this.setStorage = this.setStorage.bind(this);
        this.renderCurrentMeal = this.renderCurrentMeal.bind(this);
        this.renderCurrentExercises = this.renderCurrentExercises.bind(this);
    }

    async componentDidMount(){
        //Gets the most current iteration of the user
        await fetch(`http://localhost:3001/users/${window.sessionStorage.getItem("userId")}`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                userData: data[0]
            })
        });

        var fitnessLogSession = JSON.parse(window.sessionStorage.getItem("fitnessLog"));

        if(fitnessLogSession != undefined){
            console.log(fitnessLogSession);
            this.setState({
                fitnessLog: fitnessLogSession
            })
        }
    }

    renderCurrentMeal = data => {
        var currentMeal = data.currentMeal
        var mealArray = [];

        if(currentMeal == undefined){
            return (
                <></>
            )
        } else {
            for (let i = 0; i < currentMeal.meal.length; i++) {
                mealArray.push(
                    <div key={i}>
                        <h3>{currentMeal.meal[i].description}</h3>
                    </div>
                )
            }
            return mealArray;
        }
    }

    renderCurrentExercises = (data) => {
        // var day = data.currentDay;
        // var dayArray = [];

        // if(day == undefined){
        //     return (
        //         <></>
        //     );
        // } else {
        //     for (let i = 0; i < day.exercises.length; i++) {
        //         dayArray.push(
        //             <div key={i}>
        //                 <div className="">
        //                     <div className="workoutDescription">
        //                         <h4 className="planTitle">{day.exercises[i].description}</h4>
        //                     </div>
        //                 </div>
        //                 <div className="planRow">
        //                     <div className="workoutDuration">
        //                         <h4>Duration: {day.exercises[i].duration}</h4>
        //                     </div>
        //                     <div className="workoutSets">
        //                         <h4>Sets: {day.exercises[i].sets}</h4>
        //                     </div>
        //                     <div className="workoutSets">
        //                         <h4>Reps: {day.exercises[i].reps}</h4>
        //                     </div>
        //                 </div>
        //             </div>
        //         );
        //     }
        //     return dayArray;
        // }

        var exercises = data.currentExercises;
        var exerciseArray = [];

        if(exercises == undefined){
            return (
                <></>
            );
        } else {
            for (let i = 0; i < exercises.length; i++) {
                exerciseArray.push(
                    <div key={i}>
                        <div className="">
                            <div className="workoutDescription">
                                <h4 className="planTitle">{exercises[i].description}</h4>
                            </div>
                        </div>
                        <div className="planRow">
                            <div className="workoutDuration">
                                <h4>Duration: {exercises[i].duration}</h4>
                            </div>
                            <div className="workoutSets">
                                <h4>Sets: {exercises[i].sets}</h4>
                            </div>
                            <div className="workoutSets">
                                <h4>Reps: {exercises[i].reps}</h4>
                            </div>
                        </div>
                    </div>
                );
            }
            return exerciseArray;
        }
    }

    setStorage = () => {
        window.sessionStorage.setItem("fitnessLog", JSON.stringify(this.state.fitnessLog));
    }

    render() {
        return  (
            <>
            <div className="flexbox">
                <Header/>
                <div className="content">
                    <NutritionalBank/>
                    <br/>
                    <div className="row">
                        <div id="border" className="button">
                            <h4>Load Current Meal Plan</h4>
                        </div>
                        <div id="border" className="button">
                            <h4>Load Today's Workout Plan</h4>
                        </div>
                    </div>
                    <div className="breakfast maxwidth">
                        <h2>Breakfast</h2>
                        <hr/>
                        <this.renderCurrentMeal currentMeal={this.state.fitnessLog.breakfast}/>
                        <div id="border" onClick={() => this.setStorage()} className="button">
                            <Link
                                to={{
                                    pathname: "/addfood",
                                    data: "breakfast"
                                }}
                            >Add Food</Link>
                        </div>
                    </div>
                    <div className="lunch maxwidth">
                        <h2>Lunch</h2>
                        <hr/>
                        <this.renderCurrentMeal currentMeal={this.state.fitnessLog.lunch}/>
                        <div id="border" onClick={() => this.setStorage()} className="button">
                            <Link
                                to={{
                                    pathname: "/addfood",
                                    data: "lunch"
                                }}
                            >Add Food</Link>
                        </div>                        
                    </div>
                    <div className="dinner maxwidth">
                        <h2>Dinner</h2>
                        <hr/>
                        <this.renderCurrentMeal currentMeal={this.state.fitnessLog.dinner}/>
                        <div id="border" onClick={() => this.setStorage()} className="button">
                            <Link
                                to={{
                                    pathname: "/addfood",
                                    data: "dinner"
                                }}
                            >Add Food</Link>
                        </div>  
                    </div>
                    <div className="snacks maxwidth">
                        <h2>Snacks</h2>
                        <hr/>
                        <this.renderCurrentMeal currentMeal={this.state.fitnessLog.snacks}/>
                        <div id="border" onClick={() => this.setStorage()} className="button">
                            <Link
                                to={{
                                    pathname: "/addfood",
                                    data: "snacks"
                                }}
                            >Add Food</Link>
                        </div>  
                    </div>
                    <div className="exercises maxwidth">
                        <h2>Exercises</h2>
                        <hr/>
                        <this.renderCurrentExercises currentExercises={this.state.fitnessLog.exercises}/>
                        <div id="border" onClick={() => this.setStorage()} className="button">
                            <Link
                                to={{
                                    pathname: "/addexercise",
                                }}
                            >Add Exercise</Link>
                        </div>  
                    </div>
                </div>
                <Navigation/>
            </div>
            </>
        );
    }
}

export default FitnessLog;