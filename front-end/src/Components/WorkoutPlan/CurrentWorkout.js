import React, { Component } from 'react';
import Navigation from '../Navigation';

class CurrentWorkout extends Component {
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
                    <br/>
                </div>
                <div className="col">
                    <h2>Current Workout Plan</h2>
                    <div className="row">
                        <div className="col">
                            <h3>Name:</h3>
                            <br/>
                            <h3>Description: </h3>
                        </div>
                        <div className="col">
                            <h4>Workout Plan Name</h4>
                            <br/>
                            <h4>Workout Plan Description</h4>
                        </div>
                    </div>    
                    <br/>
                    <div className="day1 maxwidth">
                        <h2>Day 1</h2>
                        <hr/>
                    </div>
                    <div className="day2 maxwidth">
                        <h2>Day 2</h2>
                        <hr/>
                    </div>
                    <div className="day3 maxwidth">
                        <h2>Day 3</h2>
                        <hr/>
                    </div>
                    <div className="day4 maxwidth">
                        <h2>Day 4</h2>
                        <hr/>
                    </div>
                    <div className="day5 maxwidth">
                        <h2>Day 5</h2>
                        <hr/>
                    </div>
                    <div className="day6 maxwidth">
                        <h2>Day 6</h2>
                        <hr/>
                    </div>
                    <div className="day7 maxwidth">
                        <h2>Day 7</h2>
                        <hr/>
                    </div>
                    <br/>
                </div>
                <Navigation userData={this.state.userData}/>
            </div>
            </>
        );
    }
}

export default CurrentWorkout;