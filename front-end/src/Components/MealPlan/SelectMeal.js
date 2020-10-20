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
                <div className="header">
                    <h2>Hypertrophy</h2>
                    <hr/>
                    <br/>
                </div>
                <div className="col">
                    <h2>Select a Meal Plan</h2>  
                    <br/>
                </div>
                <Navigation/>
            </div>
            </>
        );
    }
}

export default SelectMeal;