 document.getElementById("information").addEventListener("submit", function(e){
     let gender;
    e.preventDefault();
    name=document.getElementById("information").elements.namedItem("name").value;
    last_name=document.getElementById("information").elements.namedItem("last_name").value;
    var radios = document.getElementsByName('gender');
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            gender = radios[i].value;
          break;
        }
    }
    weight=document.getElementById("information").elements.namedItem("weight").value;
    height=document.getElementById("information").elements.namedItem("height").value;
    age=document.getElementById("information").elements.namedItem("age").value;
    levelOfActivity=document.getElementById("information").elements.namedItem("level_of_activity").value;


    const sweetSpot = new SweetSpot(height,weight,age,gender,levelOfActivity);

    document.getElementById("bmi").innerHTML = sweetSpot.getBMI;
    document.getElementById("bmr").innerHTML = sweetSpot.getBMR;
    document.getElementById("ideal-weight").innerHTML = sweetSpot.getIdealWeight;
    document.getElementById("extra-weight").innerHTML = sweetSpot.getExtraWeight;
    document.getElementById("missing-weight").innerHTML = sweetSpot.getMissingWeight;
    document.getElementById("burned-calories").innerHTML = sweetSpot.getBurnedCalories;
    document.getElementById("months").innerHTML = sweetSpot.getMonths;
    document.getElementById("daily-intake").innerHTML = sweetSpot.getDailyIntakeCalories;
});


