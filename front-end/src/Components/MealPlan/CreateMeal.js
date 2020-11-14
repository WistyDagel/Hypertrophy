import React, { Component } from 'react';
import Header from '../Header';
import Navigation from '../Navigation';

class CreateMeal extends Component {
    constructor(props){
        super(props);
        this.state = {
            userData: this.props.location.data,
        }
    }

    //TODO
    //CREATE ACTUAL JSON BASED ON USER ENTRY

    // componentDidMount(){
    //     var breakfast = {
    //         "calories": 0,
    //         "proteins": 30,
    //         "carbs": 49,
    //         "fats": 21,
    //         "meal": [
    //             {
    //                 "description": "Three Eggs Sunny Side-Up",
    //                 "caloris": 0
    //             },
    //             {
    //                 "description": "Two Whole-wheat toasts",
    //                 "caloris": 0
    //             },
    //             {
    //                 "description": "1/2 cup baked beans",
    //                 "caloris": 0
    //             },
    //         ]
    //     }

    //     var lunch = {
    //         "calories": 0,
    //         "proteins": 62,
    //         "carbs": 49,
    //         "fats": 13,
    //         "meal": [
    //             {
    //                 "description": "1 Whole Chicken Breast",
    //                 "caloris": 0
    //             },
    //             {
    //                 "description": "1 cup brown rice",
    //                 "caloris": 0
    //             },
    //             {
    //                 "description": "1 1/2 mixed veggies",
    //                 "caloris": 0
    //             },
    //         ]
    //     }

    //     var dinner = {
    //         "calories": 0,
    //         "proteins": 62,
    //         "carbs": 49,
    //         "fats": 13,
    //         "meal": [
    //             {
    //                 "description": "1 Whole Chicken Breast",
    //                 "caloris": 0
    //             },
    //             {
    //                 "description": "1 cup brown rice",
    //                 "caloris": 0
    //             },
    //             {
    //                 "description": "1 1/2 mixed veggies",
    //                 "caloris": 0
    //             },
    //         ]
    //     }

    //     var snacks = {
    //         "calories": 0,
    //         "proteins": 42,
    //         "carbs": 10,
    //         "fats": 21,
    //         "meal": [
    //             {
    //                 "description": "1 Whole Chicken Breast",
    //                 "caloris": 0
    //             },
    //             {
    //                 "description": "1 cup green beans",
    //                 "caloris": 0
    //             },
    //         ]
    //     }

    //     fetch("http://localhost:3001/mealplan", {
    //         method: "POST",
    //         headers: {'Content-Type': "application/json"},
    //         body: JSON.stringify({
    //             name: 'Cutting Diet',
    //             description: "This is Chris Dazley's personal meal plan",
    //             breakfast: breakfast,
    //             lunch: lunch,
    //             dinner: dinner,
    //             snacks: snacks
    //         })
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         if(data){
    //             console.log(data);
    //         }
    //     });
    // }

    render() {
        return  (
            <>
            <div className="flexbox">
                <Header/>
                <div className="content">
                    <div className="entrybox">
                        <h2>Create your meal plan</h2>
                        <br/>
                        <div className="row">
                            <div className="col">
                                <h4>Name:</h4>
                                <br/>
                                <h4>Description: </h4>
                            </div>
                            <div className="col">
                                <input></input>
                                <br/>
                                <input></input>
                            </div>
                        </div>    
                    </div>
                    <div className="breakfast maxwidth">
                        <h2>Breakfast</h2>
                        <hr/>
                        <a href="/addfood">Add Food</a>
                    </div>
                    <div className="lunch maxwidth">
                        <h2>Lunch</h2>
                        <hr/>
                        <a href="/addfood">Add Food</a>
                    </div>
                    <div className="dinner maxwidth">
                        <h2>Dinner</h2>
                        <hr/>
                        <a href="/addfood">Add Food</a>
                    </div>
                    <div className="snacks maxwidth">
                        <h2>Snacks</h2>
                        <hr/>
                        <a href="/addfood">Add Food</a>
                    </div>
                    <br/>
                    <br/>
                </div>
                <Navigation userData={this.state.userData}/>
            </div>
            </>
        );
    }
}

export default CreateMeal;