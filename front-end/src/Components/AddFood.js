import React, { Component } from 'react';
import Header from './Header';
import Navigation from './Navigation';

class AddFood extends Component {
    constructor(){
        super();
        this.state = {
            foodInput: '',
            foodResults: '',
            result: false
        }

        this.updateFoodInput = this.updateFoodInput.bind(this);
        this.searchFood = this.searchFood.bind(this);
        this.renderResults = this.renderResults.bind(this);


    }

    //API EXAMPLE FOR FOOD DB SEARCH AND NUTRITION FACTS
    //https://api.nutritionix.com/v1_1/search/mcdonalds?results=0:20&fields=item_name,brand_name,item_id,nf_calories&appId=a26ca4ac&appKey=020c2cb566c8fabe83c4819e737fae18

    //https://api.nutritionix.com/v1_1/search/mashed+potatoes+gravy?results=0:20&fields=item_name,item_description,image,nf_calories,nf_protein,nf_total_carbohydrate,nf_total_fat,nf_sugars&appId=a26ca4ac&appKey=020c2cb566c8fabe83c4819e737fae18    
    
    updateFoodInput = (evt) => {
        this.state.foodInput = evt.target.value;
    }

    searchFood = () => {
        if(this.state.foodInput != ''){
            var foodString = this.state.foodInput.trim().replace(new RegExp("\\s","g"),'+')
            fetch(`https://api.nutritionix.com/v1_1/search/${foodString}?results=0:10&fields=item_name,item_description,image,nf_calories,nf_protein,nf_total_carbohydrate,nf_total_fat,nf_sugars&appId=a26ca4ac&appKey=020c2cb566c8fabe83c4819e737fae18`)
            .then(res => res.json())
            .then(data => {
                if(data){
                    this.setState({
                        result: true,
                        foodResults: data.hits
                    });
                    console.log(this.state.foodResults);
                }
            })
        }

    }

    renderResults = () => {
        if(this.state.result){
            var foodResultArray = [];
            for (let i = 0; i < this.state.foodResults.length; i++) {
                foodResultArray.push(
                    <div key={i}>
                        <div className="workoutDescription">
                            <h3>{this.state.foodResults[i].fields.item_name}</h3>
                        </div>
                        <div className="planRow">
                            <h4>Calories: {this.state.foodResults[i].fields.nf_calories}</h4>
                            <h4>Proteins: {this.state.foodResults[i].fields.nf_protein}</h4>
                            <h4>Carbs: {this.state.foodResults[i].fields.nf_total_carbohydrate}</h4>
                            <h4>Fats: {this.state.foodResults[i].fields.nf_total_fat}</h4>
                            <h4>Sugars: {this.state.foodResults[i].fields.nf_sugars}</h4>
                        </div>

                    </div>
                )
            }
            return(
                <div className="results">
                    <hr/>
                    <h2 className="planTitle">Results</h2>
                    <br/>
                    {foodResultArray}
                </div>
            )
        } else {
            return(
                <div className="results">
                    <hr/>
                    <h2 className="planTitle">No Results Found</h2>
                </div>
            )
        }
        
    }

    render() {
        return  (
            <>
            <div className="flexbox">
                <Header/>
                <div className="searchbox">
                    <div className="row">
                        <input onChange={this.updateFoodInput}></input>
                        <button onClick={()=> this.searchFood()}>Search</button>
                    </div>    
                </div>
                <this.renderResults/>
                <Navigation/>
            </div>
            </>
        );
    }
}

export default AddFood;