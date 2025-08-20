import './UserInput.css';

const initialValue = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

export default function UserInput({ onChange }) {
  return (
    <form id="user-input">
      <div className="input-group">
        <label>
          INITIAL INVESTMENT
          <input
            type="number"
            name="initialInvestment"
            onChange={(e) =>
              onChange({ ...initialValue, initialInvestment: e.target.value })
            }
          />
        </label>
        <label>
          ANNUAL INVESTMENT
          <input
            type="number"
            name="annualInvestment"
            onChange={(e) =>
              onChange({ ...initialValue, annualInvestment: e.target.value })
            }
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          EXPECTED RETURN
          <input
            type="number"
            name="expectedReturn"
            onChange={(e) =>
              onChange({ ...initialValue, expectedReturn: e.target.value })
            }
          />
        </label>
        <label>
          DURATION
          <input
            type="number"
            name="duration"
            onChange={(e) =>
              onChange({ ...initialValue, duration: e.target.value })
            }
          />
        </label>
      </div>
    </form>
  );
}
