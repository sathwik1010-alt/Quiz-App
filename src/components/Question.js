import React, { useState } from "react";

function Question({ data, onAnswer }) {
  const [selected, setSelected] = useState(null);
  const [locked, setLocked] = useState(false);

  const handleClick = (option) => {
    if (locked) return;
    setSelected(option);
    setLocked(true);
    const isCorrect = option === data.answer;
    setTimeout(() => onAnswer(isCorrect), 800);
  };

  return (
    <div className="question-box">
      <h3>{data.question}</h3>
      <div className="options">
        {data.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleClick(option)}
            className={
              locked
                ? option === data.answer
                  ? "correct"
                  : option === selected
                  ? "wrong"
                  : ""
                : ""
            }
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;