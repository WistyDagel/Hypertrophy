import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navigation from './Navigation';
import NutritionalBank from './NutritionalBank';
import UserProfile from './UserProfile';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            userData: UserProfile.getUser()
        }
    }

    componentDidMount(){
        this.setState({
            userData: UserProfile.getUser()
        })

        console.log(this.state.userData);
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
                    <NutritionalBank userData={this.state.userData}/>
                    <div className="mealPlan maxwidth">
                        <hr/>
                        <h1>Current Meal Plan</h1>
                        <h3>Meal Plan Name</h3>
                        <div className="row">
                            <div className="button">
                                <Link
                                    id="border"
                                    to={{
                                        pathname: '/currentmeal',
                                        data: this.state.userData
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
                        <h3>Workout Plan Name</h3>
                        <div className="row">
                            <div className="button">
                                <Link
                                    id="border"
                                    to={{
                                        pathname: '/currentworkout',
                                        data: this.state.userData
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