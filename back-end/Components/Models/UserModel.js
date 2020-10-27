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
    // male: {
    //     type: Boolean
    // },
    // female: {
    //     type: Boolean
    // },
    // age: {
    //     type: Number
    // },
    // heightFt: {
    //     type: Number
    // },
    // heightIn: {
    //     type: Number
    // },
    // weight: {
    //     type: Number
    // },
    calories: {
        type: Number
    },
    proteinsMacro: {
        type: Number
    },
    carbsMacro: {
        type: Number
    },
    fatsMacro: {
        type: Number
    },
    sugarsMacro: {
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
    },
    // loseWeight: {
    //     type: Boolean
    // },
    // maintainWeight: {
    //     type: Boolean
    // },
    // gainWeight: {
    //     type: Boolean
    // },
    // notActive: {
    //     type: Boolean
    // },
    // lightlyActive: {
    //     type: Boolean
    // },
    // active: {
    //     type: Boolean
    // },
    // veryActive: {
    //     type: Boolean
    // },
});

module.exports = mongoose.model('User', userSchema);