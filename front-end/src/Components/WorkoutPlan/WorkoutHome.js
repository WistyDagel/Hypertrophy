import React, { Component } from 'react';
import Navigation from '../Navigation';

class WorkoutHome extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return  (
            <>
            <div className="flexbox">
                <div className="header">
                    <h2>Hypertrophy</h2>
                    <hr/>
                </div>
                <div className="content">
                    <div className="button">
                        <a id="border" href='/currentworkout'>Current Workout Plan</a>
                    </div>
                    <br/>
                    <br/>
                    <div className="button">
                        <a id="border" href='/selectworkout'>Select Workout Plan</a>
                    </div>
                    <br/>
                    <br/>
                    <div className="button">
                        <a id="border" href='/createworkout'>Create Workout Plan</a>
                    </div>
                </div>
                <Navigation/>
            </div>
            </>
        );
    }
}

export default WorkoutHome;