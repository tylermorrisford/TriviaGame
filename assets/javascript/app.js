$(document).ready(function () {
    // create necessary variables
    var timer = 0;
    var questionNumber = 0;
    var clockRunning = false;
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
        },
        {
            question: "90% of the world's earthquakes occur where?",
            correctAnswer: "Circum Pacific Belt",
            answers: ["Alpide Belt", "San Andreas Fault", "Circum Pacific Belt", "Mariana Trench"]
        },
        {
            question: "Which of the following is *not* a recognized type of drought?",
            correctAnswer: "Temporal drought",
            answers: ["Meteorological drought", "Temporal drought", "Hydrological drought", "Agricultural drought"]
        },
        {
            question: "What event was happening when the Loma Prieta earthquake occurred?",
            correctAnswer: "1989 World Series",
            answers: ["1989 World Series", "Apple's release of 1st iPhone", "Super Bowl XXIII", "1989 Stanley Cup Final"]
        },
        {
            question: "A 1946 Aleution Islands earthquake triggered a tsunami that resulted in deaths in Alaska and where else?",
            correctAnswer: "Hilo, HI",
            answers: ["Vancouver, BC", "San Francisco, CA", "Seattle, WA", "Hilo, HI"]
        },
        {
            question: "From 2003 to 2005, swarms of desert locusts ravaged what region?",
            correctAnswer: "West Africa",
            answers: ["West Africa", "Western China", "Middle East", "Southwest United States"]
        },
        {
            question: "Which U.S. state is the most earthquake-prone?",
            correctAnswer: "Alaska",
            answers: ["California", "Alaska", "Utah", "Washington"]
        },
        {
            question: "Which of the following is true about the 2004 Indian Ocean Tsunami?",
            correctAnswer: "Animals were seen fleeing for high ground before the tsunami arrived",
            answers: ["The rupture was more than 900 miles long", "Planes scrambled to takeoff before the tsunami arrives", "Animals were seen fleeing for high ground before the tsunami arrived", "The tsunami resulted in at least 527,898 fatalities"]
        }
    ];

    // when users presses a key, start game
    $(document).keypress(function () {
        nextQuestion();
    });


    function nextQuestion() {
        if (questionNumber === 10) {
            $("#title").text("How'd you do?");
            gameEnd();
        }
        if (!clockRunning) {
            clockRunning = true;
            // change title to show current question number
            $("#title").text("Question #" + (questionNumber + 1));
            // change #question to show question1
            $("#question").text(questions[questionNumber].question);
            // use for loop to dynamically generate 4 answer buttons, and then .append them 
            $("#timer").text("Time Remaining: ");
            for (i = 0; i < 4; i++) {
                $("#game").append("<p><button class='btn'>" + questions[questionNumber].answers[i] + "</button></p>");
            };
            timer = 15;
            countdown = setInterval(function () {
                $("#timer").text("Time Remaining: " + timer);
                timer -= 1;
                if (timer === 0) {
                    $('body').addClass("time-up");
                    setTimeout(function () {
                        $('body').removeClass("time-up");
                    }, 200);
                    clockRunning = false;
                    clearInterval(countdown);
                    $("#timer").text("Time's Up!");
                    $("#question").text("The correct answer is " + questions[questionNumber].correctAnswer);
                    $("#game").empty();
                    questionAdvance();
                }
            }, 1000);
        }
    };


    $("#game").on("click", "p", function () {
        if (this.textContent === questions[questionNumber].correctAnswer) {
            $("#title").text("Success!");
            clockRunning = false;
            clearInterval(countdown);
            $("#question").text(questions[questionNumber].correctAnswer + " is correct.");
            correct++;
            $("#timer").text("* * *");
            $("#game").empty();
            questionAdvance();
        } else if (this.textContent !== questions[questionNumber].correctAnswer) {
            $("#title").text("Incorrect!");
            clockRunning = false;
            clearInterval(countdown);
            $("#question").text("The correct answer is " + questions[questionNumber].correctAnswer);
            incorrect++;
            $("#timer").text("* * *");
            $("#game").empty();
            questionAdvance();
        }
    });


    function gameEnd() {
        clockRunning = false;
        clearInterval(countdown);
        $("#title").text("How'd you do?");
        $("#question").text("You answered " + correct + " questions correctly, out of 10.");
        var percent = (correct / 10) * 100;
        $("#timer").text("Your percentage: " + percent + "%");
        $("#game").append("<button class='btn'>click to restart</button>");
        $("#game").on("click", "button", function () {
            restart();
        })
    }

    function restart() {
        $("#title").empty();
        $("#question").empty();
        $("#timer").empty();
        $("#game").empty();
        questionNumber = 0;
        correct = 0;
        incorrect = 0;
        nextQuestion(); // Seems like the logic breaks on the second iteration of the game
    }

    function questionAdvance() {
        setTimeout(function () {
            questionNumber++;
            if (questionNumber === 10) {
                $("#title").text("How'd you do?");
                gameEnd();
            } else {
                nextQuestion();
            }
        }, 3 * 1000);
    }

})