$(document).ready(function() {
    // create necessary variables
var timer = 0;
var questionNumber = 0; 
var clockRunning = false;
// var intervalId;
var correct = 0;
var incorrect = 0;
// questions as objects, then all objects in an array
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
$(document).keypress(function() {
    nextQuestion();
});

// if timer = 0 borrow red background flash from simon game; setTimeout 3 * 1000 nextQuestion()

function nextQuestion() {
    if (!clockRunning) {
        clockRunning = true;
        // change title to 'let's play!'
        $("#title").text("Question #" + (questionNumber + 1));
        // change #question to show question1
        $("#question").text(questions[questionNumber].question);
        // set timer to 15 * 1000 -- setInterval for counting down, clearInterval if click
        timer = 15;
        var countdown = setInterval(function(){
            $("#timer").text("Time Remaining: " + timer);
            timer -= 1;
            if(timer <= 0){
                clearInterval(countdown);
                $("#timer").text("Time's Up!");
            }
        }, 1000); 
        // use for loop to dynamically generate 4 answer buttons, and then .append them 
        for ( i = 0; i < 4; i++) {
            $("#game").append("<p><button class='btn'>" + questions[questionNumber].answers[i] + "</button></p>");
        };
    }
    
}


// CLICK EVENTS ---- checkAnswer()
// how to do that? store clicked button's text as userAnswer, compare that to object.correctAnswer 
// if user clicks incorrect answer button, show correct answer; setTimeout 3 * 1000 nextQuestion()
// if user clicks correct answer button, show great work; setTimeout 3 * 1000 nextQuestion()
// questionNumber++;
// increment correct or incorrect
// generate percentage? 




})