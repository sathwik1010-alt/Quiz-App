import React from "react";

function Result({ score, onRestart }) {
  const message =
    score === 3
      ? "Excellent! You got all correct."
      : score === 2
      ? "Great! You got 2 correct."
      : score === 1
      ? "Good! You got 1 correct."
      : "Oops! Try again to improve your score.";

  return (
    <div className="result-box">
      <h2>Quiz Completed!</h2>
      <h3>Your Score: {score} / 3</h3>
      <p>{message}</p>
      <button onClick={onRestart}>Restart Quiz</button>
    </div>
  );
}

export default Result;