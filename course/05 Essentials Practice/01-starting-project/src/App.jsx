import { useState } from "react";
import { calculateInvestmentResults } from "./util/investment.js";
import Header from "./components/Header/Header.jsx";
import UserInput from "./components/UserInput/UserInput.jsx";
import ResultTable from "./components/ResultTable/ResultTable.jsx";

const INITIAL_VALUE = {
  initialInvestment: 10000,
  annualInvestment: 5000,
  expectedReturn: 5,
  duration: 10,
};

function App() {
  const [currentValue, setCurrentValue] = useState(INITIAL_VALUE);
  const annualData = calculateInvestmentResults(currentValue);

  function handleUserInput(key, value) {
    setCurrentValue((prevValue) => {
      return { ...prevValue, [key]: value };
    });
  }

  return (
    <>
      <Header />
      <UserInput currentValue={currentValue} onInputChange={handleUserInput} />
      <ResultTable annualData={annualData} />
    </>
  );
}

export default App;
