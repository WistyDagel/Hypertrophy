import React, { Component } from 'react';
import Navigation from '../Navigation';

class SelectWorkout extends Component {
    constructor(){
        super();
    }

    render() {
        return  (
            <>
            <div className="flexbox">
                <h2>Select Workout Plan</h2>
                <div className="content">

                </div>
                <Navigation/>
            </div>
            </>
        );
    }
}

export default SelectWorkout;