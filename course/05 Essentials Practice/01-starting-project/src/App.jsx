import { useState } from "react";
import { calculateInvestmentResults } from "./util/investment.js";
import Header from "./components/Header/Header.jsx";
import UserInput from "./components/UserInput/UserInput.jsx";
import ResultTable from "./components/ResultTable/ResultTable.jsx";

const initialValue = {
  initialInvestment: 10000,
  annualInvestment: 5000,
  expectedReturn: 5,
  duration: 10,
};

function App() {
  const [currentValue, setCurrentValue] = useState(initialValue);
  const { initialInvestment, annualInvestment, expectedReturn, duration } =
    currentValue;
  const annualData = calculateInvestmentResults(currentValue);
  const investedCapital = initialInvestment + annualInvestment * duration;
  const yearInterest = annualInvestment * expectedReturn;

  return (
    <>
      <Header />
      <UserInput
        currentValue={currentValue}
        onInputChange={(inputValue) => setCurrentValue(inputValue)}
      />
      <ResultTable
        investedCapital={investedCapital}
        yearInterest={yearInterest}
        annualData={annualData}
      />
    </>
  );
}

export default App;
