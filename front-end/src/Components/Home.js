import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

import Navigation from './Navigation';
import NutritionalBank from './NutritionalBank';
import UserProfile from './UserProfile';

//Display user information based on the current user and their ID

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            userData: this.props.location.data,
            workoutPlan: '',
            mealPlan: '',
        }
    }

    async componentDidMount(){
        //Gets the most current iteration of the user
        await fetch(`http://localhost:3001/users/${this.state.userData._id}`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                userData: data[0]
            });
        });

        //Gets the most current iteration of the user's workoutPlan
        await fetch(`http://localhost:3001/workoutplan/${this.state.userData.workoutPlanID}`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                workoutPlan: data[0]
            });
        });

        //Gets the most current iteration of the user's mealPlan
        await fetch(`http://localhost:3001/mealplan/${this.state.userData.mealPlanID}`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                mealPlan: data[0]
            });
        });
    }

    render() {
        return  (
            <>
            <div className="flexbox">
                <Header/>
                <div className="content">
                    <NutritionalBank userData={this.state.userData}/>
                    <div className="mealPlan maxwidth">
                        <hr/>
                        <h1>Current Meal Plan</h1>
                        <h3 className='currentPlan'>{this.state.mealPlan.name}</h3>
                        <div className="row">
                            <div className="button">
                                <Link
                                    id="border"
                                    to={{
                                        pathname: '/currentmeal',
                                        data: this.state.userData,
                                        mealPlanData: this.state.mealPlan
                                    }}
                                >View</Link>
                                {/* <a id="border" href='/currentmeal'>View</a> */}
                            </div>
                            <div className="button">
                                <Link
                                    id="border"
                                    to={{
                                        pathname: '/selectmeal',
                                        data: this.state.userData
                                    }}
                                >Change Plan</Link>
                                {/* <a id="border" href='/selectmeal'>Change Plan</a> */}
                            </div>
                        </div>
                    </div>
                    <div className="workoutPlan maxwidth">
                        <hr/>
                        <h1>Current Workout Plan</h1>
                        <h3 className='currentPlan'>{this.state.workoutPlan.name}</h3>
                        <div className="row">
                            <div className="button">
                                <Link
                                    id="border"
                                    to={{
                                        pathname: '/currentworkout',
                                        data: this.state.userData,
                                        workoutData: this.state.workoutPlan
                                    }}
                                >View</Link>
                                {/* <a id="border" href='/currentworkout'>View</a> */}
                            </div>
                            <div className="button">
                                <Link
                                    id="border"
                                    to={{
                                        pathname: '/selectworkout',
                                        data: this.state.userData
                                    }}
                                >Change Plan</Link>
                                {/* <a id="border" href='/selectworkout'>Change Plan</a> */}
                            </div>
                        </div>
                    </div>
                </div>
                <Navigation userData={this.state.userData}/>
            </div>
            </>
        );
    }
}

export default Home;