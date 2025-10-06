// Each category now has at least 3 questions
const questions = {
  Science: [
    {
      question: "What planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      answer: "Mars",
    },
    {
      question: "What gas do plants release during photosynthesis?",
      options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
      answer: "Oxygen",
    },
    {
      question: "What is the chemical symbol for water?",
      options: ["H2O", "CO2", "O2", "NaCl"],
      answer: "H2O",
    },
  ],
  Technology: [
    {
      question: "What does HTML stand for?",
      options: [
        "HyperText Markup Language",
        "HyperText Markdown Language",
        "Home Tool Markup Language",
        "Hyper Transfer Markup Language",
      ],
      answer: "HyperText Markup Language",
    },
    {
      question: "What is the brain of the computer?",
      options: ["RAM", "CPU", "GPU", "SSD"],
      answer: "CPU",
    },
    {
      question: "Which language is used for styling web pages?",
      options: ["HTML", "JQuery", "CSS", "XML"],
      answer: "CSS",
    },
  ],
  Sports: [
    {
      question: "How many players are there in a soccer team?",
      options: ["9", "10", "11", "12"],
      answer: "11",
    },
    {
      question: "Which sport is known as the 'king of sports'?",
      options: ["Cricket", "Tennis", "Football", "Basketball"],
      answer: "Football",
    },
    {
      question: "Which sport uses a shuttlecock?",
      options: ["Tennis", "Badminton", "Squash", "Table Tennis"],
      answer: "Badminton",
    },
  ],
};

export default questions;