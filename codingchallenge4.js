/*
1. create object w full name, mass, height,
2. add a method each object to calculate BMI. save into the object + rreturn from method
3. log console who has the highest BMI
 */

var john = {
    firstName: 'John',
    lastName: 'Doe',
    mass: 76,
    height: 180,
    calcBMI: function(){
        this.bmi = this.mass/this.height*2;
    }
};

var mark ={
    firstName: 'Mark',
    lastName: 'Jones',
    mass: 120,
    height: 190,
    calcBMI: function(){
        return this.mass/this.height*2;
    }
};

if (john.calcBMI() > mark.calcBMI())
    console.log(john.firstName + ' ' + john.lastName + ' has the higher BMI than Mark\'s');
else if (mark.bmi() > john.bmi())//in this way, don't have to run this again
    console.log(mark.firstName + ' ' + mark.lastName + ' has the higher BMI than John\'s');
else
    console.log('They have the same BMI at ' + mark.calcBMI());