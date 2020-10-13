import React, { Component } from 'react';

class Home extends Component {
    constructor(){
        super();
    }

    render() {
        return  (
            <>
            <div className="Content">
                <a href='/home'>Home</a>
                <a href='/fitnesslog'>Log</a>
                <a href='/mealhome'>Diet</a>
                <a href='/workouthome'>Exercise</a>
            </div>
            </>
        );
    }
}

export default Home;