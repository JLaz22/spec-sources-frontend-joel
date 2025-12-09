import { useState } from "react";

const QUESTIONS = [
  {
    question: "When did Karoline enroll into Columbia",
    options: ["2020", "2016", "2015", "2014"],
    answer: 2,
  },
  {
    question: "What grade was nick in when Karoline first got here?",
    options: ["3rd", "2nd", "4th", "12th"],
    answer: 2,
  },
  {
    question: "Which one of these artists did Karoline NOT see?",
    options: ["Rae Sremmurd", "Rick Ross", "A$AP Ferg", "Big Sean"],
    answer: 3,
  },
  {
    question: "What school is Caroline in?",
    options: ["Barnard", "SEAS", "CC", "GS"],
    answer: 3,
  },
  {
    question: "What NYC HS did Caroline attend?",
    options: [
      "Regis",
      "Bronx Science",
      "Bard High School Early College",
      "Eleanor Roosevelt High School",
    ],
    answer: 2,
  },
];

export default function QuizPage() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const current = QUESTIONS[index];

  const handleAnswer = (i) => {
    if (i === current.answer) setScore(score + 1);

    if (index + 1 < QUESTIONS.length) {
      setIndex(index + 1);
    } else {
      setFinished(true);
    }
  };

  // 🎯 Custom end messages
  const getEndingMessage = () => {
    switch (score) {
      case 5:
        return "Congrats, you are HoE... good luck with journalism";
      case 4:
        return "Congrats EM... chop chop, those bugs won't fix themselves";
      case 3:
        return "Congrats Senior Developer... make sure to be at the church on Sunday";
      case 2:
        return "Congrats Associate... good luck fixing Caroline's app";
      case 1:
        return "Trainee... Spec Sources won't complete itself";
      case 0:
        return "Don't even think about suing Spec";
      default:
        return "";
    }
  };

  // Final screen
  if (finished) {
    return (
      <div style={styles.page}>
        <h1 style={styles.title}>Quiz Complete</h1>
        <div style={styles.card}>
          <h2 style={styles.scoreText}>
            You scored {score} / {QUESTIONS.length}
          </h2>

          <p style={styles.endingMessage}>{getEndingMessage()}</p>

          <p style={styles.caption}>Thanks for participating!</p>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Spectator Quiz</h1>

      <div style={styles.card}>
        <h2 style={styles.questionNumber}>
          Question {index + 1} of {QUESTIONS.length}
        </h2>
        <h3 style={styles.question}>{current.question}</h3>

        <div style={{ marginTop: "20px" }}>
          {current.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(i)}
              style={styles.optionBtn}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

//
// Spectator-style UI
//
const styles = {
  page: {
    padding: "40px",
    maxWidth: "700px",
    margin: "0 auto",
    fontFamily: "'Georgia', serif",
  },

  title: {
    fontSize: "48px",
    color: "#79f1f5ff",
    fontWeight: "bold",
    marginBottom: "30px",
    borderBottom: "3px solid #95dcfaff",
    paddingBottom: "10px",
    textAlign: "center",
  },

  card: {
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  },

  questionNumber: {
    fontSize: "18px",
    color: "#666",
    marginBottom: "10px",
  },

  question: {
    fontSize: "26px",
    fontWeight: "600",
    marginBottom: "20px",
    lineHeight: "1.4",
  },

  optionBtn: {
    width: "100%",
    padding: "14px",
    margin: "10px 0",
    fontSize: "18px",
    textAlign: "left",
    backgroundColor: "#f7f7f7",
    border: "1px solid #ccc",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "all 0.2s ease",
  },

  scoreText: {
    fontSize: "32px",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: "12px",
  },

  caption: {
    textAlign: "center",
    color: "#555",
    fontSize: "18px",
    marginTop: "10px",
  },

  endingMessage: {
    textAlign: "center",
    fontSize: "22px",
    fontWeight: "600",
    color: "#333",
    margin: "20px 0",
    padding: "10px",
  },
};
