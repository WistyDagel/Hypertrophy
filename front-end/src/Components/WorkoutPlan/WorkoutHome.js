import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Navigation from '../Navigation';

class WorkoutHome extends Component {
    constructor(props){
        super(props);
        this.state = {
            userData: '',
            workoutPlan: ''
        }
    }
    
    render() {
        return  (
            <>
            <div className="flexbox">
                <Header/>
                <div className="content">
                    <Link
                        className="planHomeLink"
                        to={{
                            pathname: '/currentworkout'
                        }}
                    >
                    <div className="planHomeButton">
                        <h3>Current Workout Plan</h3>
                    </div>
                    </Link>
                    <Link
                        className="planHomeLink"
                        to={{
                            pathname: '/selectworkout'
                        }}
                    >                    
                    <div className="planHomeButton">
                        <h3>Select Workout Plan</h3>
                    </div>
                    </Link>
                    <Link
                        className="planHomeLink"
                        to={{
                            pathname: '/createworkout'
                        }}
                    >
                    <div className="planHomeButton">
                        <h3>Create Workout Plan</h3>
                    </div>
                    </Link>
                </div>
                <Navigation/>
            </div>
            </>
        );
    }
}

export default WorkoutHome;