import { useContext, useEffect, useState } from 'react';
import { QuizContext } from '../store/quiz-context';

export default function ProgressBar({ allottedTime, updateQuestion }) {
  const { activeQuestionIndex, activeAnswerIndex } = useContext(QuizContext);
  const [remainingTime, setRemainingTime] = useState(allottedTime);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateQuestion();
    }, allottedTime);

    return () => {
      clearTimeout(timer);
    };
  }, [activeQuestionIndex, activeAnswerIndex, updateQuestion]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => (prevTime -= 10));
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress value={remainingTime} max={5000} />;
}
