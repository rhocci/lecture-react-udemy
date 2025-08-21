import { formatter } from "../../util/investment.js";
import "./ResultTable.css";

export default function ResultTable({ annualData }) {
  let annualInterest = 0;
  let totalInterest = 0;

  const renderingData = annualData.map((data) => {
    annualInterest += data.interest * data.annualInterest;
    totalInterest += data.valueEndOfYear + annualInterest;

    // return {
    //   year: data.year,
    //   investmentValue: data.valueEndOfYear,
    //   annualInterest: formatter.format(annualInterest),
    //   totalInterest: formatter.format(totalInterest),
    //   investedCapital: formatter.format(data.investmentValue),
    // };

    return (
      <tr key={data.year}>
        <td>{data.year}</td>
        <td>{formatter.format(data.valueEndOfYear)}</td>
        <td>{formatter.format(annualInterest)}</td>
        <td>{formatter.format(totalInterest)}</td>
        <td>{formatter.format(data.valueEndOfYear + totalInterest)}</td>
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
      <tbody>{renderingData}</tbody>
    </table>
  );
}
