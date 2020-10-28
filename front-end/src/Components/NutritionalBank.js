import React, { Component } from 'react';
class NutritionalBank extends Component {
    constructor(props){
        super(props);
        this.state = {
            userData: this.props.userData,
            heightCm: calculateCM(this.props.userData.accountObj.heightFt, this.props.userData.accountObj.heightIn),
            weight: this.props.userData.accountObj.weight,
            age: this.props.userData.accountObj.age,
            calories: '',
            proteins: '',
            carbs: '',
            fats: '',
            sugars: ''
        }

        this.calculateCalories = this.calculateCalories.bind(this);
        this.calculateMacros = this.calculateMacros.bind(this);
        this.calculateCM = this.calculateCM.bind(this);
    }

    calculateCM = (feet, inches) => {
        var heightCenti = feet * 30.48;
        heightCenti = heightCenti + (inches* 2.54);
        this.setState({
            heightCm: heightCenti
        }); 
    }

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
    calculateCalories = () => {
        //Convert to CM
        if(this.state.userData.accountObj.male){
            this.setState({
                calories: ((10*this.state.weight) + (6.25*this.state.heightCm) - (5*this.state.age) + 5)
            })
        } else {

        }
    }   

    calculateMacros = () => {

    }

    render() {
        this.calculateCalories();
        return  (
            <>
            <div className="nutritionBank maxwidth">
                <h1>Nutrional Bank</h1>
                <hr/>
                <h2>Calories Remaning</h2>
                <h4>{this.state.userData.calories}</h4>
                <h2>Macros Remaning</h2>
                <div className="row">
                    <div className="col">
                        <h3>Proteins</h3>
                        <h4 id="proteins">{this.state.userData.proteins}g</h4>
                    </div>
                    <div className="col">
                        <h3>Carbs</h3>
                        <h4 id="carbs">{this.state.userData.carbs}g</h4>
                    </div>
                    <div className="col">
                        <h3>Fats</h3>
                        <h4 id="fats">{this.state.userData.fats}g</h4>
                    </div>
                    <div className="col">
                        <h3>Sugars</h3>
                        <h4 id="sugars">{this.state.userData.sugars}g</h4>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default NutritionalBank;