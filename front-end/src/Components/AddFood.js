import React, { Component } from 'react';
import Header from './Header';
import Navigation from './Navigation';

class AddFood extends Component {
    constructor(props){
        super(props);
        this.state = {
            foodInput: '',
            foodResults: '',
            result: false,
            currentMeal: this.props.location.data,
            fitnessLog: JSON.parse(window.sessionStorage.getItem("fitnessLog"))
        }

        this.updateFoodInput = this.updateFoodInput.bind(this);
        this.searchFood = this.searchFood.bind(this);
        this.renderResults = this.renderResults.bind(this);
        this.appendFood = this.appendFood.bind(this);
    }

    //API EXAMPLE FOR FOOD DB SEARCH AND NUTRITION FACTS
    //https://api.nutritionix.com/v1_1/search/mcdonalds?results=0:20&fields=item_name,brand_name,item_id,nf_calories&appId=a26ca4ac&appKey=020c2cb566c8fabe83c4819e737fae18

    //https://api.nutritionix.com/v1_1/search/mashed+potatoes+gravy?results=0:20&fields=item_name,item_description,image,nf_calories,nf_protein,nf_total_carbohydrate,nf_total_fat,nf_sugars&appId=a26ca4ac&appKey=020c2cb566c8fabe83c4819e737fae18    
    
    async componentDidMount(){
        await console.log(JSON.parse(window.sessionStorage.getItem("fitnessLog")));
    }

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

    async appendFood(value) {
        console.log(value);

        var food = {
            description: value.item_name,
            calories: Math.trunc(value.nf_calories),
            protein: Math.trunc(value.nf_protein),
            carbs: Math.trunc(value.nf_total_carbohydrate),
            fats: Math.trunc(value.nf_total_fat),
            sugars: Math.trunc(value.nf_sugars)
        }

        switch (this.state.currentMeal) {
            case "breakfast":
                this.state.fitnessLog.breakfast.meal.push(food);
                break;
            case "lunch":
                this.state.fitnessLog.lunch.meal.push(food);
                break;
            case "dinner":
                this.state.fitnessLog.dinner.meal.push(food);
                break;        
            case "snacks":
                this.state.fitnessLog.snacks.meal.push(food);
                break;   
            default:
                break;
        }

        await window.sessionStorage.setItem("fitnessLog", JSON.stringify(this.state.fitnessLog));
    }

    renderResults = () => {
        if(this.state.result && this.state.foodResults.length != 0){
            var foodResultArray = [];
            for (let i = 0; i < this.state.foodResults.length; i++) {
                foodResultArray.push(
                    <div key={i}>
                        <hr style={{width: "80%"}}/>
                        <div className="row mealName">
                            <h3>{i}) {this.state.foodResults[i].fields.item_name}</h3>
                        </div>
                        <div style={{margin: "0px 15px 0px 20px", textAlign: "left", padding: "0px 12px"}} className="border-black">
                            <h3>Calories: {Math.trunc(this.state.foodResults[i].fields.nf_calories)}</h3>
                        </div>
                        <div className="row">
                            <div style={{padding: "0px 10px"}} className="col border-black">
                                <h4>Proteins</h4>
                                <h4>{Math.trunc(this.state.foodResults[i].fields.nf_protein)}</h4>
                            </div>
                            <div style={{padding: "0px 15px"}} className="col border-black">
                                <h4>Carbs</h4>
                                <h4>{Math.trunc(this.state.foodResults[i].fields.nf_total_carbohydrate)}</h4>
                            </div>
                            <div style={{padding: "0px 15px"}} className="col border-black">
                                <h4>Fats</h4>
                                <h4>{Math.trunc(this.state.foodResults[i].fields.nf_total_fat)}</h4>
                            </div>
                            <div style={{padding: "0px 4px"}} className="col border-black">
                                <h4>Sugars</h4>
                                <h4>{Math.trunc(this.state.foodResults[i].fields.nf_sugars)}</h4>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div onClick={() => this.appendFood(this.state.foodResults[i].fields)} className="button border-blue">
                                <a href='/fitnesslog'>Add Food</a>
                            </div>
                        </div>
                        <br/>
                    </div>
                )
            }
            return(
                <div className="results">
                    {foodResultArray}
                    <br/>
                    <div>
                        <a target="_blank" href="http://www.nutritionix.com/api">
                            <img src="https://d2eawub7utcl6.cloudfront.net/images/poweredby_nutritionix_api.png"></img>
                        </a>
                    </div>
                    <br/>
                </div>
            )
        } else if(!this.state.result) {
            return(
                <></>
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
                        <textarea name="paragraph_text" cols="36" rows="2" onChange={this.updateFoodInput}></textarea>
                        <button onClick={()=> this.searchFood()}>Search</button>
                    </div>    
                    <br/>
                </div>
                <this.renderResults/>
                <Navigation/>
            </div>
            </>
        );
    }
}

export default AddFood;