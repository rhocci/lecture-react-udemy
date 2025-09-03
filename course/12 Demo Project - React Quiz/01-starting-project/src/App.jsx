import { useContext } from 'react';
import QuizContextProvider, { QuizContext } from './store/quiz-context.jsx';
import Header from './components/Header.jsx';
import Quiz from './components/Quiz.jsx';
import Summary from './components/Summary.jsx';

function App() {
  const { activeQuestionIndex } = useContext(QuizContext);

  return (
    <QuizContextProvider>
      <Header />
      {activeQuestionIndex > 7 ? <Summary /> : <Quiz />}
    </QuizContextProvider>
  );
}

export default App;
