import React, { Component } from 'react';

import Navigation from './Navigation';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render() {
        return  (
            <>
            <div className="flexbox">
                <div className="header">
                    <h2>Hypertrophy</h2>
                    <hr/>
                </div>
                <div className="content">
                    <div className="nutritionBank">
                        <h1>Nutrional Bank</h1>
                        <hr/>
                        <h3>Calories Remaning</h3>
                        <h3>Macros Remaning</h3>
                        <div className="row">
                            <h3>Proteins</h3>
                            <h3>Carbs</h3>
                            <h3>Fats</h3>
                            <h3>Sugars</h3>
                        </div>
                    </div>
                    <div className="mealPlan">
                        <hr/>
                        <h1>Current Meal Plan</h1>
                        <h3>Meal Plan Name</h3>
                        <div className="row">
                            <div className="button">
                                <a id="border" href='/currentmeal'>View</a>
                            </div>
                            <div className="button">
                                <a id="border" href='/selectmeal'>Change Plan</a>
                            </div>
                        </div>
                    </div>
                    <div className="workoutPlan">
                        <hr/>
                        <h1>Current workout Plan</h1>
                        <h3>Workout Plan Name</h3>
                        <div className="row">
                            <div className="button">
                                <a id="border" href='/currentworkout'>View</a>
                            </div>
                            <div className="button">
                                <a id="border" href='/selectworkout'>Change Plan</a>
                            </div>
                        </div>
                    </div>
                </div>
                <Navigation/>
            </div>
            </>
        );
    }
}

export default Home;