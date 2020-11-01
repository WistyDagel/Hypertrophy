import React, { Component } from 'react';

class CalculateStats extends Component{
    constructor(props){
        super(props);
        
        // this.state = {
        //     userData: this.props.userData,
        //     feet: this.props.userData.heightFt,
        //     inches: this.props.userData.heightIn,
        //     weight: this.props.userData.weight,
        //     age: this.props.userData.age,
        //     calories: '',
        //     proteins: '',
        //     carbs: '',
        //     fats: '',
        //     sugars: ''
        // }

        // this.calculateCalories = this.calculateCalories.bind(this);
        // this.calculateMacros = this.calculateMacros.bind(this);
    }
    // componentDidMount(){
    //     this.calculateCalories();
    // }

    //Calculate calories - Mifflin-St Jeor Equation
    //MEN 
    //BMR = 10W + 6.25H - 5A + 5
    //WOMEN
    //BMR = 10W + 6.25H - 5A - 161

    //Calculate calories - Revised Harris-Benedict Equation
    //MEN
    //BMR = 13.397W + 4.799H - 5.677A + 88.362
    //WOMEN
    //BMR = 9.247W + 3.098H - 4.330A + 447.593

    //Pass parameters into the function and call it from the Signup 3 page
    calculateCalories = (userData) => {
        //Convert to CM
        var heightCm = userData.accountObj.heightFt * 30.48;
        heightCm = heightCm + (userData.accountObj.heightIn * 2.54);

        var calories = 0;

        if(userData.accountObj.male){
            calories = ((10 * userData.accountObj.weight) + (6.25 * heightCm) - (5 * userData.accountObj.age) + 5);
        } else {
            calories = ((10 * userData.accountObj.weight) + (6.25 * heightCm) - (5 * userData.accountObj.age) - 161);
        }
        return calories;
    }   

    calculateMacros = (userData) => {

    }
}

const calcStats = new CalculateStats();

export default calcStats;