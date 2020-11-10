import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Navigation from '../Navigation';

class SelectWorkout extends Component {
    constructor(props){
        super(props);
        this.state = {
            userData: this.props.location.data,
            plans: ''
        }

        this.renderWorkoutPlans = this.renderWorkoutPlans.bind(this);
    }

    async componentDidMount(){
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
                        data: this.state.userData,
                        workoutData: this.state.plans[i]
                    }}
                >
                    <div className="planBox">
                        <div className="imageBox">
                            <h3>Image Placeholder</h3>
                        </div>
                        <hr/>
                        <h2>{this.state.plans[i].name}</h2>
                    </div>
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
                <Navigation userData={this.state.userData}/>
            </div>
            </>
        );
    }
}

export default SelectWorkout;