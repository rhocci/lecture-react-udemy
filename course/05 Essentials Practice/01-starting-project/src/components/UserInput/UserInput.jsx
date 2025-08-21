import "./UserInput.css";

export default function UserInput({ currentValue, onInputChange }) {
  return (
    <form id="user-input">
      <div className="input-group">
        {Object.entries(currentValue).map((data) => {
          const [key, value] = data;

          return (
            <label key={key}>
              {key.replace(/([A-Z])/g, " $1").toUpperCase()}
              <input
                type="number"
                name={key}
                value={value}
                onChange={(e) => onInputChange(key, +e.target.value)}
              />
            </label>
          );
        })}
      </div>
    </form>
  );
}
