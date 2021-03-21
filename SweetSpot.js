const KG_IN_CALORIES = 7000;
const AVG_DAYS_IN_MONTH = 30.45;
const HEALTHY_GAIN_OVER_MONTH_KG = 3;
const HEALTHY_LOSE_OVER_MONTH_KG = 5;
const MIN_BMI = 18.5;
const MAX_BMI = 24.9;

class SweetSpot {
  constructor(height, weight, age, gender, levelOfActivity) {
    this.height = height;
    this.weight = weight;
    this.age = age;
    this.gender = gender;
    this.levelOfActivity = levelOfActivity;
  }

  get getBMI() {
    return this.calcBMI();
  }

  get getBMR() {
    return this.calcBMR();
  }

  get getIdealWeight() {
    return this.calcIdealWeight();
  }

  get getExtraWeight() {
    return this.calculateExtraWeight();
  }

  get getMissingWeight() {
    return this.calculateMissingWeight();
  }

  get getBurnedCalories() {
    return this.calculateBurnedCalories();
  }

  get getMonths() {
    return this.calculateMonths();
  }

  get getDailyIntakeCalories() {
    return this.calculateDailyIntakeCalories();
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
    let totalCalories = burnedCaloriesInMonth + deltaWeightCalories;
    return !!totalCalories ? (burnedCaloriesInMonth + deltaWeightCalories) / AVG_DAYS_IN_MONTH : this.getBurnedCalories;
  }

  calculateBurnedCalories() {
    return this.getBMR * this.levelOfActivity;
  }

  isUnderweight() {
    return this.getBMI < 18.5;
  }

  isOverweight() {
    return this.getBMI > 24.9;
  }
}
