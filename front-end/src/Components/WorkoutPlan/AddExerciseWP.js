import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Navigation from '../Navigation';
import workoutPlan from './WorkoutPlan';

class AddExerciseWP extends Component {
    constructor(props){
        super(props);

        this.state = {
            workoutData: this.props.location.data,
            currentDay: this.props.location.currentDay,

        }

        console.log(this.state.currentDay);
    }

    render() {
        return  (
            <>
            <div className="flexbox">
                <Header/>
                
                <Navigation/>
            </div>
            </>
        );
    }
}

export default AddExerciseWP;