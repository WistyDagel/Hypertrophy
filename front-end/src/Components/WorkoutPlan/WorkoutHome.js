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
                    <div className="button">
                        <Link
                            id="border"
                            to={{
                                pathname: '/currentworkout',
                                data: this.state.userData,
                                workoutData: this.state.workoutPlan
                            }}
                        >Current Workout Plan</Link>
                        {/* <a id="border" href='/currentworkout'>Current Workout Plan</a> */}
                    </div>
                    <br/>
                    <br/>
                    <div className="button">
                        <Link
                            id="border"
                            to={{
                                pathname: '/selectworkout',
                                data: this.state.userData
                            }}
                        >Select Workout Plan</Link>
                        {/* <a id="border" href='/selectworkout'>Select Workout Plan</a> */}
                    </div>
                    <br/>
                    <br/>
                    <div className="button">
                        <Link
                            id="border"
                            to={{
                                pathname: '/createworkout',
                                data: this.state.userData
                            }}
                        >Create Workout Plan</Link>
                        {/* <a id="border" href='/createworkout'>Create Workout Plan</a> */}
                    </div>
                </div>
                <Navigation userData={this.state.userData}/>
            </div>
            </>
        );
    }
}

export default WorkoutHome;