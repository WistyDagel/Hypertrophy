import React, { Component } from 'react';
import Header from '../Header';
import Navigation from '../Navigation';

class CurrentMeal extends Component {
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

        this.renderCurrentMeal = this.renderCurrentMeal.bind(this);
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

        //Gets the most current iteration of the user's mealPlan
        await fetch(`http://localhost:3001/mealplan/${this.state.userData.mealPlanID}`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                mealPlan: data[0],
            });
            console.log(data);
        });
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

    render() {
        return  (
            <>
            <div className="flexbox">
                <Header/>
                <div className="col content">
                    <br/>
                    <div className="row">
                        <div className="col">
                            <h2 className="planTitle">{this.state.mealPlan.name}</h2>
                            <br/>
                            <h4 className="planDescription">{this.state.mealPlan.description}</h4>
                        </div>
                    </div>    
                    <br/>
                    <div className="breakfast maxwidth">
                        <hr/>
                        <div className="row">
                            <h2>Breakfast</h2>
                            <h3>{this.state.mealPlan.breakfast.calories}</h3>
                        </div>
                        <br/>
                        <this.renderCurrentMeal currentMeal={this.state.mealPlan.breakfast}/>
                    </div>
                    <div className="lunch maxwidth">
                        <hr/>
                        <div className="row">
                            <h2>Lunch</h2>
                            <h3>{this.state.mealPlan.lunch.calories}</h3>
                        </div>
                        <br/>
                        <this.renderCurrentMeal currentMeal={this.state.mealPlan.lunch}/>
                    </div>
                    <div className="dinner maxwidth">
                        <hr/>
                        <div className="row">
                            <h2>Dinner</h2>
                            <h3>{this.state.mealPlan.dinner.calories}</h3>
                        </div>
                        <br/>
                        <this.renderCurrentMeal currentMeal={this.state.mealPlan.dinner}/>
                    </div>
                    <div className="snacks maxwidth">
                        <hr/>
                        <div className="row">
                            <h2>Snacks</h2>
                            <h3>{this.state.mealPlan.snacks.calories}</h3>
                        </div>
                        <br/>
                        <this.renderCurrentMeal currentMeal={this.state.mealPlan.snacks}/>
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

export default CurrentMeal;