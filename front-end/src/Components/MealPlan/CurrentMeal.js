import React, { Component } from 'react';
import Navigation from '../Navigation';

class CurrentMeal extends Component {
    constructor(){
        super();
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
                            <h4>Meal Plan Name</h4>
                            <br/>
                            <h4>Meal Plan Description</h4>
                        </div>
                    </div>    
                    <br/>
                    <div className="breakfast maxwidth">
                        <h2>Breakfast</h2>
                        <hr/>
                    </div>
                    <div className="lunch maxwidth">
                        <h2>Lunch</h2>
                        <hr/>
                    </div>
                    <div className="dinner maxwidth">
                        <h2>Dinner</h2>
                        <hr/>
                    </div>
                    <div className="snacks maxwidth">
                        <h2>Snacks</h2>
                        <hr/>
                    </div>
                </div>
                <Navigation/>
            </div>
            </>
        );
    }
}

export default CurrentMeal;