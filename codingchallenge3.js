/*
John and family went on a holiday and
The bills were $124, $48, $268

John tipped  20% of the bills if if is less than $50, 15% if bill is 50-200, 10 is more then 200

create 2 arrays:
(1) comtains 3 tips
(2) contains all final amount of bills
 */
var bills = new Array(124, 48, 268);

//var totalBills = [0, 0, 0];

var calculateTips = function(bill){
    switch (bill) {
        case bill < 50:
            return bill*0.2;
        case bill >= 50 && bill < 200:
            return bill*0.15;
        default:
            return bill*0.1;
    }
}//do if else => percentage => return percentage*bill
/*
tips[0] = calculateTips(bills[0]);
tips[1] = calculateTips(bills[1]);
tips[2] = calculateTips(bills[2]);
*/

var tips = [calculateTips(bills[0]), calculateTips(bills[1]), calculateTips(bills[2])];
var calculateTotals = function(bill, tip){
    return bill + tip;
}

var bills = [calculateTotals(bills[0], tips[0]),
            calculateTotals(bills[1], tips[1]), calculateTotals(bills[2], tips[2])] ;

console.log(tips);
console.log(totalBills);