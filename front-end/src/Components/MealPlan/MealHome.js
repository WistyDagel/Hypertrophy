import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation';

class MealHome extends Component {
    constructor(props){
        super(props);
        this.state = {
            userData: this.props.location.data,
        }
    }
    
    render() {
        return  (
            <>
            <div className="flexbox">
                <div className="header">
                    <h2>Hypertrophy</h2>
                    <hr/>
                </div>
                <div className="content">
                    <div className="button">
                        <Link
                            id="border"
                            to={{
                                pathname: '/currentmeal',
                                data: this.state.userData
                            }}
                        >Current Meal Plan</Link>
                        {/* <a id="border" href='/currentmeal'>Current Meal Plan</a> */}
                    </div>
                    <br/>
                    <br/>
                    <div className="button">
                        <Link
                            id="border"
                            to={{
                                pathname: '/selectmeal',
                                data: this.state.userData
                            }}
                        >Select Meal Plan</Link>
                        {/* <a id="border" href='/selectmeal'>Select Meal Plan</a> */}
                    </div>
                    <br/>
                    <br/>
                    <div className="button">
                        <Link
                            id="border"
                            to={{
                                pathname: '/createmeal',
                                data: this.state.userData
                            }}
                        >Create Meal Plan</Link>
                        {/* <a id="border" href='/createmeal'>Create Meal Plan</a> */}
                    </div>
                </div>
                <Navigation userData={this.state.userData}/>
            </div>
            </>
        );
    }
}

export default MealHome;