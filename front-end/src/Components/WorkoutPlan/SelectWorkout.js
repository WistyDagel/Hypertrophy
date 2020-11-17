import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Navigation from '../Navigation';
import workoutplan1 from '../Photos/workoutplan1.jpg';


class SelectWorkout extends Component {
    constructor(props){
        super(props);
        this.state = {
            userData: '',
            plans: ''
        }

        this.renderWorkoutPlans = this.renderWorkoutPlans.bind(this);
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

        await fetch('http://localhost:3001/workoutplan')
        .then(res => res.json())
        .then(data => {
            this.setState({
                plans: data
            });
        });
    }

    renderWorkoutPlans = () => {
        var planArray = []
        for (let i = 0; i < this.state.plans.length; i++) {     
            planArray.push(
                <Link
                    key={i}
                    className="planLink"
                    to={{
                        pathname: '/selectedworkout',
                        workoutPlan: this.state.plans[i]
                    }}
                >
                    <div className="planBox">
                        <div className="imageBox">
                            <img className="planImage" src={workoutplan1}></img>
                        </div>
                        <hr/>
                        <h2>{this.state.plans[i].name}</h2>
                    </div>
                    <br/>
                </Link>
            )
        }
        return planArray;
    }

    render() {
        var planList = this.renderWorkoutPlans();
        return  (
            <>
            <div className="flexbox">
                <Header/>
                <div className="col">
                    <h2>Select a Workout Plan</h2> 
                    <hr/> 
                    <br/>
                </div>
                <div className="content">
                    {planList}
                </div>
                <br/>
                <br/>
                <Navigation/>
            </div>
            </>
        );
    }
}

export default SelectWorkout;