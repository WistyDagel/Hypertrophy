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
                <hr className="headerHr"/>
                <div className="nutritionHeader">
                    <h1>Nutrional Bank</h1>
                </div>
                <h2 style={{fontSize: "16pt"}}>Calories Remaning</h2>
                <h4 className="nutritionText" id="calories">{this.state.userData.caloriesCopy}</h4>
                <h2 style={{fontSize: "16pt"}}>Macros Remaning</h2>
                <div className="row">
                    <div className="col">
                        <h4>Proteins</h4>
                        <h4 className="nutritionText" id="proteins">{this.state.userData.proteins}g</h4>
                    </div>
                    <div className="col">
                        <h4>Carbs</h4>
                        <h4 className="nutritionText" id="carbs">{this.state.userData.carbs}g</h4>
                    </div>
                    <div className="col">
                        <h4>Fats</h4>
                        <h4 className="nutritionText" id="fats">{this.state.userData.fats}g</h4>
                    </div>
                    <div className="col">
                        <h4>Sugars</h4>
                        <h4 className="nutritionText" id="sugars">{this.state.userData.sugars}g</h4>
                    </div>
                </div>
                <br/>
                <hr style={{marginBottom: 0}}/>
            </div>
            </>
        );
    }
}

export default NutritionalBank;