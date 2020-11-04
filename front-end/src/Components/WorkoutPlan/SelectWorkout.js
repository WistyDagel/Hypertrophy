import React, { Component } from 'react';
import Navigation from '../Navigation';

class SelectWorkout extends Component {
    constructor(props){
        super(props);
        this.state = {
            userData: this.props.location.data,
            plans: ''
        }
    }

    async componentDidMount(){
        await fetch('http://localhost:3001/workoutplan')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.setState({
                plans: data
            });
        });
    }

    render() {
        return  (
            <>
            <div className="flexbox">
                <div className="header">
                    <h2>Hypertrophy</h2>
                    <hr/>
                    <br/>
                </div>
                <div className="col">
                    <h2>Select a Workout Plan</h2>  
                    <br/>
                </div>
                <Navigation userData={this.state.userData}/>
            </div>
            </>
        );
    }
}

export default SelectWorkout;