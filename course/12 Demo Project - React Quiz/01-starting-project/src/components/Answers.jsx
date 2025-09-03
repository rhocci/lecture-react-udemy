export default function Answers({ activeQuestion, handleSelectAnswer }) {
  return (
    <ul id="answers">
      {activeQuestion.answers.map((answer, index) => (
        <li key={index} className="answer">
          <button onClick={() => handleSelectAnswer(index)}>{answer}</button>
        </li>
      ))}
    </ul>
  );
}
