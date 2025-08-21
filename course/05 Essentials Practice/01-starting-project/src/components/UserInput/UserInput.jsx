import { useState } from "react";
import "./UserInput.css";

export default function UserInput({ currentValue, onInputChange }) {
  const [inputValue, setInputValue] = useState(currentValue);

  function handleUserInput(name, value) {
    setInputValue((prevValue) => {
      const updatedValue = { ...prevValue, [name]: value };
      return updatedValue;
    });

    onInputChange(inputValue);
  }

  return (
    <form id="user-input">
      <div className="input-group">
        {Object.entries(inputValue).map((data) => {
          const key = data[0];

          return (
            <label key={key}>
              {key.toUpperCase()}
              <input
                type="number"
                name={key}
                value={inputValue[key]}
                onChange={(e) => handleUserInput(key, +e.target.value)}
              />
            </label>
          );
        })}
      </div>
    </form>
  );
}
