let mongoose = require('mongoose');

let mealPlan = mongoose.model('MealPlan');

//Lists all of the current meal plans on the database - this will be viewed on the respective page
exports.meals__listAllMealPlans = (req, res) => {
    mealPlan.find({}, (err, result) => {
        if(err) res.send(`Error: cannot list ${err.value}`);
        res.json(result);
    });
}

//Creates a new meal plan by the user
exports.meals__createMealPlan = (req, res) => {
    let newMealPlan = new mealPlan(req.body);
    newMealPlan.save((err, result) => {
        if(err) res.send(`Error: cannot create ${err.value}`);
        res.json(result);
    })
}

//Finds the meal plan based off of the given ID
exports.meals__searchMealPlan = (req, res) => {
    mealPlan.find({_id: req.params.mealplanid}, (err, result) => {
        if(err) res.send(`Error: cannot find ${err.value}`);
        res.json(result);
    });
}

//Updates the current meal plan which the user owns based on its ID
exports.meals__updateMealPlan = (req, res) => {
    mealPlan.findOneAndUpdate({_id: req.params.mealplanid}, req.body, {new:true}, (err, result) => {
        if(err) res.send(`Error: cannot update ${err.value}`);
        res.json(result);
    })
}

//Deletes the current meal - this is only used if the creator of the meal plan wants to delete their work
exports.meals__deleteMealPlan = (req, res) => {
    mealPlan.findOneAndDelete({_id: req.params.mealplanid}, (err, result) => {
        if(err) res.send(`Error: cannot delete ${err.value}`);
        res.json(result);
    })
}