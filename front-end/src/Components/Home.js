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
            userData: '',
            workoutPlan: '',
            mealPlan: '',
        }
    }

    async componentDidMount() {
        //Gets the most current iteration of the user
        await fetch(`http://localhost:3001/users/${window.sessionStorage.getItem("userId")}`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                userData: data[0]
            })
        });

        console.log(this.state.userData);

        //Gets the most current iteration of the user's workoutPlan
        await fetch(`http://localhost:3001/workoutplan/${this.state.userData.workoutPlanID}`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                workoutPlan: data[0]
            });
        });

        window.sessionStorage.setItem("workoutPlan", JSON.stringify(this.state.workoutPlan));

        //Gets the most current iteration of the user's mealPlan
        await fetch(`http://localhost:3001/mealplan/${this.state.userData.mealPlanID}`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                mealPlan: data[0]
            });
        });

        window.sessionStorage.setItem("mealPlan", JSON.stringify(this.state.mealPlan));
    }

    // componentDidMount(){
    //     fetch(`http://localhost:3001/users/${window.sessionStorage.getItem("userId")}`)
    //     .then(res => res.json())
    //     .then(data => {
    //         this.setState({
    //             userData: data[0]
    //         })
    //     });
    // }

    render() {
        return  (
            <>
            <div className="flexbox">
                <Header/>
                <div className="content">
                    <NutritionalBank/>
                    <div className="mealPlan maxwidth">
                        <div className="homeHeader">
                            <h1>Current Meal Plan</h1>
                        </div>
                        <div className="currentPlanContent">
                            <h2 className='currentPlan'>{this.state.mealPlan.name}</h2>
                            <div className="row">
                                <div className="button border-black">
                                    <Link
                                        to={{
                                            pathname: '/currentmeal'
                                        }}
                                    >View</Link>
                                    {/* <a id="border" href='/currentmeal'>View</a> */}
                                </div>
                                <div className="button border-black">
                                    <Link
                                        to={{
                                            pathname: '/selectmeal'
                                        }}
                                    >Change Plan</Link>
                                    {/* <a id="border" href='/selectmeal'>Change Plan</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="workoutPlan maxwidth">
                        <div className="homeHeader">
                            <h1>Current Workout Plan</h1>
                        </div>  
                        <div className="currentPlanContent">
                            <h2 className='currentPlan'>{this.state.workoutPlan.name}</h2>
                            <div className="row">
                                <div className="button border-black">
                                    <Link
                                        to={{
                                            pathname: '/currentworkout'
                                        }}
                                    >View</Link>
                                    {/* <a id="border" href='/currentworkout'>View</a> */}
                                </div>
                                <div className="button border-black">
                                    <Link
                                        to={{
                                            pathname: '/selectworkout'
                                        }}
                                    >Change Plan</Link>
                                    {/* <a id="border" href='/selectworkout'>Change Plan</a> */}
                                </div>
                            </div>
                        </div>                      
                    </div>
                </div>
                <Navigation/>
            </div>
            </>
        );
    }
}

export default Home;