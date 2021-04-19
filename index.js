import SweetSpot from './SweetSpot.js';


 document.getElementById("information").addEventListener("submit", function(e){
     let gender;
    e.preventDefault();
    let name=document.getElementById("information").elements.namedItem("name").value;
    let last_name=document.getElementById("information").elements.namedItem("last_name").value;
    var radios = document.getElementsByName('gender');
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            gender = radios[i].value;
          break;
        }
    }
    let weight=document.getElementById("information").elements.namedItem("weight").value;
    let height=document.getElementById("information").elements.namedItem("height").value;
    let age=document.getElementById("information").elements.namedItem("age").value;
    let levelOfActivity=document.getElementById("information").elements.namedItem("level_of_activity").value;


    const sweetSpot = new SweetSpot(height,weight,age,gender,levelOfActivity);
    let bmi=sweetSpot.getBMI;
    let bmr=sweetSpot.getBMR;
    let ideal_weight= sweetSpot.getIdealWeight;
    let extra_weight= sweetSpot.getExtraWeight;
    let missing_weight= sweetSpot.getMissingWeight;
    let burned_calories= sweetSpot.getBurnedCalories;
    let months= sweetSpot.getMonths;
    let daily_intake= sweetSpot.getDailyIntakeCalories;
    let running_training= sweetSpot.getBurnedCaloriesBy30MinRunning;
    let cardio_training= sweetSpot.getBurnedCaloriesBy30MinCardio;
    let weight_training= sweetSpot.getBurnedCaloriesBy30MinWeightTraining;
    let extra_activites= sweetSpot.getExtraActivities;
    

    

    document.getElementById("bmi").innerHTML = bmi;
    document.getElementById("bmr").innerHTML = bmr;
    document.getElementById("ideal-weight").innerHTML = ideal_weight;
    document.getElementById("extra-weight").innerHTML = extra_weight;
    document.getElementById("missing-weight").innerHTML = missing_weight;
    document.getElementById("burned-calories").innerHTML = burned_calories;
    document.getElementById("months").innerHTML = months;
    document.getElementById("daily-intake").innerHTML = daily_intake;
    document.getElementById("running-training").innerHTML = running_training;
    document.getElementById("cardio-training").innerHTML = cardio_training;
    document.getElementById("weight-training").innerHTML = weight_training;


    if(extra_weight==0){
        document.getElementById("results-extra-weight").classList.add("d-none");
    }else{
        document.getElementById("results-extra-weight").classList.remove("d-none");
    }
    if(missing_weight==0){
        document.getElementById("results-missing-weight").classList.add("d-none");
    }else{
        document.getElementById("results-missing-weight").classList.remove("d-none");
    }
    
    if(months==0){
        document.getElementById("results-months").classList.add("d-none");
    }else{
        document.getElementById("results-months").classList.remove("d-none");
    }

    if(!extra_activites){
        document.getElementById("results-running-training").classList.add("d-none");
        document.getElementById("results-cardio-training").classList.add("d-none");
        document.getElementById("results-weight-training").classList.add("d-none");
        document.getElementById("results-extra-weight-message").classList.remove("d-none");
        document.getElementById("extra-weight-message").classList.add("d-none");
    }else{
        document.getElementById("results-running-training").classList.remove("d-none");
        document.getElementById("results-cardio-training").classList.remove("d-none");
        document.getElementById("results-weight-training").classList.remove("d-none");
        document.getElementById("results-extra-weight-message").classList.add("d-none");
        document.getElementById("extra-weight-message").classList.remove("d-none");
    }

    document.getElementById("results").classList.remove("d-none");
});


