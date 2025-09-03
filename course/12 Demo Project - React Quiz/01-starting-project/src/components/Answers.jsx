import { useContext } from 'react';
import { QuizContext } from '../store/quiz-context';
import QUESTIONS from '../questions.js';

export default function Answers() {
  const { activeQuestionIndex, answerIsSelected, handleSelectAnswer } =
    useContext(QuizContext);

  return (
    <ul id="answers">
      {QUESTIONS[activeQuestionIndex].answers.map((answer, index) => (
        <li key={index} className="answer">
          <button
            onClick={(e) => {
              handleSelectAnswer(index);
              if (answerIsSelected) e.target.classList.add('selected');
            }}
          >
            {answer}
          </button>
        </li>
      ))}
    </ul>
  );
}
