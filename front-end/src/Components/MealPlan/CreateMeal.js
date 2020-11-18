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
        this.mealSummation = this.mealSummation.bind(this);
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

            await this.mealSummation(this.state.mealPlan.breakfast);
            await this.mealSummation(this.state.mealPlan.lunch);
            await this.mealSummation(this.state.mealPlan.dinner);
            await this.mealSummation(this.state.mealPlan.snacks);
        }
    }

    mealSummation(currentMeal){
        for (let i = 0; i < currentMeal.meal.length; i++) {
            currentMeal.calories += Math.trunc(currentMeal.meal[i].calories);
            currentMeal.carbs += Math.trunc(currentMeal.meal[i].carbs);
            currentMeal.fats += Math.trunc(currentMeal.meal[i].fats);
            currentMeal.proteins += Math.trunc(currentMeal.meal[i].protein);
            currentMeal.sugars += Math.trunc(currentMeal.meal[i].sugars);
        }
    }

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

    render() {
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
                        <div className="row">
                            <h2>Breakfast</h2>
                            <h4>{this.state.mealPlan.breakfast.calories}</h4>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h4>Proteins</h4>
                                <h4>{this.state.mealPlan.breakfast.proteins}</h4>
                            </div>
                            <div className="col">
                                <h4>Carbs</h4>
                                <h4>{this.state.mealPlan.breakfast.carbs}</h4>
                            </div>
                            <div className="col">
                                <h4>Fats</h4>
                                <h4>{this.state.mealPlan.breakfast.fats}</h4>
                            </div>
                            <div className="col">
                                <h4>Sugars</h4>
                                <h4>{this.state.mealPlan.breakfast.sugars}</h4>
                            </div>
                        </div>
                        <hr/>
                        <this.renderCurrentMeal currentMeal={this.state.mealPlan.breakfast}/>
                        <div id="border" onClick={() => this.setStorage()} className="button">
                            <Link
                                to={{
                                    pathname: "/addfoodmp",
                                    data: "breakfast"
                                }}
                            >Add Food</Link>
                        </div>
                    </div>
                    <div className="lunch maxwidth">
                        <div className="row">
                            <h2>Lunch</h2>
                            <h4>{this.state.mealPlan.lunch.calories}</h4>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h4>Proteins</h4>
                                <h4>{this.state.mealPlan.lunch.proteins}</h4>
                            </div>
                            <div className="col">
                                <h4>Carbs</h4>
                                <h4>{this.state.mealPlan.lunch.carbs}</h4>
                            </div>
                            <div className="col">
                                <h4>Fats</h4>
                                <h4>{this.state.mealPlan.lunch.fats}</h4>
                            </div>
                            <div className="col">
                                <h4>Sugars</h4>
                                <h4>{this.state.mealPlan.lunch.sugars}</h4>
                            </div>
                        </div>
                        <hr/>
                        <this.renderCurrentMeal currentMeal={this.state.mealPlan.lunch}/>
                        <div id="border" onClick={() => this.setStorage()} className="button">
                            <Link
                                to={{
                                    pathname: "/addfoodmp",
                                    data: "lunch"
                                }}
                            >Add Food</Link>
                        </div>
                    </div>
                    <div className="dinner maxwidth">
                        <div className="row">
                            <h2>Dinner</h2>
                            <h4>{this.state.mealPlan.dinner.calories}</h4>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col">
                                <h4>Proteins</h4>
                                <h4>{this.state.mealPlan.dinner.proteins}</h4>
                            </div>
                            <div className="col">
                                <h4>Carbs</h4>
                                <h4>{this.state.mealPlan.dinner.carbs}</h4>
                            </div>
                            <div className="col">
                                <h4>Fats</h4>
                                <h4>{this.state.mealPlan.dinner.fats}</h4>
                            </div>
                            <div className="col">
                                <h4>Sugars</h4>
                                <h4>{this.state.mealPlan.dinner.sugars}</h4>
                            </div>
                        </div>
                        <hr/>
                        <this.renderCurrentMeal currentMeal={this.state.mealPlan.dinner}/>
                        <div id="border" onClick={() => this.setStorage()} className="button">
                            <Link
                                to={{
                                    pathname: "/addfoodmp",
                                    data: "dinner"
                                }}
                            >Add Food</Link>
                        </div>
                    </div>
                    <div className="snacks maxwidth">
                        <div className="row">
                            <h2>Snacks</h2>
                            <h4>{this.state.mealPlan.snacks.calories}</h4>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col">
                                <h4>Proteins</h4>
                                <h4>{this.state.mealPlan.snacks.proteins}</h4>
                            </div>
                            <div className="col">
                                <h4>Carbs</h4>
                                <h4>{this.state.mealPlan.snacks.carbs}</h4>
                            </div>
                            <div className="col">
                                <h4>Fats</h4>
                                <h4>{this.state.mealPlan.snacks.fats}</h4>
                            </div>
                            <div className="col">
                                <h4>Sugars</h4>
                                <h4>{this.state.mealPlan.snacks.sugars}</h4>
                            </div>
                        </div>
                        <hr/>
                        <this.renderCurrentMeal currentMeal={this.state.mealPlan.snacks}/>
                        <div id="border" onClick={() => this.setStorage()} className="button">
                            <Link
                                to={{
                                    pathname: "/addfoodmp",
                                    data: "snacks"
                                }}
                            >Add Food</Link>
                        </div>
                    </div>
                    <br/>
                    <button
                        id="border"
                        onClick={() => this.createMealPlan()}
                    >Create Meal Plan</button>
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