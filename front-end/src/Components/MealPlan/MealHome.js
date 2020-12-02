import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Navigation from '../Navigation';
import currentmeal from '../Photos/currentmeal.jpg';
import selectmeal from '../Photos/selectmeal.jpg';
import createmeal from '../Photos/createmeal.jpg';

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
                    <div className="selectionBox">
                        <div className="imageBox">
                            <img className="planImage" src={currentmeal} alt=""></img>
                        </div>
                        <h3>Current <br/> Meal Plan</h3>
                    </div>
                    {/* <div className="planHomeButton">
                        <img src={createmeal} ></img>
                    </div> */}
                    </Link>
                    <Link
                        className="planHomeLink"
                        to={{
                            pathname: '/selectmeal'
                        }}
                    >
                    <div className="selectionBox">
                        <div className="imageBox">
                            <img className="planImage" src={selectmeal} alt=""></img>
                        </div>
                        <h3>Select A <br/> Meal Plan</h3>
                    </div>
                    </Link>
                    <Link
                        className="planHomeLink"
                        to={{
                            pathname: '/createmeal'
                        }}
                    >
                    <div className="selectionBox">
                        <div className="imageBox">
                            <img className="planImage" src={createmeal} alt=""></img>
                        </div>
                        <h3>Create A <br/> Meal Plan</h3>
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