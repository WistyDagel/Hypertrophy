let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    gender: {
        type: Boolean
    },
    age: {
        type: Number
    },
    height: {
        type: Number
    },
    weight: {
        type: Number
    },
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
    fitnessLog: {
        type: Object
    },
    mealPlan: {
        type: Object
    },
    workoutPlan: {
        type: Object
    },
    loseWeight: {
        type: Boolean
    },
    maintainWeight: {
        type: Boolean
    },
    gainWeight: {
        type: Boolean
    },
    notActive: {
        type: Boolean
    },
    lightlyActive: {
        type: Boolean
    },
    active: {
        type: Boolean
    },
    veryActive: {
        type: Boolean
    },
});

module.exports = mongoose.model('User', userSchema);