let mongoose = require('mongoose');

let mealPlanSchema = mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    breakfast: {
        type: Object
    },
    lunch: {
        type: Object
    },
    dinner: {
        type: Object
    },
    snacks: {
        type: Object
    }
});

module.exports = mongoose.model('MealPlan', mealPlanSchema);