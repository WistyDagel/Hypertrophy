import React, { Component } from 'react';
import Header from '../Header';
import Navigation from '../Navigation';

class AddFoodMP extends Component {
    constructor(){
        super();
    }

    //API EXAMPLE FOR FOOD DB SEARCH AND NUTRITION FACTS
    //https://api.nutritionix.com/v1_1/search/mcdonalds?results=0:20&fields=item_name,brand_name,item_id,nf_calories&appId=a26ca4ac&appKey=020c2cb566c8fabe83c4819e737fae18
    
    //https://api.nutritionix.com/v1_1/search/mcdonalds?results=0:20&fields=nf_calories,nf_protein,nf_total_carbohydrate,nf_total_fat,nf_sugars&appId=a26ca4ac&appKey=020c2cb566c8fabe83c4819e737fae18
    
    render() {
        return  (
            <>
            <div className="flexbox">
                <Header/>
                <div className="searchbox">
                    <div className="row">
                        <input></input>
                        <button>Search</button>
                    </div>    
                </div>
                <div className="results">
                    <h2>Results</h2>
                    <hr/>
                </div>
                <Navigation/>
            </div>
            </>
        );
    }
}

export default AddFoodMP;