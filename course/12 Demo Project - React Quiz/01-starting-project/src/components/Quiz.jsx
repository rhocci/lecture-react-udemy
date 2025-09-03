import { useState } from 'react';
import QUESTIONS from '../questions.js';
import Question from './Question.jsx';
import Answers from './Answers.jsx';

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
      <Question>{activeQuestion}</Question>
      <Answers
        activeQuestion={activeQuestion}
        handleSelectAnswer={handleSelectAnswer}
      />
    </section>
  );
}
