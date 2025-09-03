import { useState } from 'react';
import QUESTIONS from '../questions.js';

export default function Quiz() {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestion = QUESTIONS[activeQuestionIndex];

  function handleSelectAnswer(selectedIndex) {
    const userAnswer = {
      selected: activeQuestion.answers[selectedIndex],
      // 답 데이터가 없음..
      correct: false,
    };

    setUserAnswers((prevAnswers) => [...prevAnswers, userAnswer]);
    setActiveQuestionIndex((prevQuestionIndex) => ++prevQuestionIndex);
  }

  return (
    <section id="quiz">
      <div id="question">
        <progress />
        <p>{activeQuestion.text}</p>
      </div>
      <ul id="answers">
        {activeQuestion.answers.map((answer, index) => {
          return (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(index)}>
                {answer}
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
