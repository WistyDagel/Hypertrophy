import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navigation from './Navigation';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            userData: this.props.location.data,
        }
    }

    render() {
        console.log(this.state.userData);
        return  (
            <>
            <div className="flexbox">
                <div className="header">
                    <h2>Hypertrophy</h2>
                    <hr/>
                </div>
                <div className="content">
                    <div className="nutritionBank maxwidth">
                        <h1>Nutrional Bank</h1>
                        <hr/>
                        <h2>Calories Remaning</h2>
                        <h4>{this.state.userData.calories}</h4>
                        <h2>Macros Remaning</h2>
                        <div className="row">
                            <div className="col">
                                <h3>Proteins</h3>
                                <h4 id="proteins">{this.state.userData.proteins}g</h4>
                            </div>
                            <div className="col">
                                <h3>Carbs</h3>
                                <h4 id="carbs">{this.state.userData.carbs}g</h4>
                            </div>
                            <div className="col">
                                <h3>Fats</h3>
                                <h4 id="fats">{this.state.userData.fats}g</h4>
                            </div>
                            <div className="col">
                                <h3>Sugars</h3>
                                <h4 id="sugars">{this.state.userData.sugars}g</h4>
                            </div>
                        </div>
                    </div>
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