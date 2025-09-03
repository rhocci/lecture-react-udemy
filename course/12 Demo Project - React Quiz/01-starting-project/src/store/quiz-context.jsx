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

  const updateQuestion = useCallback((selectedIndex) => {
    let status = undefined;

    if (
      !(activeQuestion.answers.indexOf(activeQuestion[selectedIndex]) === -1)
    ) {
      status =
        activeQuestion.answers[selectedIndex] === 0 ? 'correct' : 'wrong';
    }

    const userAnswer = {
      selected: activeQuestion.answers[selectedIndex],
      status,
    };
    setUserAnswers((prevAnswers) => [...prevAnswers, userAnswer]);
    setActiveQuestionIndex((prevQuestionIndex) => ++prevQuestionIndex);
    setAnswerIsSelected(false);
  });

  const ctxValue = {
    activeQuestionIndex,
    userAnswers,
    answerIsSelected,
    handleSelectAnswer: () => setAnswerIsSelected(true),
    updateQuestion,
  };

  return (
    <QuizContext.Provider value={ctxValue}>{children}</QuizContext.Provider>
  );
}
