$(document).ready(function() {
    // create necessary variables
timer = 0;
questionNumber = 0;
playing = false;
// questions as objects, then all objects in an array (for randomized questions?)

// when users presses a key, start game
$(document).keyup(function() {
// set playing to true
// change title to 'let's play!'
// nextQuestion() function:-------
// change #question to show question1
// set timer to 20 * 1000
// show 3 incorrect answers and one correct answer - write these into the objects
});

// CLICK EVENTS ---- checkAnswer()
// if timer = 0 borrow red background flash from simon game; setTimeout 3 * 1000 nextQuestion()
// if user clicks incorrect answer button, show correct answer; setTimeout 3 * 1000 nextQuestion()
// if user clicks correct answer button, show great work; setTimeout 3 * 1000 nextQuestion()
// increment correct or incorrect
// generate percentage? 





// how to do that? store clicked button's text as userAnswer, compare that to object.correctAnswer 
// how to dynamically generate buttons... in object, answers are in an array, one object key 'correctAnswer', is answers[i];
// use for loop to generate buttons, and then .append them 



})