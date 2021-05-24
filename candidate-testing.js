const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question;
let correctAnswer;
let candidateAnswer;
let questions;
let correctAnswers;
let candidateAnswers;


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("What is your name: ")
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  question = input.question('Who was the first American woman in space? ');
  candidateAnswer = question;
  candidateAnswer = candidateAnswer.toLowerCase();
  // this part tests for spaces in the answer
  spaceInAnswer = false;
  if (candidateAnswer.indexOf(' ') >= 0) {
    spaceInAnswer = true;
  }
  // this part capitalizes the first letter of each word
  // it also lower cases the rest of each word
  // this is to ensure improper capitalization doesn't cause
  // an "incorrect answer".
  if (spaceInAnswer === true) {
    words = candidateAnswer.split(" ");
    firstName = words[0].charAt(0).toUpperCase() + words[0].slice(1).toLowerCase();
    lastName = words[1].charAt(0).toUpperCase() + words[1].slice(1).toLowerCase();
    candidateAnswer = firstName + " " + lastName;
  }
  correctAnswer = "Sally Ride";
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

  let grade;

  if (candidateAnswer === correctAnswer) {
    console.log("Excellent, you are so right and so smart!")
    grade = true;
    return grade;
  } else if (candidateAnswer !== correctAnswer) {
    console.log("Sad day... you were... wRoNg.")
    grade = false;
    return grade;
  }

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("Howdy, " + candidateName.charAt(0).toUpperCase() + candidateName.slice(1).toLowerCase() + ", let's do a quiz.")
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};