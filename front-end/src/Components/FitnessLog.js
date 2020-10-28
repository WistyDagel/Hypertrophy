import React, { Component } from 'react';
import Navigation from './Navigation';

class FitnessLog extends Component {
    constructor(props){
        super(props);
        this.state = {
            userData: this.props.location.data,
        }
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
                    <br/>
                    <div className="breakfast maxwidth">
                        <h2>Breakfast</h2>
                        <hr/>
                        <a href="/addfood">Add Food</a>
                    </div>
                    <div className="lunch maxwidth">
                        <h2>Lunch</h2>
                        <hr/>
                        <a href="/addfood">Add Food</a>
                    </div>
                    <div className="dinner maxwidth">
                        <h2>Dinner</h2>
                        <hr/>
                        <a href="/addfood">Add Food</a>
                    </div>
                    <div className="snacks maxwidth">
                        <h2>Snacks</h2>
                        <hr/>
                        <a href="/addfood">Add Food</a>
                    </div>
                    <div className="exercises maxwidth">
                        <h2>Exercises</h2>
                        <hr/>
                        <a href="/addexercise">Add Exercise</a>
                    </div>
                </div>
                <Navigation userData={this.state.userData}/>
            </div>
            </>
        );
    }
}

export default FitnessLog;