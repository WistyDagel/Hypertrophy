import React, { Component } from 'react';
import Header from '../Header';
import Navigation from './Navigation';

class AddExerciseWP extends Component {
    constructor(){
        super();
    }

    render() {
        return  (
            <>
            <div className="flexbox">
                <Header/>
                <div className="col">
                    <div className="row">
                        <div className="col">
                            <h4>Description:</h4>
                            <br/>
                            <h4>Duration: </h4>
                            <br/>
                            <h4>Sets: </h4>
                            <br/>
                            <h4>Reps: </h4>
                        </div>
                        <div className="col">
                            <input></input>
                            <br/>
                            <input></input>
                            <br/>
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

export default AddExerciseWP;