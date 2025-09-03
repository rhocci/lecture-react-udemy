import { createContext, useState, useCallback } from 'react';
import QUESTIONS from '../questions.js';

export const QuizContext = createContext({
  activeQuestionIndex: 0,
  userAnswers: [],
  activeAnswerIndex: -1,
  handleSelectAnswer: () => {},
  updateQuestion: () => {},
});

export default function QuizContextProvider({ children }) {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [activeAnswerIndex, setActiveAnswerIndex] = useState(-1);
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestion = QUESTIONS[activeQuestionIndex];

  function handleSelectAnswer(index) {
    setActiveAnswerIndex(index);
  }

  const updateQuestion = useCallback((index) => {
    let status = undefined;

    if (!(activeAnswerIndex === -1)) {
      status = activeQuestion.answers[index] === 0 ? 'correct' : 'wrong';
    }

    const userAnswer = {
      selected: activeQuestion.answers[index],
      status,
    };
    setUserAnswers((prevAnswers) => [...prevAnswers, userAnswer]);
    setActiveQuestionIndex((prevQuestionIndex) => ++prevQuestionIndex);
    setActiveAnswerIndex(-1);
  });

  const ctxValue = {
    activeQuestionIndex,
    userAnswers,
    activeAnswerIndex,
    handleSelectAnswer,
    updateQuestion,
  };

  return (
    <QuizContext.Provider value={ctxValue}>{children}</QuizContext.Provider>
  );
}
