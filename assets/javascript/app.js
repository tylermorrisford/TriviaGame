$(document).ready(function() {
    // create necessary variables
var timer = 0;
var questionNumber = 0; 
var clockRunning = false;
// var intervalId;
var correct = 0;
var incorrect = 0;
let countdown;
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
    question: "What is the most common cause of a Tsunami?",
    correctAnswer: "Underwater earthquake",
    answers: ["Underwater volcano eruption", "An iceberg calving", "A meteorite striking the ocean", "Underwater earthquake"]
    }
];

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
        // use for loop to dynamically generate 4 answer buttons, and then .append them 
        for ( i = 0; i < 4; i++) {
            $("#game").append("<p><button class='btn'>" + questions[questionNumber].answers[i] + "</button></p>");
        };
        timer = 15;
        // set timer to 15 * 1000 -- setInterval for counting down, clearInterval if click
        countdown = setInterval(function(){
            $("#timer").text("Time Remaining: " + timer);
            timer -= 1;
            if (timer <= 0){
                clearInterval(countdown);
                $("#timer").text("Time's Up!");
                $("#question").text("The correct answer is " + questions[questionNumber].correctAnswer);
                $("#game").empty();
            }
        }, 1000); 
    }
};


$("#game").on( "click", "p", function() {
    console.log( $( this ).text() ); // delete this once game is working properly
    console.log(questions[questionNumber].correctAnswer) // these are ready to delete once clicks are recorded
    if ( this.textContent === questions[questionNumber].correctAnswer ) {
    $("#title").text("Success!");
        clockRunning = false;
        clearInterval(countdown);  // add boolean here? - second question timer decrements twice as fast(check class activities)
        $("#question").text("Perfect! " + questions[questionNumber].correctAnswer + " is correct.");
        correct++;
        $("#timer").empty();
        $("#game").empty();
        setTimeout(function() {
        questionNumber++;
        nextQuestion();
        }, 3 * 1000);
    } else if ( this.textContent !== questions[questionNumber].correctAnswer ) {
        $("#title").text("Incorrect!");
        clockRunning = false;
        clearInterval(countdown);
        $("#question").text("The correct answer is " + questions[questionNumber].correctAnswer);
        incorrect++;
        $("#timer").empty();
        $("#game").empty();
        setTimeout(function() {
        questionNumber++;
        nextQuestion();
        }, 3 * 1000);
    }
});
// }, 800)

// result of userChoice ---- checkAnswer() or result() - shows result, then timeout 2 seconds wipes screen, nextQuestion
// how to do that? store clicked button's text as userAnswer, compare that to object.correctAnswer 
// if user clicks incorrect answer button, show correct answer; setTimeout 3 * 1000 nextQuestion()
// if user clicks correct answer button, show great work; setTimeout 3 * 1000 nextQuestion()
  
// More functions possibly for thatsRight() and thatsWrong() and timeUp()
// add more questions! 
// add logic for the end of the game

// function gameEnd() {
//     $("#question").text("How'd you do?");
// }

// function restart() {
//     clear all variables and divs 
//     create restart button 
//     click handler starts the game over
// }

})


// NEW QUESTIONS

// Q 90% of the world's earthquakes occur where? A Circum Pacific Belt OTHERS: Alpide Belt, San Andreas Fault, Mariana Trench
// Q Which of these is *not* a recognized type of drought? A Temporal Drought  Others: Meteorological drought, Hydrological drought, Agricultural drought     
// Q What event was happening when the Loma Prieta earthquake occurred? A 1989 World Series OTHERS: Super Bowl XXIII, 1989 Stanley Cup Final, Apple release iPhone 1st gen     
// Q A 1946 Aleution Islands earthquake triggered a tsunami that resulted in deaths in Alaska and where else? A Hawaii OTHERS Vancouver, BC, Seattle, WA, Hilo, HI    
// Q From 2003 to 2005, swarms of desert locusts ravaged what region? A West Africa OTHERS Western China, Southwest United States, Middle East     
// Q The most earthquake-prone state in the U.S. is:  A Alaska OTHERS: California, Washington, Utah    
// Q Which of the following is true about the 2004 Indian Ocean Tsunami? A Many people in Indonesia reported that they saw animals fleeing for high ground minutes before the tsunami arrived – very few animal bodies were found afterward    OTHERS: make it up! earthquake force, etc
 
 // add 'detail' to each object with a fact about the correct answer?
 
 
 
 
 
 
 
