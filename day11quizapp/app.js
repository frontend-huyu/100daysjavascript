// basic logic
// show question, count score, check state(end or not)
class Quiz {
  constructor(questions) {
    // questions is [{}]
    this.questions = questions;
    this.score = 0;
    this.questionIndex = 0;
  }

  // get current question
  getQuestion() {
    return this.questions[this.questionIndex];
  }

  // count score, and move on next question
  guessAnswer(userAnswer) {
    // isCorrectAnswer is another class method
    if (this.getQuestion().isCorrectAnswer(userAnswer)) {
      this.score++;
    }
    this.questionIndex++;
  }

  // confirm if question is end
  // NOTE: questionIndex will still add 1, when it is the end of questions
  isEnded() {
    return this.questionIndex === this.questions.length;
  }
}

// make question an object, and confirm user's answer
// we need text, choices, answer
class QuestionContent {
  constructor(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }

  // confirm choice with answer
  isCorrectAnswer(choice) {
    return this.answer === choice;
  }
}

let questions = [
  new QuestionContent(
    'Hyper Text Markup Language Stands For?',
    ['JQuery', 'XHTML', 'CSS', 'HTML'],
    'HTML'
  ),
  new QuestionContent(
    'Cascading Style sheet stands for?',
    ['HTML', 'JQuery', 'CSS', 'XML'],
    'CSS'
  ),
  new QuestionContent(
    'Which is a JavaScript Framework?',
    ['React', 'Laravel', 'Django', 'Sass'],
    'React'
  ),
  new QuestionContent(
    'Which is a backend language?',
    ['PHP', 'HTML', 'React', 'All'],
    'PHP'
  ),
  new QuestionContent(
    'Which is best for Artificial intelligence?',
    ['React', 'Laravel', 'Python', 'Sass'],
    'Python'
  ),
];

// INITIALIZE quiz
let quiz = new Quiz(questions);

// display question
function displayQuestion() {
  if (quiz.isEnded()) {
    // end the question game
    showScores();
  } else {
    // show question
    let questionElement = document.getElementById('question');
    // take question text from Question instance object
    questionElement.textContent = quiz.getQuestion().text;

    // show options
    // quiz.getQuestionIndex().choices is an array
    let choices = quiz.getQuestion().choices;
    for (let i = 0; i < choices.length; i++) {
      let choiceElement = document.getElementById(`choice${i}`);
      choiceElement.textContent = choices[i];
      // add every choice element an click event to confirm their choice is correct or not
      addOnClick(`btn${i}`, choices[i]);
    }
    // move on next question
    showProgress();
  }
}

// the event for confirming user answer and the correct answer
function addOnClick(id, userAnswer) {
  let button = document.getElementById(id);
  button.onclick = () => {
    // confirm answer
    quiz.guessAnswer(userAnswer);
    // move on next question or end the question
    displayQuestion();
  };
}

function showScores() {
  // put new content into quiz div
  let quizElement = document.getElementById('quiz');
  let quizEndHTML = `
  <h1>Quiz Completed</h1>
    <h2 id='score'> Your scored: ${quiz.score} of ${quiz.questions.length}</h2>
    <div class="quiz-repeat">
        <a href="index.html">Take Quiz Again</a>
    </div>
  `.trim();
  quizElement.innerHTML = quizEndHTML;
}

function showProgress() {
  let currentQuestionNumber = quiz.questionIndex + 1;
  let progressElement = document.getElementById('progress');
  progressElement.textContent = `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
}

// display questions
displayQuestion();

// add a countdown
let time = 10;
// all of the seconds
let quizTime = time * 60;

let countDown = document.getElementById('count-down');
function startCountDown() {
  countDown.textContent = `TIME: ${time} : 00`;
  let quizTimer = setInterval(() => {
    if (quizTime <= 0) {
      // if timeout, clear the previous setInterval()
      clearInterval(quizTimer);
      showScores();
    } else {
      quizTime--;
      let sec = Math.floor(quizTime % 60);
      let min = Math.floor(quizTime / 60) % 60;
      if (sec < 10 && min < 10) {
        countDown.textContent = `TIME: 0${min} : 0${sec}`;
      } else if (sec < 10) {
        countDown.textContent = `TIME: ${min} : 0${sec}`;
      } else if (min < 10) {
        countDown.textContent = `TIME: 0${min} : ${sec}`;
      }
    }
  }, 1000);
}

startCountDown();
