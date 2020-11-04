import React, { Component } from 'react';

class CalculateStats extends Component{
    constructor(props){
        super(props);
    }

    //Calculate calories - Mifflin-St Jeor Equation
    //MEN 
    //BMR = 10W + 6.25H - 5A + 5
    //WOMEN
    //BMR = 10W + 6.25H - 5A - 161

    //Calculate calories - Revised Harris-Benedict Equation
    //MEN
    //BMR = 13.397W + 4.799H - 5.677A + 88.362
    //WOMEN
    //BMR = 9.247W + 3.098H - 4.330A + 447.593

    //Pass parameters into the function and call it from the Signup 3 page
    
    //BMR DATA URL
    //https://www.calculator.net/bmr-calculator.html?ctype=standard&cage=22&csex=f&cheightfeet=5&cheightinch=6&cpound=130&cheightmeter=180&ckg=60&cmop=1&coutunit=c&cformula=m&cfatpct=20&x=31&y=11

    //CALORIE COUNT URL
    //https://www.calculator.net/calorie-calculator.html?ctype=standard&cage=22&csex=m&cheightfeet=6&cheightinch=22&cpound=230&cheightmeter=180&ckg=65&cactivity=1.2&cmop=0&coutunit=c&cformula=m&cfatpct=20&printit=0&x=98&y=20

    //MACRO CALC URL
    //https://www.calculator.net/macro-calculator.html?ctype=standard&cage=22&csex=m&cheightfeet=6&cheightinch=2&cpound=230&cheightmeter=180&ckg=65&cactivity=1&cgoal=m&cmop=0&cformula=m&cfatpct=20&printit=0&x=54&y=11

    //TODO - CALCULATE CALORIES BASED ON ACTIVITY/GOAL
    calculateCalories = (userData) => {
        //Convert to CM
        var heightCm = userData.heightFt * 30.48;
        heightCm = heightCm + (userData.heightIn * 2.54);

        var calories = 0;
        var activityPercent;
        var goalPercent;

        //ACTIVITY CALCULATIONS
        //BMR - increases by .15% depending on activity
        if(userData.goalsAndActivity.notActive){
            //NO ACTIVITY - Standard rate
            activityPercent = 1;
        } else if(userData.goalsAndActivity.lightActive){
            //LIGHT ACTIVITY - 1.15
            activityPercent = 1.15;
        } else if(userData.goalsAndActivity.active){
            //ACTIVE - 1.20
            activityPercent = 1.30;
        } else if(userData.goalsAndActivity.veryActive){
            //VERY ACTIVE - 1.25
            activityPercent = 1.45;
        }

        //GOALS CALCULATIONS
        if(userData.goalsAndActivity.loseWeight){
            //LOSE WEIGHT - lose .5lbs/week
            goalPercent = .91;
        } else if(userData.goalsAndActivity.maintainWeight){
            //MAINTAIN WEIGHT 
            goalPercent = 1;
        } else if(userData.goalsAndActivity.gainWeight){
            //GAIN WEIGHT - Gain .5lbs/week
            goalPercent = 1.09;
        }

        if(userData.male){
            calories = (((10 * userData.weight) + (6.25 * heightCm) - (5 * userData.age) + 5) * .63) * activityPercent;
        } else {
            calories = (((10 * userData.weight) + (6.25 * heightCm) - (5 * userData.age) - 161) * .68) * activityPercent;
        }

        var calorieCount = calories * goalPercent;
        return Math.trunc(calorieCount);
    }   

    // Carbs: 2,300 x 0.50 equals 1,150. I eat 1,150 calories worth of carbs each day (hello, extra slice of toast).
    // Protein: 2,300 x 0.25 equals 575, so I get 575 calories worth of protein.
    // Fats: 2,300 x 0.25 equals 575. I also get 575 calories comprised of dietary fat. 

    // Carbs (four calories per gram): 1,150 divided by 4 equals 287.5 grams of carbs.
    // Protein (four calories per gram): 575 divided by 4 equals 143.75 grams of protein
    // Fat (nine calories per gram): 575 divided by 9 equals 63.8 grams of fat.
    
    //TODO 
    //Find most balance rate for deciding macro nutrients
    calculateMacros = (calories) => {
        var nurtientList = [];
        //Conditioal statements (goals/activity) alter the percentage values of macro nutrient count
        var proteinPercent = .26
        var carbPercent = .54
        var fatPercent = .12
        var sugarPercent = .08

        //TOTAL SHOULD BE 100% : 25 + 25 + 47 + 3
        
        var proteins = Math.trunc((calories * proteinPercent) / 4);
        nurtientList.push(proteins);

        var carbs = Math.trunc((calories * carbPercent) / 4);
        nurtientList.push(carbs);

        var fats = Math.trunc((calories * fatPercent) / 4);
        nurtientList.push(fats);

        var sugars = Math.trunc((calories * sugarPercent) / 4);
        nurtientList.push(sugars);
        
        return nurtientList;
    }
}

const calcStats = new CalculateStats();

export default calcStats;