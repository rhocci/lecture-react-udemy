import Header from './components/Header.jsx';
import Quiz from './components/Quiz.jsx';
import Summary from './components/Summary.jsx';

function App() {
  return (
    <>
      <Header />
      <Quiz />
      <Summary userAnswers={[]} />
    </>
  );
}

export default App;
