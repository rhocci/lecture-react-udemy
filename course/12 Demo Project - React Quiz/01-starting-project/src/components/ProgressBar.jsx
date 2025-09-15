import { useContext, useEffect, useState } from 'react';
import { QuizContext } from '../store/quiz-context';

export default function ProgressBar({ allottedTime, updateQuestion }) {
  const { activeQuestionIndex, activeAnswerIndex } = useContext(QuizContext);
  const [remainingTime, setRemainingTime] = useState(allottedTime);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateQuestion(activeAnswerIndex);
    }, allottedTime);

    return () => {
      clearTimeout(timer);
      setRemainingTime(allottedTime);
    };
  }, [allottedTime, activeQuestionIndex, activeAnswerIndex, updateQuestion]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, [allottedTime]);

  return <progress value={remainingTime} max={allottedTime} />;
}
