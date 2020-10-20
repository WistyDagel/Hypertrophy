import React, { Component } from 'react';
import Navigation from './Navigation';

class AddFood extends Component {
    constructor(){
        super();
    }

    render() {
        return  (
            <>
            <div className="flexbox">
                <h2>AddFood</h2>
                <div className="content">

                </div>
                <Navigation/>
            </div>
            </>
        );
    }
}

export default AddFood;