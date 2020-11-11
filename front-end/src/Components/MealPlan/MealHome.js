import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Navigation from '../Navigation';

class MealHome extends Component {
    constructor(props){
        super(props);
        this.state = {
            userData: this.props.location.data,
        }
    }

    async componentDidMount(){
        await fetch(`http://localhost:3001/mealplan/${this.state.userData.mealPlanID}`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                mealPlan: data[0]
            });
        });
    }
    
    render() {
        return  (
            <>
            <div className="flexbox">
                <Header/>
                <div className="content">
                    <Link
                        className="planHomeLink"
                        to={{
                            pathname: '/currentmeal',
                            data: this.state.userData,
                            mealPlanData: this.state.mealPlan
                        }}
                    >
                    <div className="planHomeButton">
                        <h3>Current Meal Plan</h3>
                    </div>
                    </Link>
                    <Link
                        className="planHomeLink"
                        to={{
                            pathname: '/selectmeal',
                            data: this.state.userData
                        }}
                    >
                    <div className="planHomeButton">
                        <h3>Select Meal Plan</h3>
                    </div>
                    </Link>
                    <Link
                        className="planHomeLink"
                        to={{
                            pathname: '/createmeal',
                            data: this.state.userData
                        }}
                    >
                    <div className="planHomeButton">
                        <h3>Create Meal Plan</h3>
                    </div>
                   </Link>
                </div>
                <Navigation userData={this.state.userData}/>
            </div>
            </>
        );
    }
}

export default MealHome;