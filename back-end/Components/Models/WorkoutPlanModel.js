let mongoose = require('mongoose');

let workoutPlanSchema = mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    day1: {
        type: Object
    },
    day2: {
        type: Object
    },
    day3: {
        type: Object
    },
    day4: {
        type: Object
    },
    day5: {
        type: Object
    },
    day6: {
        type: Object
    },
    day7: {
        type: Object
    }
});

module.exports = mongoose.model('WorkoutPlan', workoutPlanSchema);