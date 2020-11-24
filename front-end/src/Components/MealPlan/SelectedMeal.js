import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Header from '../Header';
import Navigation from '../Navigation';

class SelectedMeal extends Component {
    constructor(props){
        super(props);
        this.state = {
            userData: '',
            mealPlan: this.props.location.mealPlan
        }

        this.renderCurrentMeal = this.renderCurrentMeal.bind(this);
        this.updateCurrentMeal = this.updateCurrentMeal.bind(this);
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
                    </div>
                )
            }
            return mealArray;
        }
    }

    updateCurrentMeal = () => {
        fetch(`http://localhost:3001/users/${this.state.userData._id}`, {
            method: "PUT",
            headers: {'Content-Type': "application/json"},
            body: JSON.stringify({
                mealPlanID: this.state.mealPlan._id
            })
        })
    }

    render() {
        return  (
            <>
            <div className="flexbox">
                <Header/>
                <div className="col">
                    <h2>Current Meal Plan</h2>
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
                        <hr/>
                        <this.renderCurrentMeal currentMeal={this.state.mealPlan.breakfast}/>
                    </div>
                    <div className="lunch maxwidth">
                        <hr/>
                        <div className="row">
                            <h2>Lunch</h2>
                            <h3>{this.state.mealPlan.lunch.calories}</h3>
                        </div>
                        <hr/>
                        <this.renderCurrentMeal currentMeal={this.state.mealPlan.lunch}/>
                    </div>
                    <div className="dinner maxwidth">
                        <hr/>
                        <div className="row">
                            <h2>Dinner</h2>
                            <h3>{this.state.mealPlan.dinner.calories}</h3>
                        </div>
                        <hr/>
                        <this.renderCurrentMeal currentMeal={this.state.mealPlan.dinner}/>
                    </div>
                    <div className="snacks maxwidth">
                        <hr/>
                        <div className="row">
                            <h2>Snacks</h2>
                            <h3>{this.state.mealPlan.snacks.calories}</h3>
                        </div>
                        <hr/>
                        <this.renderCurrentMeal currentMeal={this.state.mealPlan.snacks}/>
                    </div>
                    <div id="border" onClick={() =>this.updateCurrentMeal()} className="button">
                        <a href='/home'>Select Meal Plan</a>
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

export default SelectedMeal;