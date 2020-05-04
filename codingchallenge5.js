/*
John and family went to 5 restaurant bills at: 124, 48, 268, 180, 42
bill < 50: 20% tips, 50-200: 15% >200: 10%

Use object + loop:
1. create object with an array for bill values
2. ADd method to calculate tips
3. Use loop + iteration to calculate tips
4. As an output,
- create new array contains tips
- array containing final paid amount

Mark family went on holidays, 4 restaurants: 77. 375, 119, 45
< 100: 20%, 100-300: 10%, >300: 25%
5. create mark's tipping rules calculation
6. create a function to calculate the average of a given arrya of tips.
7. calculate each avg tip for each family
8. log into console to see who pays more

 */

var johnFam = {
    bills: [124, 48, 268, 180, 42],
    calcTips: function (){
        this.tips = [];
        this.totals = [];
        var percentage = 0;
        for (var i = 0; i < this.bills.length; i++){
            if(this.bills[i] < 100)
                percentage = 0.2;
            else if(this.bills[i] >= 100 && this.bills[i] <= 300)
                percentage = 0.15;
            else
                percentage = 0.1;
            this.tips[i] = this.bills[i]*percentage;
            this.totals[i] = this.bills[i]*percentage + this.bills[i];
        }
    }};
johnFam.calcTips();
console.log(johnFam.totals);

var markFam = {
    bills: [77, 375, 110, 45],
    tips: [],
    totals: [],
    calcTips: function (){
    var percentage = 0;
    for (var i = 0; i < this.bills.length; i++){
        if(this.bills[i] < 100)
            percentage = 0.2;
        else if(this.bills[i] >= 100 && this.bills[i] <= 300)
            percentage = 0.1;
        else
            percentage = 0.25;
        this.tips[i] = this.bills[i]*percentage;
    }
}};

markFam.calcTips();
//not add as object method because code applies to 2 different objects
var avgTips = function(tips){
    if (typeof tips === new Array()){
        var sum = 0
        for(var i = 0; i < tips.length; i++){
            sum += tips[i];
        }
        return sum/tips.length;
    }
}
johnFam.average = avgTips(johnFam.tips);
markFam.average = avgTips(markFam.tips);

johnFam.average < markFam.average ? console.log('John') : console.log('Mark');
