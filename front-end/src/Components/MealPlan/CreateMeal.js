import React, { Component } from 'react';
import Navigation from '../Navigation';

class CreateMeal extends Component {
    constructor(){
        super();
    }

    render() {
        return  (
            <>
            <div className="flexbox">
                <h2>Create Meal Plan</h2>
                <div className="content">

                </div>
                <Navigation/>
            </div>
            </>
        );
    }
}

export default CreateMeal;