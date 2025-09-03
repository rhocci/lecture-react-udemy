import completeImg from '../assets/quiz-complete.png';

export default function Summary({ userAnswers }) {
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
            <p className="question"></p>
            <p
              className={`user-answer ${answer.correct ? 'correct' : 'wrong'}`}
            >
              {answer.selected}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
