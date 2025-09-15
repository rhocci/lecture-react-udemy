import { useContext } from 'react';
import { QuizContext } from '../store/quiz-context.jsx';
import ProgressBar from './ProgressBar.jsx';

export default function Question({ children }) {
  const { activeAnswerIndex, updateQuestion } = useContext(QuizContext);

  return (
    <div id="question">
      <ProgressBar
        allottedTime={activeAnswerIndex > -1 ? 3000 : 7000}
        updateQuestion={updateQuestion}
      />
      <p>{children}</p>
    </div>
  );
}
