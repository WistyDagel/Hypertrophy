let mongoose = require('mongoose');

let fitnessLogSchema = new mongoose.Schema({
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
    },
    exercises: {
        type: Object
    }
});

module.exports = mongoose.model('FitnessLog', fitnessLogSchema);