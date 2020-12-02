import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Navigation from '../Navigation';
import currentworkout from '../Photos/currentworkout.jpg';
import selectworkout from '../Photos/selectworkout.jpg';
import createworkout from '../Photos/createworkout.jpg';

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
                            pathname: '/currentworkout',
                        }}
                    >
                    <div className="selectionBox">
                        <div className="imageBox">
                            <img className="planImage" src={currentworkout} alt=""></img>
                        </div>
                        <h3>Current Workout Plan</h3>
                    </div>
                    </Link>
                    <Link
                        className="planHomeLink"
                        to={{
                            pathname: '/selectworkout',
                        }}
                    >
                    <div className="selectionBox">
                        <div className="imageBox">
                            <img className="planImage" src={selectworkout} alt=""></img>
                        </div>
                        <h3>Select A Workout Plan</h3>
                    </div>
                    </Link>
                    <Link
                        className="planHomeLink"
                        to={{
                            pathname: '/createworkout',
                        }}
                    >
                    <div className="selectionBox">
                        <div className="imageBox">
                            <img className="planImage" src={createworkout} alt=""></img>
                        </div>
                        <h3>Create A Workout Plan</h3>
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