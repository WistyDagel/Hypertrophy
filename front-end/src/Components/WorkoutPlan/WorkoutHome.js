import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Navigation from '../Navigation';

class WorkoutHome extends Component {
    constructor(props){
        super(props);
        this.state = {
            userData: this.props.location.data,
        }
    }

    async componentDidMount(){
        await fetch(`http://localhost:3001/workoutplan/${this.state.userData.workoutPlanID}`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                workoutPlan: data[0]
            });
        });
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
                            data: this.state.userData,
                            workoutData: this.state.workoutPlan
                        }}
                    >
                    <div className="planHomeButton">
                        <h3>Current Workout Plan</h3>
                    </div>
                    </Link>
                    <Link
                        className="planHomeLink"
                        to={{
                            pathname: '/selectworkout',
                            data: this.state.userData
                        }}
                    >                    
                    <div className="planHomeButton">
                        <h3>Select Workout Plan</h3>
                    </div>
                    </Link>
                    <Link
                        className="planHomeLink"
                        to={{
                            pathname: '/createworkout',
                            data: this.state.userData
                        }}
                    >
                    <div className="planHomeButton">
                        <h3>Create Workout Plan</h3>
                    </div>
                    </Link>
                </div>
                <Navigation userData={this.state.userData}/>
            </div>
            </>
        );
    }
}

export default WorkoutHome;