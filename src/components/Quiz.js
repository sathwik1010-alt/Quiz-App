import React, { useState } from "react";
import questions from "../data/questions";
import Question from "./Question";

function Quiz({ category, onFinish }) {
  const quizQuestions = questions[category];
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (isCorrect) => {
    const updatedScore = isCorrect ? score + 1 : score;
    setScore(updatedScore);

    const next = current + 1;

    // End quiz after 3 questions
    if (next < 3) {
      setCurrent(next);
    } else {
      setTimeout(() => onFinish(updatedScore), 300);
    }
  };

  return (
    <div>
      <h2>{category} Quiz</h2>
      <p>
        Question {current + 1} / 3
      </p>
      <progress
        value={current + 1}
        max={3}
        style={{ width: "80%", height: "10px" }}
      />
      <Question key={current} data={quizQuestions[current]} onAnswer={handleAnswer} />
    </div>
  );
}

export default Quiz;