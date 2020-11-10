import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Navigation from '../Navigation';

class SelectedMeal extends Component {
    constructor(props){
        super(props);
        this.state = {
            userData: this.props.location.data,
            mealData: this.props.location.mealPlanData
        }

        this.renderCurrentMeal = this.renderCurrentMeal.bind(this);
        this.updateCurrentMeal = this.updateCurrentMeal.bind(this);
    }

    renderCurrentMeal = data => {
        var currentMeal = data.currentMeal
        var mealArray = [];

        if(currentMeal == undefined){
            return (
                <div>
                    <h4>N/A</h4>
                </div>
            )
        } else {
            for (let i = 0; i < currentMeal.meal.length; i++) {
                mealArray.push(
                    <div key={i}>
                        <h4>{currentMeal.meal[i].description}</h4>
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
                mealPlanID: this.state.mealData._id
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
                            <h3>Name:</h3>
                            <br/>
                            <h3>Description: </h3>
                        </div>
                        <div className="col">
                            <h4>{this.state.mealData.name}</h4>
                            <br/>
                            <h4>{this.state.mealData.description}</h4>
                        </div>
                    </div>    
                    <br/>
                    <div className="breakfast maxwidth">
                        <h2>Breakfast</h2>
                        <this.renderCurrentMeal currentMeal={this.state.mealData.breakfast}/>
                        <hr/>
                    </div>
                    <div className="lunch maxwidth">
                        <h2>Lunch</h2>
                        <this.renderCurrentMeal currentMeal={this.state.mealData.lunch}/>
                        <hr/>
                    </div>
                    <div className="dinner maxwidth">
                        <h2>Dinner</h2>
                        <this.renderCurrentMeal currentMeal={this.state.mealData.dinner}/>
                        <hr/>
                    </div>
                    <div className="snacks maxwidth">
                        <h2>Snacks</h2>
                        <this.renderCurrentMeal currentMeal={this.state.mealData.snacks}/>
                        <hr/>
                    </div>
                    <button
                        id="border"
                        onClick={() =>this.updateCurrentMeal()}
                    >Select Meal Plan</button>
                    <br/>
                    <br/>
                    <br/>
                </div>
                <Navigation userData={this.state.userData}/>
            </div>
            </>
        );
    }
}

export default SelectedMeal;