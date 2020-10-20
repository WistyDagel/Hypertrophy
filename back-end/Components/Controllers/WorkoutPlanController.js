let mongoose = require('mongoose');

let workoutPlan = mongoose.model('WorkoutPlan');

//List all of the current Workout Plans for the users to see on the page
exports.workouts__listAllWorkoutPlans = (req, res) => {
    workoutPlan.find({}, (err, result) => {
        if(err) res.send(`Error: cannot read ${err.value}`);
        res.json(result);
    });
}

//Creates a new workout plan by the user
exports.workouts__createWorkoutPlan = (req, res) => {
    let newWorkoutPlan = new workoutPlan(req.body);
    newWorkoutPlan.save((err, result) => {
        if(err) res.send(`Error: cannot create ${err.value}`);
        res.json(result);
    });
}

//Finds the workout plan based off of the given id - this is only seen by a user who currently has the plan selected
exports.workouts__searchWorkoutPlan = (req, res) => {
    workoutPlan.find({_id: req.params.workoutplanid}, (err, result) => {
        if(err) res.send(`Error: cannot find ${err.value}`);
        res.json(result);
    });
}

//Updates the current workout plan that the user has currenlty saved to their account
exports.workouts__updateWorkoutPlan = (req, res) => {
    workoutPlan.findOneAndUpdate({_id: req.params.workoutplanid}, req.body, {new:true}, (err, result) => {
        if(err) res.send(`Error: cannot update ${err.value}`);
        res.json(result);
    })
}

//Deletes the current workout plan - this can only be done by the user who created the plan
exports.workouts__deleteWorkoutPlan = (req, res) => {
    workoutPlan.findOneAndDelete({_id: req.params.workoutplanid}, (err, result) => {
        if(err) res.send(`Error: cannot delete ${err.value}`);
        res.json(result);
    })
}