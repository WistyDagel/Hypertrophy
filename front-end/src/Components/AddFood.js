import React, { Component } from 'react';
import Navigation from './Navigation';

class AddFood extends Component {
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
                <div className="searchbox">
                    <div className="row">
                        <input></input>
                        <button>Search</button>
                    </div>    
                </div>
                <div className="results">
                    <h2>Results</h2>
                    <hr/>
                </div>
                <Navigation/>
            </div>
            </>
        );
    }
}

export default AddFood;