import { formatter } from "../../util/investment.js";
import "./ResultTable.css";

export default function ResultTable({ currentValue, annualData }) {
  const { initialInvestment, annualInvestment } = currentValue;

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
          // 누적 원금 = 초기자금 + (연간 납부액 * 연도)
          const investedCapital =
            initialInvestment + annualInvestment * data.year;
          // 누적 이자 = 연말 총액 - 누적 원금
          const totalInterest = data.valueEndOfYear - investedCapital;

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
