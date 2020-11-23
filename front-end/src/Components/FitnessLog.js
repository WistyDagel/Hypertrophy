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
        "sugars": 0,
        "meal": [
        ]
    },

    lunch: {
        "calories": 0,
        "proteins": 0,
        "carbs": 0,
        "fats": 0,
        "sugars": 0,
        "meal": [
        ]
    },

    dinner: {
        "calories": 0,
        "proteins": 0,
        "carbs": 0,
        "fats": 0,
        "sugars": 0,
        "meal": [
        ]
    }, 

    snacks: {
        "calories": 0,
        "proteins": 0,
        "carbs": 0,
        "fats": 0,
        "sugars": 0,
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
                    "sugars": 0,
                    "meal": [
                    ]
                },
            
                lunch: {
                    "calories": 0,
                    "proteins": 0,
                    "carbs": 0,
                    "fats": 0,
                    "sugars": 0,
                    "meal": [
                    ]
                },
            
                dinner: {
                    "calories": 0,
                    "proteins": 0,
                    "carbs": 0,
                    "fats": 0,
                    "sugars": 0,
                    "meal": [
                    ]
                }, 
            
                snacks: {
                    "calories": 0,
                    "proteins": 0,
                    "carbs": 0,
                    "fats": 0,
                    "sugars": 0,
                    "meal": [
                    ]
                },
            
                exercises: [
                    
                ]
            }
        }

        this.setStorage = this.setStorage.bind(this);
        this.renderCurrentMeal = this.renderCurrentMeal.bind(this);
        // this.renderMealNutrition = this.renderMealNutrition.bind(this);
        this.renderCurrentExercises = this.renderCurrentExercises.bind(this);
        this.renderCurrentMealPlan = this.renderCurrentMealPlan.bind(this);
        this.renderCurrentWorkoutPlan = this.renderCurrentWorkoutPlan.bind(this);
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

    async renderCurrentMealPlan() {
        var mealPlan = JSON.parse(window.sessionStorage.getItem("mealPlan"));
        console.log(mealPlan);

        //BREAKFAST
        for (let i = 0; i < mealPlan.breakfast.meal.length; i++) {
            this.state.fitnessLog.breakfast.meal.push(mealPlan.breakfast.meal[i]);
        }

        //LUNCH
        for (let i = 0; i < mealPlan.lunch.meal.length; i++) {
            this.state.fitnessLog.lunch.meal.push(mealPlan.lunch.meal[i]);
        }
        
        //DINNER
        for (let i = 0; i < mealPlan.dinner.meal.length; i++) {
            this.state.fitnessLog.dinner.meal.push(mealPlan.dinner.meal[i]);
        }

        //SNACKS
        for (let i = 0; i < mealPlan.snacks.meal.length; i++) {
            this.state.fitnessLog.snacks.meal.push(mealPlan.snacks.meal[i]);
        }
        
        this.setStorage();

        await window.location.reload(false);
    }

    async renderCurrentWorkoutPlan() {
        // var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var days = ['day1', 'day2', 'day3', 'day4', 'day5', 'day6', 'day7'];
        var d = new Date();
        var dayName = days[d.getDay()];
        console.log(dayName);

        var workoutPlan = JSON.parse(window.sessionStorage.getItem("workoutPlan"));
        console.log(workoutPlan[dayName].exercises);

        var exerciseArray = [];

        for (let i = 0; i < this.state.fitnessLog.exercises.length; i++) {
            exerciseArray.push(this.state.fitnessLog.exercises[i]);
        }

        for (let i = 0; i < workoutPlan[dayName].exercises.length; i++) {
            exerciseArray.push(workoutPlan[dayName].exercises[i]);
        }

        this.state.fitnessLog.exercises = exerciseArray;

        this.setStorage();

        await window.location.reload(false);
    }

    //NEEDS WORK
    // renderMealNutrition = data => {
    //     var categoryTitle = data.category;

    //     return (
    //         <div>
    //             <div className="row">
    //                 <h2>{categoryTitle}</h2>
    //                 <h4>{this.state.mealPlan.breakfast.calories}</h4>
    //             </div>
    //             <div className="row">
    //                 <div className="col">
    //                     <h4>Proteins</h4>
    //                     <h4>{this.state.mealPlan.breakfast.proteins}</h4>
    //                 </div>
    //                 <div className="col">
    //                     <h4>Carbs</h4>
    //                     <h4>{this.state.mealPlan.breakfast.carbs}</h4>
    //                 </div>
    //                 <div className="col">
    //                     <h4>Fats</h4>
    //                     <h4>{this.state.mealPlan.breakfast.fats}</h4>
    //                 </div>
    //                 <div className="col">
    //                     <h4>Sugars</h4>
    //                     <h4>{this.state.mealPlan.breakfast.sugars}</h4>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }

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
                        <div className="row">
                            <h3>{currentMeal.meal[i].description}</h3>
                            <h4>{currentMeal.meal[i].calories}</h4>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h4>Proteins:</h4>
                                <h4>{currentMeal.meal[i].protein}</h4>
                            </div>
                            <div className="col">
                                <h4>Carbs:</h4>
                                <h4>{currentMeal.meal[i].carbs}</h4>
                            </div>
                            <div className="col">
                                <h4>Fats:</h4>
                                <h4>{currentMeal.meal[i].fats}</h4>
                            </div>
                            <div className="col">
                                <h4>Sugars:</h4>
                                <h4>{currentMeal.meal[i].sugars}</h4>
                            </div>
                        </div>
                        <br/>
                    </div>
                )
            }
            return mealArray;
        }
    }

    renderCurrentExercises = (data) => {
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
                        <div id="border" onClick={() => this.renderCurrentMealPlan()} className="button">
                            <h4>Load Current Meal Plan</h4>
                        </div>
                        <hr className="divider"/>
                        <div id="border" onClick={() => this.renderCurrentWorkoutPlan()} className="button">
                            <h4>Load Today's Workout Plan</h4>
                        </div>
                    </div>
                    <br/>
                    <div className="breakfast maxwidth">
                        <hr/>
                        <div className="row">
                            <h2>Breakfast</h2>
                            <h3>{this.state.fitnessLog.breakfast.calories}</h3>
                        </div>
                        {/* <this.renderMealNutrition category={"Breakfast"}/> */}
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
                        <hr/>
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
                        <hr/>
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
                        <hr/>
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
                        <hr/>
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