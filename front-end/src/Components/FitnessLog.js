import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import NutritionalBank from './NutritionalBank';
import calcStats from './CalculateStats';

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
            },
            currentCalories: 0
        }

        this.setStorage = this.setStorage.bind(this);
        this.renderCurrentMeal = this.renderCurrentMeal.bind(this);
        // this.renderMealNutrition = this.renderMealNutrition.bind(this);
        this.renderCurrentExercises = this.renderCurrentExercises.bind(this);
        this.renderCurrentMealPlan = this.renderCurrentMealPlan.bind(this);
        this.renderCurrentWorkoutPlan = this.renderCurrentWorkoutPlan.bind(this);
        this.updateMealCalories = this.updateMealCalories.bind(this);
        this.updateAccountCalories = this.updateAccountCalories.bind(this);
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
                        <div className="row mealName">
                            <h3>{currentMeal.meal[i].description}</h3>
                        </div>
                        <div style={{margin: "0px 15px 0px 20px", textAlign: "left", padding: "0px 12px"}} className="border-black">
                            <h3>Calories: {currentMeal.meal[i].calories}</h3>
                        </div>
                        <div className="row">
                            <div style={{padding: "0px 10px"}} className="col border-black">
                                <h4>Proteins</h4>
                                <h4>{currentMeal.meal[i].protein}</h4>
                            </div>
                            <div style={{padding: "0px 15px"}} className="col border-black">
                                <h4>Carbs</h4>
                                <h4>{currentMeal.meal[i].carbs}</h4>
                            </div>
                            <div style={{padding: "0px 15px"}} className="col border-black">
                                <h4>Fats</h4>
                                <h4>{currentMeal.meal[i].fats}</h4>
                            </div>
                            <div style={{padding: "0px 10px"}} className="col border-black">
                                <h4>Sugars</h4>
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

    updateMealCalories = (currentMeal) => {
        var calories = 0;
        for (let i = 0; i < currentMeal.meal.length; i++) {
            calories += currentMeal.meal[i].calories;
        }
        currentMeal.calories = calories;
    }
    //NEEDS WORK
    updateAccountCalories = () => {
        // var breakfastCalories = this.state.fitnessLog.breakfast.calories;
        // var lunchCalories = this.state.fitnessLog.lunch.calories;
        // var dinnerCalories = this.state.fitnessLog.dinner.calories;
        // var snackCalories = this.state.fitnessLog.snacks.calories;
        // var cal = breakfastCalories + lunchCalories + dinnerCalories + snackCalories;

        // if(cal != 0){
        //     var calories = this.state.userData.caloriesCopy;
        //     calories -= cal;
        //     var nutrientList = calcStats.calculateMacros(calories);
        //     fetch(`http://localhost:3001/users/${window.sessionStorage.getItem("userId")}`, {
        //         method: "PUT",
        //         headers: {'Content-Type': "application/json"},
        //         body: JSON.stringify({
        //             caloriesCopy: calories,
        //             proteins: nutrientList[0],
        //             carbs: nutrientList[1],
        //             fats: nutrientList[2],
        //             sugars: nutrientList[3],
        //         })
        //     })
        //     .then(res => res.json())
        //     .then(data => {
        //         if(data){
        //             console.log(data);
        //         }
        //     });
        // }
    }

    resetFitnessLog = () => {
        window.sessionStorage.setItem("fitnessLog", JSON.stringify(fitnessLog));
    }

    render() {
        this.updateMealCalories(this.state.fitnessLog.breakfast);
        this.updateMealCalories(this.state.fitnessLog.lunch);
        this.updateMealCalories(this.state.fitnessLog.dinner);
        this.updateMealCalories(this.state.fitnessLog.snacks);
        // this.updateAccountCalories();
        return  (
            <>
            <div className="flexbox">
                <Header/>
                <div className="content">
                    <NutritionalBank/>
                    <br/>
                    <div className="row">
                        <div style={{marginRight: "20px"}} className="button border-black" onClick={() => this.renderCurrentMealPlan()}>
                            <h4>Load Your Current Meal Plan</h4>
                        </div>
                        {/* <hr className="divider"/> */}
                        <div className="button border-black" onClick={() => this.renderCurrentWorkoutPlan()}>
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
                        <div style={{marginLeft: "10px"}}  onClick={() => this.setStorage()} className="button border-blue">
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
                        <div className="row">
                            <h2>Lunch</h2>
                            <h3>{this.state.fitnessLog.lunch.calories}</h3>
                        </div>
                        <hr/>
                        <this.renderCurrentMeal currentMeal={this.state.fitnessLog.lunch}/>
                        <div style={{marginLeft: "10px"}}  onClick={() => this.setStorage()} className="button border-blue">
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
                        <div className="row">
                            <h2>Dinner</h2>
                            <h3>{this.state.fitnessLog.dinner.calories}</h3>
                        </div>                        <hr/>
                        <this.renderCurrentMeal currentMeal={this.state.fitnessLog.dinner}/>
                        <div style={{marginLeft: "10px"}}  onClick={() => this.setStorage()} className="button border-blue">
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
                        <div className="row">
                            <h2>Snacks</h2>
                            <h3>{this.state.fitnessLog.snacks.calories}</h3>
                        </div>                        <hr/>
                        <this.renderCurrentMeal currentMeal={this.state.fitnessLog.snacks}/>
                        <div style={{marginLeft: "10px"}} onClick={() => this.setStorage()} className="button border-blue">
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
                        <div className="row">
                            <h2>Exercises</h2>
                        </div>
                        <hr/>
                        <this.renderCurrentExercises currentExercises={this.state.fitnessLog.exercises}/>
                        <div style={{marginLeft: "10px"}}  onClick={() => this.setStorage()} className="button border-blue">
                            <Link
                                to={{
                                    pathname: "/addexercise",
                                }}
                            >Add Exercise</Link>
                        </div>  
                    </div>
                    <div onClick={() =>this.resetFitnessLog()} className="button border-black">
                        <a href='/fitnesslog'>Reset Today's Log</a>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                </div>
                <Navigation/>
            </div>
            </>
        );
    }
}

export default FitnessLog;