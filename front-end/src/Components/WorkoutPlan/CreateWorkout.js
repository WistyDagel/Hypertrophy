import React, { Component } from 'react';
import Navigation from '../Navigation';

class CreateWorkout extends Component {
    constructor(){
        super();
    }

    render() {
        return  (
            <>
            <div className="flexbox">
                <h2>Create Workout Plan</h2>
                <div className="content">

                </div>
                <Navigation/>
            </div>
            </>
        );
    }
}

export default CreateWorkout;