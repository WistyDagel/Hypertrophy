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
                <h2>Current Meal Plan</h2>
                <div className="content">
                </div>
                <Navigation/>
            </div>
            </>
        );
    }
}

export default CurrentMeal;