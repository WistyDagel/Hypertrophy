import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Navigation from '../Navigation';

class MealHome extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return  (
            <>
            <div className="flexbox">
                <Header/>
                <div className="content">
                    <Link
                        className="planHomeLink"
                        to={{
                            pathname: '/currentmeal',
                        }}
                    >
                    <div className="planHomeButton">
                        <h3>Current Meal Plan</h3>
                    </div>
                    </Link>
                    <Link
                        className="planHomeLink"
                        to={{
                            pathname: '/selectmeal'
                        }}
                    >
                    <div className="planHomeButton">
                        <h3>Select Meal Plan</h3>
                    </div>
                    </Link>
                    <Link
                        className="planHomeLink"
                        to={{
                            pathname: '/createmeal'
                        }}
                    >
                    <div className="planHomeButton">
                        <h3>Create Meal Plan</h3>
                    </div>
                   </Link>
                </div>
                <Navigation/>
            </div>
            </>
        );
    }
}

export default MealHome;