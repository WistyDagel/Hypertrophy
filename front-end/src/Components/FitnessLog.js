import React, { Component } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import NutritionalBank from './NutritionalBank';

class FitnessLog extends Component {
    constructor(props){
        super(props);
        this.state = {
            userData: '',
        }
    }

    async componentDidMount(){
        //Gets the most current iteration of the user
        await fetch(`http://localhost:3001/users/${window.sessionStorage.getItem("userId")}`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                userData: data[0]
            })
        });
    }

    render() {
        return  (
            <>
            <div className="flexbox">
                <Header/>
                <div className="content">
                    <NutritionalBank/>
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
                <Navigation/>
            </div>
            </>
        );
    }
}

export default FitnessLog;