import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Navigation from '../Navigation';

class SelectMeal extends Component {
    constructor(props){
        super(props);
        this.state = {
            userData: this.props.location.data,
            plans: ''
        }

        this.renderMealPlans = this.renderMealPlans.bind(this);
    }

    async componentDidMount(){
        await fetch('http://localhost:3001/mealplan')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.setState({
                plans: data
            });
        });
    }

    renderMealPlans = () => {
        var planArray = []
        for (let i = 0; i < this.state.plans.length; i++) {     
            planArray.push(
                <Link
                    key={i}
                    className="planLink"
                    to={{
                        pathname: '/selectedmeal',
                        data: this.state.userData,
                        mealPlanData: this.state.plans[i]
                    }}
                >
                    <div className="planBox">
                        <div className="imageBox">
                            <h3>Image Placeholder</h3>
                        </div>
                        <hr/>
                        <h2>{this.state.plans[i].name}</h2>
                    </div>
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
                <Navigation userData={this.state.userData}/>
            </div>
            </>
        );
    }
}

export default SelectMeal;