import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Navigation from '../Navigation';

var mealPlan = {
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
    }
}

class CreateMeal extends Component {
    constructor(props){
        super(props);
        this.state = {
            userData: '',
            mealPlan: {
                name: '',
                description: '',
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
                }
            }
        }

        this.updateMealName = this.updateMealName.bind(this);
        this.updateMealDescription = this.updateMealDescription.bind(this);

        this.renderCurrentMeal = this.renderCurrentMeal.bind(this);
        this.updateMealCalories = this.updateMealCalories.bind(this);
        // this.renderMealNutrition = this.renderMealNutrition.bind(this);
        // this.mealSummation = this.mealSummation.bind(this);
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

        var mealSession = JSON.parse(window.sessionStorage.getItem("mealSession"));

        if(mealSession != undefined){
            console.log(mealSession);
            this.setState({
                mealPlan: mealSession
            })

            // this.mealSummation(this.state.mealPlan.breakfast);
            // this.mealSummation(this.state.mealPlan.lunch);
            // this.mealSummation(this.state.mealPlan.dinner);
            // this.mealSummation(this.state.mealPlan.snacks);
        }
    }

    // mealSummation(currentMeal){
    //     for (let i = 0; i < currentMeal.meal.length; i++) {
    //         currentMeal.calories += Math.trunc(currentMeal.meal[i].calories);
    //         currentMeal.carbs += Math.trunc(currentMeal.meal[i].carbs);
    //         currentMeal.fats += Math.trunc(currentMeal.meal[i].fats);
    //         currentMeal.proteins += Math.trunc(currentMeal.meal[i].protein);
    //         currentMeal.sugars += Math.trunc(currentMeal.meal[i].sugars);
    //     }
    // }

    updateMealName(evt) {
        this.state.mealPlan.name = evt.target.value;
    }

    updateMealDescription(evt) {
        this.state.mealPlan.description = evt.target.value;
    }

    setStorage = () => {
        console.log(this.state.mealPlan);
        window.sessionStorage.setItem("mealSession", JSON.stringify(this.state.mealPlan));
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
                        <div style={{margin: "0px 20px 0px 20px", textAlign: "left", padding: "0px 12px"}} className="border-black">
                            <h3>Calories: {currentMeal.meal[i].calories}</h3>
                        </div>
                        <div className="row">
                            <div style={{width: "100%"}} className="col border-black">
                                <h4>Proteins</h4>
                                <h4>{currentMeal.meal[i].protein}</h4>
                            </div>
                            <div style={{width: "100%"}} className="col border-black">
                                <h4>Carbs</h4>
                                <h4>{currentMeal.meal[i].carbs}</h4>
                            </div>
                            <div style={{width: "100%"}} className="col border-black">
                                <h4>Fats</h4>
                                <h4>{currentMeal.meal[i].fats}</h4>
                            </div>
                            <div style={{width: "100%"}} className="col border-black">
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

    createMealPlan() {
        fetch("http://localhost:3001/mealplan", {
            method: "POST",
            headers: {'Content-Type': "application/json"},
            body: JSON.stringify({
                name: this.state.mealPlan.name,
                description: this.state.mealPlan.description,
                breakfast: this.state.mealPlan.breakfast,
                lunch: this.state.mealPlan.lunch,
                dinner: this.state.mealPlan.dinner,
                snacks: this.state.mealPlan.snacks
            })
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                console.log(data);
            }
        });

        window.sessionStorage.removeItem("mealSession");
    }

    updateMealCalories = (currentMeal) => {
        var calories = 0;
        for (let i = 0; i < currentMeal.meal.length; i++) {
            calories += currentMeal.meal[i].calories;
            console.log(calories);
        }
        currentMeal.calories = calories;
    }

    render() {  
        this.updateMealCalories(this.state.mealPlan.breakfast);
        this.updateMealCalories(this.state.mealPlan.lunch);
        this.updateMealCalories(this.state.mealPlan.dinner);
        this.updateMealCalories(this.state.mealPlan.snacks);
       return  (
            <>
            <div className="flexbox">
                <Header/>
                <div className="content">
                    <div className="entrybox">
                        <h2>Create your meal plan</h2>
                        <br/>
                        <div className="row">
                            <div className="col">
                                <h4>Name:</h4>
                                <br/>
                                <h4>Description: </h4>
                            </div>
                            <div className="col">
                                <input onChange={this.updateMealName} defaultValue={this.state.mealPlan.name}></input>
                                <br/>
                                <input onChange={this.updateMealDescription} defaultValue={this.state.mealPlan.description}></input>
                            </div>
                        </div>    
                    </div>
                    <div className="breakfast maxwidth">
                        <hr/>
                        <div className="row">
                            <h2>Breakfast</h2>
                            <h3>{this.state.mealPlan.breakfast.calories}</h3>
                        </div>
                        {/* <this.renderMealNutrition category={"Breakfast"}/> */}
                        <hr/>
                        <this.renderCurrentMeal currentMeal={this.state.mealPlan.breakfast}/>
                        <div style={{marginLeft: "10px"}} onClick={() => this.setStorage()} className="button border-blue">
                            <Link
                                to={{
                                    pathname: "/addfoodmp",
                                    data: "breakfast"
                                }}
                            >Add Food</Link>
                        </div>
                    </div>
                    <div className="lunch maxwidth">
                        <hr/>
                        <div className="row">
                            <h2>Lunch</h2>
                            <h3>{this.state.mealPlan.lunch.calories}</h3>
                        </div>
                        <hr/>
                        <this.renderCurrentMeal currentMeal={this.state.mealPlan.lunch}/>
                        <div style={{marginLeft: "10px"}} onClick={() => this.setStorage()} className="button border-blue">
                            <Link
                                to={{
                                    pathname: "/addfoodmp",
                                    data: "lunch"
                                }}
                            >Add Food</Link>
                        </div>
                    </div>
                    <div className="dinner maxwidth">
                        <hr/>
                        <div className="row">
                            <h2>Dinner</h2>
                            <h3>{this.state.mealPlan.dinner.calories}</h3>
                        </div>
                        <hr/>
                        <this.renderCurrentMeal currentMeal={this.state.mealPlan.dinner}/>
                        <div style={{marginLeft: "10px"}} onClick={() => this.setStorage()} className="button border-blue">
                            <Link
                                to={{
                                    pathname: "/addfoodmp",
                                    data: "dinner"
                                }}
                            >Add Food</Link>
                        </div>
                    </div>
                    <div className="snacks maxwidth">
                        <hr/>
                        <div className="row">
                            <h2>Snacks</h2>
                            <h3>{this.state.mealPlan.snacks.calories}</h3>
                        </div>
                        <hr/>
                        <this.renderCurrentMeal currentMeal={this.state.mealPlan.snacks}/>
                        <div style={{marginLeft: "10px"}} onClick={() => this.setStorage()} className="button border-blue">
                            <Link
                                to={{
                                    pathname: "/addfoodmp",
                                    data: "snacks"
                                }}
                            >Add Food</Link>
                        </div>
                    </div>
                    <br/>
                    <div onClick={() =>this.createMealPlan()} className="button border-black">
                        <a href='/selectmeal'>Create Meal Plan</a>
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

export default CreateMeal;