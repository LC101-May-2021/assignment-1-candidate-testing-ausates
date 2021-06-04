const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "";
let correctAnswer = "";
let candidateAnswer = "";
let questions = ['Who was the first American woman in space? ', "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 =? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the maximum crew size for the ISS (type a number): "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("What is your name: ")
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

  for (i=0; i < questions.length; i++) {
    question = input.question(`${questions[i]}`);
    candidateAnswer = question;
    candidateAnswer = candidateAnswer.toLowerCase();
    candidateAnswers.push(candidateAnswer)
    correctAnswer = correctAnswers[i];
  //   if (candidateAnswer === correctAnswer) {
  //   console.log("Excellent, you are so right and so smart!");
  // } else if (candidateAnswer !== correctAnswer) {
  //   console.log("Sad day... you were... wRoNg.");
  // };

    // // this part tests for spaces in the answer
    // spaceInAnswer = false;
    // if (candidateAnswer.indexOf(' ') >= 0) {
    //   spaceInAnswer = true;
    // }
    // I originally capitalized answers for comparison
    // Now, I just lower case everything.


    // if (spaceInAnswer === true) {
    //   words = candidateAnswer.split(" ");
    //   firstAnswer = words[0].charAt(0).toUpperCase() + words[0].slice(1).toLowerCase();
    //   lastAnswer = words[1].charAt(0).toUpperCase() + words[1].slice(1).toLowerCase();
    //   candidateAnswer = firstAnswer + " " + lastAnswer;
    // }
    
  }
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  let grade = 0;
  for (let i = 0; i < correctAnswers.length; i++) {
    if (candidateAnswers[i] === correctAnswers[i]){
      grade++;
    }
  }
  grade = grade*20;

  console.log(`Candidate Name: ${candidateName}`);
  for (i=0; i<correctAnswers.length; i++){
    console.log(`${i + 1}) ${questions[i]}`);
    console.log(`Your Answer: ${candidateAnswers[i]}`);
    console.log(`Correct Answer: ${correctAnswers[i]}`)
  }

  console.log(`>>> Overall grade: ${grade}%. <<<`);

  if (grade >= 80){
   console.log('>>> Status: PASSED <<<');
  } else if (grade < 80) {
    console.log('>>> status: FAILED <<<');
  }

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  let spaceInName;
  if (candidateName.indexOf(' ') >= 0) {
    spaceInName = true;
  }
  // this part capitalizes the first letter of each word
  // it also lower cases the rest of each word
  // This is to properly capitalize the name.
  if (spaceInName) {
    words = candidateName.split(" ");
    firstName = words[0].charAt(0).toUpperCase() + words[0].slice(1).toLowerCase();
    lastName = words[1].charAt(0).toUpperCase() + words[1].slice(1).toLowerCase();
    candidateName = firstName + " " + lastName;
  }
  console.log("Howdy, " + candidateName + ", let's do a quiz.")
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