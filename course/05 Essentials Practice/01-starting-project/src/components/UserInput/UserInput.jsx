import "./UserInput.css";

const initialValue = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

export default function UserInput({ onChange }) {
  const currentValue = Object.assign(initialValue);

  function handleUserInput(e) {
    currentValue[e.target.name] = +e.target.value;
    onChange(currentValue);
  }

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
