import React, { Component } from 'react';

class MealHome extends Component {
    constructor(){
        super();
    }

    render() {
        return  (
            <>
            <div className="Content">
                <a href='/currentmeal'>Current Meal Plan</a>
                <a href='/selectmeal'>Select Meal Plan</a>
                <a href='/createmeal'>Create Meal Plan</a>
            </div>
            </>
        );
    }
}

export default MealHome;