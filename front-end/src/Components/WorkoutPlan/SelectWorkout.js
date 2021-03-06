import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Navigation from '../Navigation';
import selectworkout from '../Photos/selectworkout.jpg';
import workoutplan1 from '../Photos/workoutplan1.jpg';
import workoutplan2 from '../Photos/workoutplan2.jpg';
import workoutplan3 from '../Photos/workoutplan3.jpg';
import workoutplan4 from '../Photos/workoutplan4.jpg';
import workoutplan5 from '../Photos/workoutplan5.jpg';
import workoutplan6 from '../Photos/workoutplan6.jpg';

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
        var imageArray = [workoutplan1, workoutplan2, workoutplan3, workoutplan4, workoutplan5, workoutplan6];
        var planArray = []
        for (let i = 0; i < this.state.plans.length; i++) {  
            var imageMod = i % 6;        
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
                            <img className="planImage" src={imageArray[imageMod]}></img>
                        </div>
                        <hr style={{backgroundColor: "#333", margin: 0}}/>
                        <h2 style={{backgroundColor: "#fff", padding: "10px 0px", margin: 0}}>{this.state.plans[i].name}</h2>
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
                <br/>
                <Navigation/>
            </div>
            </>
        );
    }
}

export default SelectWorkout;