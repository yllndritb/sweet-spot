const KG_IN_CALORIES = 7000;
const AVG_DAYS_IN_MONTH = 30.45;
const HEALTHY_GAIN_OVER_MONTH_KG = 3;
const HEALTHY_LOSE_OVER_MONTH_KG = 5;
const MIN_BMI = 18.5;
const MAX_BMI = 24.9;
const CALORIES_BURNED_RUNNING_PER_KG_IN_MINUTE = 0.21;
const CALORIES_BURNED_CARDIO_PER_KG_IN_MINUTE = 0.11;
const CALORIES_BURNED_WEIGHT_TRAINING_PER_KG_IN_MINUTE = 0.05;

export default class SweetSpot {
  constructor(height, weight, age, gender, levelOfActivity) {
    this.height = height;
    this.weight = weight;
    this.age = age;
    this.gender = gender;
    this.levelOfActivity = levelOfActivity;
  }

  get getBMI() {
    return this.calcBMI().toFixed(2);
  }

  get getBMR() {
    return this.calcBMR().toFixed(2);
  }

  get getIdealWeight() {
    return this.calcIdealWeight().toFixed(3);
  }

  get getExtraWeight() {
    return this.calculateExtraWeight().toFixed(3);
  }

  get getMissingWeight() {
    return this.calculateMissingWeight().toFixed(3);
  }

  get getBurnedCalories() {
    return Math.round(this.calculateBurnedCalories());
  }

  get getMonths() {
    return this.calculateMonths();
  }

  get getDailyIntakeCalories() {
    return Math.round(this.calculateDailyIntakeCalories());
  }

  
  get getBurnedCaloriesBy30MinRunning() {
    return Math.round(this.calcualteBurnedCaloriesBy30MinRunning());
  }

  
  get getBurnedCaloriesBy30MinCardio() {
    return Math.round(this.calcualteBurnedCaloriesBy30MinCardio());
  }

  
  get getBurnedCaloriesBy30MinWeightTraining() {
    return Math.round(this.calcualteBurnedCaloriesBy30MinWightTraining());
  }

  
  get getExtraActivities() {
    return Math.round(this.calcualteExtraActivites());
  }

  calcBMI() {
    let heightInMeters = this.height / 100;
    return Math.round(this.weight / Math.pow(heightInMeters, 2));
  }

  calcBMR() {
    return this.gender === 'Male' ? 66.47 + 13.75 * this.weight + 5.003 * this.height - 6.755 * this.age : 655.1 + 9.563 * this.weight + 1.85 * this.height - 4.676 * this.age;
  }

  calculateExtraWeight() {
    return !!this.isOverweight() ? this.weight - this.getIdealWeight : 0;
  }

  calculateMissingWeight() {
    return !!this.isUnderweight() ? this.getIdealWeight - this.weight : 0;
  }

  calcIdealWeight() {
    let heightInMeters = this.height / 100;
    let avgBMI = (MIN_BMI + MAX_BMI) / 2;
    return Math.round(avgBMI * Math.pow(heightInMeters, 2));
  }

  calculateMonths() {
    let months = 0;
    let loop = !!this.getExtraWeight ? this.getExtraWeight : this.getMissingWeight;
    while (loop > 0) {
      months++;
      loop = loop - (!!this.isOverweight() ? HEALTHY_LOSE_OVER_MONTH_KG : HEALTHY_GAIN_OVER_MONTH_KG);
    }
    return months;
  }

  calculateDailyIntakeCalories() {
    let burnedCaloriesInMonth = AVG_DAYS_IN_MONTH * this.getBurnedCalories;
    let deltaWeightCalories = (KG_IN_CALORIES * (!!this.getExtraWeight ? this.getExtraWeight : this.getMissingWeight)) / this.getMonths;
    deltaWeightCalories = (!!this.isOverweight && !!deltaWeightCalories)?(-deltaWeightCalories):deltaWeightCalories;
    let totalCalories = burnedCaloriesInMonth + deltaWeightCalories;
    return !!totalCalories ? (burnedCaloriesInMonth + deltaWeightCalories) / AVG_DAYS_IN_MONTH : this.getBurnedCalories;
  }

  calculateBurnedCalories(workout=false,running=true,cardio=true,weight_training=true) {
  if(!workout || this.levelOfActivity>=1.55){
    return this.getBMR * this.levelOfActivity;
  }else{
    let workout_burned_calories=0;
    if(running){
      workout_burned_calories=workout_burned_calories+this.calcualteBurnedCaloriesBy30MinRunning()
    }
    if(cardio){
      workout_burned_calories=workout_burned_calories+this.calcualteBurnedCaloriesBy30MinCardio()
    }
    if(weight_training){
      workout_burned_calories=workout_burned_calories+this.calcualteBurnedCaloriesBy30MinWightTraining()
    }
    return this.getBMR * this.levelOfActivity+workout_burned_calories*0.285714286;
  } 
 }

  isUnderweight() {
    return this.getBMI < 18.5;
  }

  isOverweight() {
    return this.getBMI > 24.9;
  }

  calcualteBurnedCaloriesBy30MinRunning() {
      return CALORIES_BURNED_RUNNING_PER_KG_IN_MINUTE*30*this.weight;
  }
  
  calcualteBurnedCaloriesBy30MinCardio() {
      return CALORIES_BURNED_CARDIO_PER_KG_IN_MINUTE*30*this.weight;
  }
  
  calcualteBurnedCaloriesBy30MinWightTraining() {
      return CALORIES_BURNED_WEIGHT_TRAINING_PER_KG_IN_MINUTE*30*this.weight;   
  }

  calcualteExtraActivites() {
    return this.levelOfActivity < 1.55;   
  }
}
