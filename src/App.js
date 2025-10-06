import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CategorySelect from "./components/CategorySelect";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import "./App.css";

function App() {
  const [stage, setStage] = useState("category");
  const [category, setCategory] = useState("");
  const [score, setScore] = useState(0);

  const startQuiz = (selectedCategory) => {
    setCategory(selectedCategory);
    setStage("quiz");
  };

  const finishQuiz = (finalScore) => {
    setScore(finalScore);
    setStage("result");
  };

  const restartQuiz = () => {
    setStage("category");
    setScore(0);
    setCategory("");
  };

  return (
    <div className="App">
      <Header />
      {stage === "category" && <CategorySelect onStart={startQuiz} />}
      {stage === "quiz" && <Quiz category={category} onFinish={finishQuiz} />}
      {stage === "result" && <Result score={score} onRestart={restartQuiz} />}
      <Footer />
    </div>
  );
}

export default App;