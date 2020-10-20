import React, { Component } from 'react';
import Navigation from '../Navigation';

class SelectMeal extends Component {
    constructor(){
        super();
    }

    render() {
        return  (
            <>
            <div className="flexbox">
                <h2>Select Meal Plan</h2>
                <div className="content">

                </div>
                <Navigation/>
            </div>
            </>
        );
    }
}

export default SelectMeal;