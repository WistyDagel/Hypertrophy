import React, { Component } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import NutritionalBank from './NutritionalBank';

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
                <Header/>
                <div className="content">
                    <NutritionalBank userData={this.state.userData}/>
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