import { useState } from "react";
import { calculateInvestmentResults } from "./util/investment.js";
import Header from "./components/Header/Header.jsx";
import UserInput from "./components/UserInput/UserInput.jsx";
import ResultTable from "./components/ResultTable/ResultTable.jsx";

function App() {
  const [currentData, setCurrentData] = useState([]);
  const [annualData, setAnnualData] = useState([]);

  function handleUserInput(currentValue) {
    setCurrentData((prevData) => {
      const updatedData = [...prevData, currentValue];
      return updatedData;
    });

    setAnnualData(calculateInvestmentResults(currentData));
  }

  return (
    <>
      <Header />
      <UserInput onChange={handleUserInput} />
      <ResultTable currentData={currentData} annualData={annualData} />
    </>
  );
}

export default App;
