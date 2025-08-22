import {
  calculateInvestmentResults,
  formatter,
} from '../../util/investment.js';
import './ResultTable.css';

export default function ResultTable({ currentValue }) {
  const annualData = calculateInvestmentResults(currentValue);
  const initialInvestment =
    annualData[0].valueEndOfYear -
    annualData[0].interest -
    annualData[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest </th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {annualData.map((data) => {
          const totalInterest =
            data.valueEndOfYear -
            data.annualInvestment * data.year -
            initialInvestment;
          const investedCapital = data.valueEndOfYear - totalInterest;

          return (
            <tr key={data.year}>
              <td>{data.year}</td>
              <td>{formatter.format(data.valueEndOfYear)}</td>
              <td>{formatter.format(data.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(investedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
