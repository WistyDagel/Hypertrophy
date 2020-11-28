let mongoose = require('mongoose');

//IDEA - change Meal Plan, Workout Plan, Fitness Log from Object to String 
//     - This will store the given ID of the nodes and will be able to return the collection based on the ID 

//IDEA
//STORE GOOGLE ACCOUNTOBJ as OBJ
//Instead of separating it out in multiple variables

let userSchema = new mongoose.Schema({
    googleObj: {
        type: Object
    },
    accountObj:{
        type: Object
    },
    calories: {
        type: Number
    },
    caloriesCopy: {
        type: Number
    },
    proteins: {
        type: Number
    },
    carbs: {
        type: Number
    },
    fats: {
        type: Number
    },
    sugars: {
        type: Number
    },
    fitnessLogID: {
        type: String
    },
    mealPlanID: {
        type: String
    },
    workoutPlanID: {
        type: String
    }
});

module.exports = mongoose.model('User', userSchema);