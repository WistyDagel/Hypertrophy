module.exports = (app) => {
    // (¬‿¬)(¬‿¬)(¬‿¬)
    const exerciseController = require('./Components/Controllers/ExerciseController');
    const fitnessLogController = require('./Components/Controllers/FitnessLogController');
    const foodController = require('./Components/Controllers/FoodController');
    const mealPlanController = require('./Components/Controllers/MealPlanController');
    const userController = require('./Components/Controllers/UserController');
    const workoutPlanController = require('./Components/Controllers/WorkoutPlanController');

    app.route('/').get(userController.root);

    app.route('/users')
    .get(userController.users__listAll);
}