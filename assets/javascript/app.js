$(document).ready(function() {
    // create necessary variables
var timer = 0;
var questionNumber = 0;
var playing = false;
// questions as objects, then all objects in an array (for randomized questions?)
var questions = [
    {
    question: "The largest recorded earthquake in the US occurred where?",
    correctAnswer: "Prince William Sound, AK",
    answers: ["Seattle, WA", "San Bernadino, CA", "Prince William Sound, AK", "Frazier Park, CA"]
    },
    {
    question: "The widest tornado on record struck El Reno, Oklahoma, in 2013. What was it's width?",
    correctAnswer: "2.6 miles",
    answers: ["1.5 miles", "2.6 miles", "3.7 miles", "4.3 miles"]
    },
    {
    question: "The largest recorded earthquake in the US occurred where?",
    correctAnswer: "Prince William Sound, AK",
    answers: ["Seattle, WA", "San Bernadino, CA", "Prince William Sound, AK", "Frazier Park, CA"]
    }

]
// when users presses a key, start game
$(document).keyup(function() {
// set playing to true
playing = true;
// change title to 'let's play!'
$("#title").text("Let's Play!");
// nextQuestion() function:-------
// nextQuestion();
// change #question to show question1
$("#question").text(questions[questionNumber].question);
// questionNumber++;
// set timer to 15 * 1000 -- setInterval for counting down, clearInterval if click
timer = 15;
$("#timer").text("Time Remaining: " + timer);
// setTimeout() CHECK OUT 'stopwatch.js' for clues
// show 3 incorrect answers and one correct answer - write these into the objects
// how to dynamically generate buttons... in object, answers are in an array, one object key 'correctAnswer', is answers[i];
// use for loop to generate buttons, and then .append them 
for ( i = 0; i < 4; i++) {
    $("#game").append("<p><button class='btn'>" + questions[questionNumber].answers[i] + "</button></p>");
};
});

// CLICK EVENTS ---- checkAnswer()
// if timer = 0 borrow red background flash from simon game; setTimeout 3 * 1000 nextQuestion()
// if user clicks incorrect answer button, show correct answer; setTimeout 3 * 1000 nextQuestion()
// if user clicks correct answer button, show great work; setTimeout 3 * 1000 nextQuestion()
// increment correct or incorrect
// generate percentage? 





// how to do that? store clicked button's text as userAnswer, compare that to object.correctAnswer 



})