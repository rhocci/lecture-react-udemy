import { useState } from 'react';
import Header from './components/Header/Header.jsx';
import UserInput from './components/UserInput/UserInput.jsx';

function App() {
  const [result, setResult] = useState([]);

  function handleUserInput({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  }) {
    setResult((prevResult) => {
      const updatedResult = [
        ...prevResult,
        { initialInvestment, annualInvestment, expectedReturn, duration },
      ];

      return updatedResult;
    });
  }

  return (
    <>
      <Header />
      <UserInput onChange={handleUserInput} />
    </>
  );
}

export default App;
