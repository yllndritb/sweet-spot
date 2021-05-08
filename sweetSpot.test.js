import SweetSpot from './SweetSpot';

let height1= 200;
let weight1= 100;
let age1= 60;
let gender1= 'Female';
let levelOfActivity1= 1.37;

const obj1 = new SweetSpot(height1,weight1,age1,gender1,levelOfActivity1);

expect(obj1.getBMI).toBe("25.00");
expect(obj1.getBMR).toBe("1700.84");
expect(obj1.getIdealWeight).toBe("87.000");
expect(obj1.getExtraWeight).toBe("13.000");
expect(obj1.getMissingWeight).toBe("0.000");
expect(obj1.getBurnedCalories).toBe(2330);
expect(obj1.getMonths).toBe(3);
expect(obj1.getDailyIntakeCalories).toBe(1334);
expect(obj1.getBurnedCaloriesBy30MinRunning).toBe(630);
expect(obj1.getBurnedCaloriesBy30MinCardio).toBe(330);
expect(obj1.getBurnedCaloriesBy30MinWeightTraining).toBe(150);


let height3= 200;
let weight3= 100;
let age3= 30;
let gender3= 'Male';
let levelOfActivity3= 1.37;

const obj3 = new SweetSpot(height3,weight3,age3,gender3,levelOfActivity3);

expect(obj3.getBMI).toBe("25.00");
expect(obj3.getBMR).toBe("2239.42");
expect(obj3.getIdealWeight).toBe("87.000");
expect(obj3.getExtraWeight).toBe("13.000");
expect(obj3.getMissingWeight).toBe("0.000");
expect(obj3.getBurnedCalories).toBe(3068);
expect(obj3.getMonths).toBe(3);
expect(obj3.getDailyIntakeCalories).toBe(2072);
expect(obj3.getBurnedCaloriesBy30MinRunning).toBe(630);
expect(obj3.getBurnedCaloriesBy30MinCardio).toBe(330);
expect(obj3.getBurnedCaloriesBy30MinWeightTraining).toBe(150);




let height4= 170;
let weight4= 110;
let age4= 24;
let gender4= 'Male';
let levelOfActivity4= 1.37;

const obj4 = new SweetSpot(height4,weight4,age4,gender4,levelOfActivity4);

expect(obj4.getBMI).toBe("38.00");
expect(obj4.getBMR).toBe(2);
expect(obj4.getIdealWeight).toBe(1);
expect(obj4.getExtraWeight).toBe(2);
expect(obj4.getMissingWeight).toBe(1);
expect(obj4.getBurnedCalories).toBe(2);
expect(obj4.getMonths).toBe(1);
expect(obj4.getDailyIntakeCalories).toBe(2);
expect(obj4.getBurnedCaloriesBy30MinRunning).toBe(1);
expect(obj4.getBurnedCaloriesBy30MinCardio).toBe(2);
expect(obj4.getBurnedCaloriesBy30MinWeightTraining).toBe(1);
expect(obj4.getExtraActivities).toBe(2);
