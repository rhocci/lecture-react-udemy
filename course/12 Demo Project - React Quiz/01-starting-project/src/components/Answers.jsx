import { useContext } from 'react';
import { QuizContext } from '../store/quiz-context';
import QUESTIONS from '../questions.js';

export default function Answers() {
  const { activeQuestionIndex, activeAnswerIndex, handleSelectAnswer } =
    useContext(QuizContext);

  return (
    <ul id="answers">
      {QUESTIONS[activeQuestionIndex].answers.map((answer, index) => (
        <li key={index} className="answer">
          <button
            className={index === activeAnswerIndex ? 'selected' : undefined}
            onClick={() => {
              handleSelectAnswer(index);
            }}
          >
            {answer}
          </button>
        </li>
      ))}
    </ul>
  );
}
