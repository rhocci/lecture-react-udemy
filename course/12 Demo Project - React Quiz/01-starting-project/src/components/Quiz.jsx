import { useContext } from 'react';
import Question from './Question.jsx';
import Answers from './Answers.jsx';
import QUESTIONS from '../questions.js';
import { QuizContext } from '../store/quiz-context.jsx';

export default function Quiz() {
  const { activeQuestionIndex } = useContext(QuizContext);

  return (
    <section id="quiz">
      <Question>{QUESTIONS[activeQuestionIndex].text}</Question>
      <Answers />
    </section>
  );
}
