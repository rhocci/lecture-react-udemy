import { useContext } from 'react';
import completeImg from '../assets/quiz-complete.png';
import QUESTIONS from '../questions.js';
import { QuizContext } from '../store/quiz-context.jsx';

export default function Summary() {
  const { userAnswers } = useContext(QuizContext);

  return (
    <section id="summary">
      <img src={completeImg} alt="Winning Trophy" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{0}%</span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">{0}%</span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">{0}%</span>
          <span className="text">Skipped</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => (
          <li key={index}>
            <h3>{index}</h3>
            <p className="question">{QUESTIONS[index].text}</p>
            <p className={`user-answer ${true ? 'correct' : 'wrong'}`}>
              {answer}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
