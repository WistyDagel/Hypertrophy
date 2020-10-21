module.exports = (app) => {
    // (¬‿¬)(¬‿¬)(¬‿¬)
    // const exerciseController = require('./Components/Postponed/ExerciseController');
    const fitnessLogController = require('./Components/Controllers/FitnessLogController');
    // const foodController = require('./Components/Postponed/FoodController');
    const mealPlanController = require('./Components/Controllers/MealPlanController');
    const userController = require('./Components/Controllers/UserController');
    const workoutPlanController = require('./Components/Controllers/WorkoutPlanController');

    //Tests that the API - Database connection is working
    app.route('/').get(userController.root);

    //USER ROUTES
    app.route('/users')
    .get(userController.users__listAllUsers) // Lists all current users
    .post(userController.users__createUser); // Creates a new user

    app.route('/users/:userid')
    .get(userController.users__searchUser) //Searches for the user based on id - DEV PURPOSES ONLY (STRETCH GOAL)
    .put(userController.users__updateUser) //Updates the users information
    .delete(userController.users__deleteUser); //Deletes the user - DEV PURPOSES ONLY (STRETCH GOAL)

    //FITNESS LOG ROUTES
    app.route('/fitnesslog')
    .get(fitnessLogController.logs__listAllLogs) //Lists all of the current logs on the database - DEV PURPOSES ONLY
    .post(fitnessLogController.logs__createLog); // Creates a new fitness log

    app.route('/fitnesslog/:fitnesslogid')
    .get(fitnessLogController.logs__searchLog) //This will return the current fitness log for the user
    .put(fitnessLogController.logs__updateLog) //Updates the log
    .delete(fitnessLogController.logs__deleteLog); //Deletes the log 

    //MEAL PLAN ROUTES
    app.route('/mealplan')
    .get(mealPlanController.meals__listAllMealPlans) //Lists all of the current meal plans on the database
    .post(mealPlanController.meals__createMealPlan); //Creates a new meal plan

    app.route('/mealplan/:mealplanid')
    .get(mealPlanController.meals__searchMealPlan) //This will return the current meal plan for the user
    .put(mealPlanController.meals__updateMealPlan) //Updates the current meal plan
    .delete(mealPlanController.meals__deleteMealPlan); //Deletes the current meal plan - this will be used so the user can then change their meal plan

    //WORKOUT PLAN ROUTES
    app.route('/workoutplan')
    .get(workoutPlanController.workouts__listAllWorkoutPlans) //Lists all of the current meal plans on the database
    .post(workoutPlanController.workouts__createWorkoutPlan); //Creates a new meal plan

    app.route('/workoutplan/:workoutplanid')
    .get(workoutPlanController.workouts__searchWorkoutPlan) //This will return the current meal plan for the user
    .put(workoutPlanController.workouts__updateWorkoutPlan) //Updates the current meal plan
    .delete(workoutPlanController.workouts__deleteWorkoutPlan); //Deletes the current meal plan - this will be used so the user can then change their meal plan

}