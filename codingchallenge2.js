/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89
120 and 103 point while Mike's team scored 116, 94 and 123 points.
1. Calculate the average points for each team
2. decide which team wins in average (highest average score), and print the winner to the console.
3. Change the scores to show the different winners, there might be a draw

4. Mary also plays basket ball, her team scored 97, 134 and 105 ppoints. Log into console the winner,
5. Change to score to generate different winners, might be draws1
*/

var avgJohn = (120 + 103 + 89)/3;
var avgMike = (116, 94, 123)/3;
var avgMary = (97 + 134 + 105)/3;

/*
var winner = avgJohn > avgMike ? 'John' : 'Mike';
console.log('The winner is team ' + winner);
*/

if(avgJohn > avgMike)
    console.log('Team John wins');
else if (avgMike > avgJohn)
    console.log('Team Mike wins');
else
    console.log('There\'s a draw');

avgJohn += 20;
winner = avgJohn > avgMike ? 'John' : 'Mike';
console.log('The winner is team ' + winner);

//the 3rd team
switch(winner){
    case avgMike > avgMary && avgMike > avgJohn:
        console.log('The winner is team Mike');
        break;
    case avgJohn > avgMary && avgJohn > avgMike:
        console.log('The winner is team John');
        break;
    case avgMary > avgJohn && avgMary > avgMike:
        console.log('The winner is team Mary');
        break;
    default:
        console.log('There\'s a draw');
}
