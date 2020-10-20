import React, { Component } from 'react';
import Navigation from '../Navigation';

class CreateWorkout extends Component {
    constructor(){
        super();
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
                    <div className="entrybox">
                        <h2>Create your workout plan</h2>
                        <br/>
                        <div className="row">
                            <div className="col">
                                <h4>Name:</h4>
                                <br/>
                                <h4>Description: </h4>
                            </div>
                            <div className="col">
                                <input></input>
                                <br/>
                                <input></input>
                            </div>
                        </div>    
                    </div>
                    <br/>
                    <div className="day1 maxwidth">
                        <h2>Day 1</h2>
                        <hr/>
                        <a href="/addexercise">Add Exercise</a>
                    </div>
                    <div className="day2 maxwidth">
                        <h2>Day 2</h2>
                        <hr/>
                        <a href="/addexercise">Add Exercise</a>
                    </div>
                    <div className="day3 maxwidth">
                        <h2>Day 3</h2>
                        <hr/>
                        <a href="/addexercise">Add Exercise</a>
                    </div>
                    <div className="day4 maxwidth">
                        <h2>Day 4</h2>
                        <hr/>
                        <a href="/addexercise">Add Exercise</a>
                    </div>
                    <div className="day5 maxwidth">
                        <h2>Day 5</h2>
                        <hr/>
                        <a href="/addexercise">Add Exercise</a>
                    </div>
                    <div className="day6 maxwidth">
                        <h2>Day 6</h2>
                        <hr/>
                        <a href="/addexercise">Add Exercise</a>
                    </div>
                    <div className="day7 maxwidth">
                        <h2>Day 7</h2>
                        <hr/>
                        <a href="/addexercise">Add Exercise</a>
                    </div>
                    <br/>
                </div>
                <Navigation/>
            </div>
            </>
        );
    }
}

export default CreateWorkout;