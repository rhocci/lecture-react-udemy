import { useContext } from 'react';
import { QuizContext } from '../store/quiz-context.jsx';
import ProgressBar from './ProgressBar.jsx';

export default function Question({ children }) {
  const { answerIsSelected, updateQuestion } = useContext(QuizContext);

  return (
    <div id="question">
      <ProgressBar
        allottedTime={answerIsSelected ? 3000 : 7000}
        updateQuestion={updateQuestion}
      />
      <p>{children.text}</p>
    </div>
  );
}
