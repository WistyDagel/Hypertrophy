import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import logo from './logo.svg';
import './Style.css';
//COMPONENTS
// APP STARTUP COMPONENTS
import SignUp from './Components/SignUp';
import LogIn from './Components/LogIn';
import Greeting from './Components/Greeting';

// HOME COMPONENTS
import Home from './Components/Home';
import FitnessLog from './Components/FitnessLog';
import MealHome from './Components/MealPlan/MealHome';
import WorkoutHome from './Components/WorkoutPlan/WorkoutHome';

// FITNESS LOG COMPONENTS
import AddFood from './Components/AddFood';
import AddExercise from './Components/AddExercise';

// MEAL PLAN COMPONENTS
import CurrentMeal from './Components/MealPlan/CurrentMeal';
import SelectMeal from './Components/MealPlan/SelectMeal';
import CreateMeal from './Components/MealPlan/CreateMeal';

// WORKOUT PLAN COMPONENTS
import CurrentWorkout from './Components/WorkoutPlan/CurrentWorkout';
import SelectWorkout from './Components/WorkoutPlan/SelectWorkout';
import CreateWorkout from './Components/WorkoutPlan/CreateWorkout';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            {/* APP STARTUP COMPONENTS */}
            <Route path="/" exact component={Greeting}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/login" component={LogIn}/>
            <Route path="/login" component={LogIn}/>

            {/* HOME COMPONENTS */}
            <Route path="/home" component={Home}/>
            <Route path="/fitnesslog" component={FitnessLog}/>
            <Route path="/mealhome" component={MealHome}/>
            <Route path="/workouthome" component={WorkoutHome}/>

            {/* FITNESS LOG COMPONENTS */}
            <Route path="/addfood" component={AddFood}/>
            <Route path="/addexercise" component={AddExercise}/>

            {/* MEAL PLAN COMPONENTS */}
            <Route path="/currentmeal" component={CurrentMeal}/>
            <Route path="/selectmeal" component={SelectMeal}/>
            <Route path="/createmeal" component={CreateMeal}/>

            {/* WORKOUT PLAN COMPONENTS */}
            <Route path="/currentworkout" component={CurrentWorkout}/>
            <Route path="/selectworkout" component={SelectWorkout}/>
            <Route path="/createworkout" component={CreateWorkout}/>

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
