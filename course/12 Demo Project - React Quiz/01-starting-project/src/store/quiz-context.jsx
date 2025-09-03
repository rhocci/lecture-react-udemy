import { createContext, useState, useCallback } from 'react';
import QUESTIONS from '../questions.js';

export const QuizContext = createContext({
  activeQuestionIndex: 0,
  userAnswers: [],
  answerIsSelected: false,
  handleSelectAnswer: () => {},
  updateQuestion: () => {},
});

export default function QuizContextProvider({ children }) {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [answerIsSelected, setAnswerIsSelected] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestion = QUESTIONS[activeQuestionIndex];

  function handleSelectAnswer(selectedIndex) {
    const userAnswer = activeQuestion.answers[selectedIndex];

    setAnswerIsSelected(true);
    setUserAnswers((prevAnswers) => [...prevAnswers, userAnswer]);
  }

  const updateQuestion = useCallback(() => {
    setActiveQuestionIndex((prevQuestionIndex) => ++prevQuestionIndex);
  });

  const ctxValue = {
    activeQuestionIndex,
    userAnswers,
    answerIsSelected,
    handleSelectAnswer,
    updateQuestion,
  };

  return (
    <QuizContext.Provider value={ctxValue}>{children}</QuizContext.Provider>
  );
}
