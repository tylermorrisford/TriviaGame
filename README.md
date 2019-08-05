# Disaster Trivia
An incredibly difficult trivia game using jQuery and timed events!

## Index
1. How it works
2. Game Instructions
3. User Feedback

# 1 How it works
When the page finishes loading, several variables are created, along with game questions. These questions are constructed as objects in an array, and the answers are an array of strings. The pink elephant study group affectionately refers to this construction as the 'array turducken'. It's only important to note because the nested construction makes accessing the data very easy. 

A document.keypress function calls a function that begins the game by dynamically creating the next(first) question, including buttons containing the answers to the question, and is re-used to create the elements/buttons for subsequent guestions. It also sets a boolean to true, assisting in the management of the game state.

A setinterval function is used to add a timer for each question, and an if statement handles the scenario where the user runs out of time before selecting an answer.

A .on("click" function binds to the dynamically created buttons and compares the users answer to the question object's correct answer using dot notation. The users score is calculated without being shown on the page until the gameEnd function is called, when the game question variable communicates that there are no more questions. This gameEnd function also displays the user's results and calculates a very round percentage, being that there are 10 questions, and creates a button with which the user may restart the game. A questionAdvance function assists in seperating logic from the main nextQuestion function and with refactoring the code.

# 2 Game Instructions
This game is very simple and thus pretty straightforward. Press any key to start the game, and then you're on the clock - you've got fifteen seconds to answer each question. The questions are... difficult; unless you're a seismologist. Play the game at https://tylermorrisford.github.io/TriviaGame/

# 3 User Feedback
To date, three external users have played the game and each got only two of the ten questions correctly. 

