import React, { Component } from 'react';
class NutritionalBank extends Component {
    constructor(props){
        super(props);
        this.state = {
            userData: this.props.userData,
        }
    }

    render() {
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