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

function validateInput(currentValue) {
  let invalidMessage = null;

  if (
    !Object.values(currentValue).every(
      (v) => typeof v === "number" && Number.isFinite(v)
    )
  ) {
    invalidMessage = "Invalid Input Value! Please input Numbers.";
  } else if (currentValue.duration < 1) {
    invalidMessage = "Invalid Duration! (Minimum Value: 1)";
  }

  return invalidMessage;
}

function App() {
  const [currentValue, setCurrentValue] = useState(INITIAL_VALUE);
  const annualData = calculateInvestmentResults(currentValue);
  const invalidMessage = validateInput(currentValue);

  function handleUserInput(key, value) {
    setCurrentValue((prevValue) => {
      return { ...prevValue, [key]: value };
    });
  }

  return (
    <>
      <Header />
      <UserInput currentValue={currentValue} onInputChange={handleUserInput} />
      {invalidMessage ? (
        <p className="center">{invalidMessage}</p>
      ) : (
        <ResultTable annualData={annualData} />
      )}
    </>
  );
}

export default App;
