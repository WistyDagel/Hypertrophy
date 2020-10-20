import React, { Component } from 'react';
import Navigation from '../Navigation';

class CurrentWorkout extends Component {
    constructor(){
        super();
    }

    render() {
        return  (
            <>
            <div className="flexbox">
                <h2>Current Workout Plan</h2>
                <div className="content">

                </div>
                <Navigation/>
            </div>
            </>
        );
    }
}

export default CurrentWorkout;