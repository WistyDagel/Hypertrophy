import React, { Component } from 'react';
import Header from '../Header';
import Navigation from '../Navigation';

class CurrentMeal extends Component {
    constructor(props){
        super(props);
        this.state = {
            userData: '',
            mealPlan: ''
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
                mealPlan: data[0]
            });
            console.log(data);
        });
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
                        <h2>Breakfast</h2>
                        <this.renderCurrentMeal currentMeal={this.state.mealPlan.breakfast}/>
                        <hr/>
                    </div>
                    <div className="lunch maxwidth">
                        <h2>Lunch</h2>
                        <this.renderCurrentMeal currentMeal={this.state.mealPlan.lunch}/>
                        <hr/>
                    </div>
                    <div className="dinner maxwidth">
                        <h2>Dinner</h2>
                        <this.renderCurrentMeal currentMeal={this.state.mealPlan.dinner}/>
                        <hr/>
                    </div>
                    <div className="snacks maxwidth">
                        <h2>Snacks</h2>
                        <this.renderCurrentMeal currentMeal={this.state.mealPlan.snacks}/>
                        <hr/>
                    </div>
                </div>
                <Navigation/>
            </div>
            <br/>
            <br/>
            <br/>
            </>
        );
    }
}

export default CurrentMeal;