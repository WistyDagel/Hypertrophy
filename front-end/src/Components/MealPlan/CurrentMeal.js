import React, { Component } from 'react';
import Navigation from '../Navigation';

class CurrentMeal extends Component {
    constructor(props){
        super(props);
        this.state = {
            userData: this.props.location.data,
            mealData: this.props.location.mealPlanData,
            mealPlan: ''
        }

        this.renderMealPlan = this.renderMealPlan.bind(this);
    }

    async componentDidMount(){
        await fetch(`http://localhost:3001/mealplan/${this.state.userData.mealPlanID}`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                mealPlan: data[0]
            });
        });

        console.log(this.state.mealPlan);
    }

    renderMealPlan = mealPlan => {

    }

    render() {
        return  (
            <>
            <div className="flexbox">
                <div className="header">
                    <h2>Hypertrophy</h2>
                    <hr/>
                    <br/>
                </div>
                <div className="col">
                    <h2>Current Meal Plan</h2>
                    <div className="row">
                        <div className="col">
                            <h3>Name:</h3>
                            <br/>
                            <h3>Description: </h3>
                        </div>
                        <div className="col">
                            <h4>{this.state.mealPlan.name}</h4>
                            <br/>
                            <h4>{this.state.mealPlan.description}</h4>
                        </div>
                    </div>    
                    <br/>
                    <div className="breakfast maxwidth">
                        <h2>Breakfast</h2>
                        <h4>{this.state.mealData.breakfast.meal[0].description}</h4>
                        <h4>{this.state.mealData.breakfast.meal[1].description}</h4>
                        <h4>{this.state.mealData.breakfast.meal[2].description}</h4>
                        <hr/>
                    </div>
                    <div className="lunch maxwidth">
                        <h2>Lunch</h2>
                        <h4>{this.state.mealData.lunch.meal[0].description}</h4>
                        <h4>{this.state.mealData.lunch.meal[1].description}</h4>
                        <h4>{this.state.mealData.lunch.meal[2].description}</h4>
                        <hr/>
                    </div>
                    <div className="dinner maxwidth">
                        <h2>Dinner</h2>
                        <h4>{this.state.mealData.dinner.meal[0].description}</h4>
                        <h4>{this.state.mealData.dinner.meal[1].description}</h4>
                        <h4>{this.state.mealData.dinner.meal[2].description}</h4>
                        <hr/>
                    </div>
                    <div className="snacks maxwidth">
                        <h2>Snacks</h2>
                        <h4>{this.state.mealData.snacks.meal[0].description}</h4>
                        <h4>{this.state.mealData.snacks.meal[1].description}</h4>
                        <hr/>
                    </div>
                </div>
                <Navigation userData={this.state.userData}/>
            </div>
            <br/>
            <br/>
            <br/>
            </>
        );
    }
}

export default CurrentMeal;