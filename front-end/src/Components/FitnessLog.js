import React, { Component } from 'react';
import Navigation from './Navigation';

class FitnessLog extends Component {
    constructor(props){
        super(props);
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
                    <a href="/addfood">Add Food</a>
                    <a href="/addexercise">Add Exercise</a>
                </div>
                <Navigation/>
            </div>
            </>
        );
    }
}

export default FitnessLog;