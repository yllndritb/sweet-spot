import SweetSpot from './SweetSpot';
let height= 170;
let weight= 110;
let age= 24;
let gender= 'Male';
let levelOfActivity= 1.37;

const obj = new SweetSpot(height,weight,age,gender,levelOfActivity);

expect(obj.getBMI).toBe("38.00");
expect(obj.getBMR).toBe(2);
expect(obj.getIdealWeight).toBe(1);
expect(obj.getExtraWeight).toBe(2);
expect(obj.getMissingWeight).toBe(1);
expect(obj.getBurnedCalories).toBe(2);
expect(obj.getMonths).toBe(1);
expect(obj.getDailyIntakeCalories).toBe(2);
expect(obj.getBurnedCaloriesBy30MinRunning).toBe(1);
expect(obj.getBurnedCaloriesBy30MinCardio).toBe(2);
expect(obj.getBurnedCaloriesBy30MinWeightTraining).toBe(1);
expect(obj.getExtraActivities).toBe(2);
