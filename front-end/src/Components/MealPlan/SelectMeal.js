import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Navigation from '../Navigation';
import mealplan1 from '../Photos/mealplan1.jpg';
import mealplan2 from '../Photos/mealplan2.jpg';
import mealplan3 from '../Photos/mealplan3.jpg';
import mealplan4 from '../Photos/mealplan4.jpg';
import mealplan5 from '../Photos/mealplan5.jpg';
import mealplan6 from '../Photos/mealplan6.jpg';

class SelectMeal extends Component {
    constructor(props){
        super(props);
        this.state = {
            userData: '',
            plans: ''
        }

        this.renderMealPlans = this.renderMealPlans.bind(this);
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

        await fetch('http://localhost:3001/mealplan')
        .then(res => res.json())
        .then(data => {
            this.setState({
                plans: data
            });
        });
    }

    renderMealPlans = () => {
        var imageArray = [mealplan1, mealplan2, mealplan3, mealplan4, mealplan5, mealplan6];
        var planArray = []
        for (let i = 0; i < this.state.plans.length; i++) {
            var imageMod = i % 6;     
            planArray.push(
                <Link
                    key={i}
                    className="planLink"
                    to={{
                        pathname: '/selectedmeal',
                        mealPlan: this.state.plans[i]
                    }}
                >
                    <div className="planBox">
                        <div className="imageBox">
                            <img className="planImage" src={imageArray[imageMod]}></img>
                        </div>
                        <hr style={{backgroundColor: "#333", margin: 0}}/>
                        <h2 style={{backgroundColor: "#fff", padding: "10px 0px", margin: 0}}>{this.state.plans[i].name}</h2>
                    </div>
                    <br/>
                </Link>
            )
        }
        return planArray;
    }

    render() {
        var planList = this.renderMealPlans();
        return  (
            <>
            <div className="flexbox">
                <Header/>
                <div className="col">
                    <h2>Select a Meal Plan</h2>  
                    <br/>
                </div>
                <div className="content">
                    {planList}
                </div>
                <br/>
                <br/>
                <br/>
                <Navigation/>
            </div>
            </>
        );
    }
}

export default SelectMeal;