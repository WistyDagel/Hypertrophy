import React, { Component } from 'react';

class WorkoutHome extends Component {
    constructor(){
        super();
    }

    render() {
        return  (
            <>
            <div className="Content">
                <a href='/currentworkout'>Current Workout Plan</a>
                <a href='/selectworkout'>Select Workout Plan</a>
                <a href='/createworkout'>Create Workout Plan</a>
            </div>
            </>
        );
    }
}

export default WorkoutHome;