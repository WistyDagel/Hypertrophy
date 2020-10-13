import React, { Component } from 'react';

class FitnessLog extends Component {
    constructor(){
        super();
    }

    render() {
        return  (
            <>
            <h2>Fitness Log</h2>
            <a href="/addfood">Add Food</a>
            <a href="/addexercise">Add Exercise</a>
            </>
        );
    }
}

export default FitnessLog;