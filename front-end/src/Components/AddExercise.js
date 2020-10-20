import React, { Component } from 'react';
import Navigation from './Navigation';

class AddExercise extends Component {
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
                    <br/>
                </div>
                <div className="col">
                    <div className="row">
                        <div className="col">
                            <h4>Description:</h4>
                            <br/>
                            <h4>Duration: </h4>
                        </div>
                        <div className="col">
                            <input></input>
                            <br/>
                            <input></input>
                        </div>
                    </div>    
                    <br/>
                    <br/>
                    <br/>
                    <div className="button">
                        <a id="border" href='/fitnesslog'>Add Exercise</a>
                    </div>
                </div>
                <Navigation/>
            </div>
            </>
        );
    }
}

export default AddExercise;