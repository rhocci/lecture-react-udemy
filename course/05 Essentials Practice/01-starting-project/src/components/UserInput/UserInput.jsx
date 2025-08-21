import { useState } from "react";
import "./UserInput.css";

const initialValue = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

export default function UserInput({ onChange }) {
  const [currentValue, setCurrentValue] = useState(initialValue);

  const handleUserInput = (e) => {
    const updatedValue = { ...initialValue, [e.target.name]: +e.target.value };

    setCurrentValue(updatedValue);
    onChange(currentValue);
  };

  return (
    <form id="user-input">
      <div className="input-group">
        {Object.entries(currentValue).map((v) => {
          const key = v[0];

          return (
            <label key={key}>
              {key.toUpperCase()}
              <input
                type="number"
                name={key}
                value={currentValue[key]}
                onChange={handleUserInput}
              />
            </label>
          );
        })}
      </div>
    </form>
  );
}
