/*
 * CODING CHALLENGE 1
 Mark and John are trying to compare their BMI , which is calculated using the formula: BMI = mass/height^2

 1. Store Mark's and John's mass and height in variables
 2. Calculate both their BMIs
 3. Create a boolean variab
*/
//store Mark and John's in variables
var massMark, massJohn, heightMark, heightJohn;
massJohn = 85;
massMark = 120;
heightMark = 175;
heightJohn = 195;

//calculate their BMIs

var MarkBMI, JohnBMI;
MarkBMI = massMark/heightMark*2;
JohnBMI = massJohn/heightJohn*2;

var isFatter = MarkBMI > JohnBMI;

//create a boolean variable
console.log("Is Mark\'s BMI higher than John\'s?" + isFatter);


//optimisation
if (MarkBMI > JohnBMI)
    console.log('Mark\'s BMI is higher than John\'s');
else
    console.log('Mark\'s BMI is lower than John\'s');
