import React, { Component } from 'react';

//TODO
//Calculate the nutritional bank data before the front end displays
//Currently displays front end before data has been calculated

class NutritionalBank extends Component {
    constructor(props){
        super(props);
        this.state = {
            userData: ''
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
            <div className="nutritionBank maxwidth">
                <h1>Nutrional Bank</h1>
                <hr/>
                <h2>Calories Remaning</h2>
                <h4>{this.state.userData.caloriesCopy}</h4>
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
                <hr/>
            </div>
            </>
        );
    }
}

export default NutritionalBank;