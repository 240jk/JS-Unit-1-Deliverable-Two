let playerName = prompt("Welcome to GC Mini Golf!  What is your name?");
console.log (playerName)
let holeCount = prompt("Hi, "+playerName+"!  Would you like to play 3 or 6 holes today?")
let playerScore = 0;
let smallGame = 9;
let bigGame = 18;
let coursePar = 0;

if (holeCount == 3){
    coursePar = smallGame
} else {
    coursePar = bigGame
}
for (let i = 0; i < holeCount; i++) {
    let thisHoleScore = Number(prompt("How many putts for Hole" + String(i+1) +"? (Par is 3)"));
    playerScore += thisHoleScore;
}
console.log("Your total score is "+playerScore+".")

let finalScore = playerScore - coursePar;

if (finalScore > 0) {
    alert("Nice try, "+playerName+"... Your total par was: +"+finalScore+".");
    console.log("Nice try, "+playerName+"... Your total par was: +"+finalScore+".");
} else if (finalScore < 0) {
    alert("Great job, "+playerName+"! Your total par was: "+finalScore+".");
    console.log("Great job, "+playerName+"! Your total par was: "+finalScore+".");
} else {
    alert("Good game, "+playerName+". Your total par was: "+finalScore+".");
    console.log("Good game, "+playerName+". Your total par was: "+finalScore+".");
}