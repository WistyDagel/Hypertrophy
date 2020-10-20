import React, { Component } from 'react';
import Navigation from './Navigation';

class AddExercise extends Component {
    constructor(){
        super();
    }

    render() {
        return  (
            <>
            <div className="flexbox">
                <h2>Add Exercise</h2>
                <div className="content">

                </div>
                <Navigation/>
            </div>
            </>
        );
    }
}

export default AddExercise;