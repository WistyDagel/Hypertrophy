import React, { Component } from 'react';

class UserProfile extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            user_id: '',
            user: ''
        }
    }

    //Pass parameters into the function and call it from the Signup 3 page
    getID = () => {
        return this.state.user_id;    // Or pull this from cookie/localStorage
    };
    
    setID = (id)=> {
        this.state.user_id = id;  
        // Also set this in cookie/localStorage
    };
  
    getUser = () =>  {
        fetch(`http://localhost:3001/users/${this.state.user_id}`)
        .then(res => res.json())
        .then(data => {
            if(data){
                this.state.user = data[0];
            }
            console.log(this.state.user);
        });
        return this.state.user;
    }
}

const userProfile = new UserProfile();

export default userProfile;
