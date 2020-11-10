import React, { Component } from 'react';
import Header from '../Header';
import Navigation from './Navigation';

class AddFoodMP extends Component {
    constructor(){
        super();
    }

    render() {
        return  (
            <>
            <div className="flexbox">
                <Header/>
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

export default AddFoodMP;