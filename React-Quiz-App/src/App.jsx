import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [quiz, setQuiz] = useState([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    quizData();
  }, []);

  function quizData() {
    fetch("https://the-trivia-api.com/v2/questions")
      .then((data) => data.json())
      .then((data) => {
        const formattedData = data.map((q) => {
          const options = [...q.incorrectAnswers, q.correctAnswer];
          return { ...q, options };
        });
        setQuiz(formattedData);
      })
      .catch((err) => console.log(err));
  }

  function checkAnswer(answer) {
    setSelectedOption(answer);
    if (answer === quiz[index].correctAnswer) {
      setScore(score + 1);
    }
  }

  function nextQuestion() {
    if (index + 1 < quiz.length) {
      setIndex(index + 1);
      setSelectedOption(null);
    } else {
      setIsFinished(true);
    }
  }

  function restartQuiz() {
    setIndex(0);
    setScore(0);
    setIsFinished(false);
    setSelectedOption(null);
    quizData();
  }

  if (!quiz.length) {
    return (
      <div className="loading">
        <p>Loading questions...</p>
      </div>
    );
  }

  if (isFinished) {
    return (
      <div className="container">
        <div className="card">
          <h2>Quiz Completed </h2>
          <p>Your Score: {score} / {quiz.length}</p>
          <button className="btn" onClick={restartQuiz}>
            Restart Quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="card">
        <h2 className="title">Quiz App</h2>
        <p className="count">
          Question {index + 1} of {quiz.length}
        </p>
        <h3 className="question">{quiz[index].question.text}</h3>

        <div className="options">
          {quiz[index].options.map((opt, i) => (
            <button
              key={i}
              onClick={() => checkAnswer(opt)}
              className={`option ${selectedOption === opt ? "selected" : ""}`}
            >
              {opt}
            </button>
          ))}
        </div>

        <button className="btn" onClick={nextQuestion}>
          {index + 1 === quiz.length ? "Finish Quiz" : "Next Question"}
        </button>
      </div>
    </div>
  );
}

export default App;
