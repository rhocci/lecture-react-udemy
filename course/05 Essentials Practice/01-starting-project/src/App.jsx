import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import UserInput from "./components/UserInput/UserInput.jsx";
import { setDate } from "date-fns";

function App() {
  const [currentData, setCurrentData] = useState([]);

  function handleUserInput(currentValue) {
    setCurrentData((prevData) => {
      const updatedData = [...prevData, currentValue];

      console.log(updatedData);

      return updatedData;
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
