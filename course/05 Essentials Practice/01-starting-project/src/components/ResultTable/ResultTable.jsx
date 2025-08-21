import { formatter } from "../../util/investment.js";
import "./ResultTable.css";

export default function ResultTable({ currentData, annualData }) {
  let emptyData = <tr></tr>;

  let renderedData = annualData.map((data, i) => {
    const totalInterest = currentData[i].expectedReturn;
    const investedCapital = currentData[i].initialInvestment;

    return (
      <tr key={i}>
        <td>{data.year}</td>
        <td>{formatter.format(data.valueEndOfYear)}</td>
        <td>{formatter.format(totalInterest)}</td>
        <td>{formatter.format(data.interest)}</td>
        <td>{formatter.format(investedCapital)}</td>
      </tr>
    );
  });

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
      <tbody>{annualData ? renderedData : emptyData}</tbody>
    </table>
  );
}
