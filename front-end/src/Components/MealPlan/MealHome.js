import React, { Component } from 'react';
import Navigation from '../Navigation';

class MealHome extends Component {
    constructor(props){
        super(props);
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
                    <div className="button">
                        <a id="border-max" href='/currentmeal'>Current Meal Plan</a>
                    </div>
                    <br/>
                    <br/>
                    <div className="button">
                        <a id="border" href='/selectmeal'>Select Meal Plan</a>
                    </div>
                    <br/>
                    <br/>
                    <div className="button">
                        <a id="border" href='/createmeal'>Create Meal Plan</a>
                    </div>
                </div>
                <Navigation/>
            </div>
            </>
        );
    }
}

export default MealHome;