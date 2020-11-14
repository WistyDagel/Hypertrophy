import React, { Component } from 'react';

var wPlan = {
    name: '',
    description: '',
    day1: {
        "name": "",
        "exercises": [
        ]
    },
    day2: {
        "name": "",
        "exercises": [
        ]
    },
    day3: {
        "name": "",
        "exercises": [
        ]
    },
    day4: {
        "name": "",
        "exercises": [
        ]
    },
    day5: {
        "name": "",
        "exercises": [
        ]
    },
    day6: {
        "name": "",
        "exercises": [
        ]
    },
    day7: {
        "name": "",
        "exercises": [
        ]
    },
}

class WorkoutPlan extends Component{
    constructor(props){
        super(props);

        this.state = {
            name: '',
            description: '',
            day1: {
                "name": "",
                "exercises": [
                ]
            },
            day2: {
                "name": "",
                "exercises": [
                ]
            },
            day3: {
                "name": "",
                "exercises": [
                ]
            },
            day4: {
                "name": "",
                "exercises": [
                ]
            },
            day5: {
                "name": "",
                "exercises": [
                ]
            },
            day6: {
                "name": "",
                "exercises": [
                ]
            },
            day7: {
                "name": "",
                "exercises": [
                ]
            },
        }
    }

    getWorkoutPlan = () => {
        return this.state;
    }

    resetWorkoutPlan = () => {
        this.state = wPlan;
    }

    setWorkoutPlan = workoutPlan => {
        this.state = workoutPlan;
    }
}

const workoutPlan = new WorkoutPlan();

export default workoutPlan;