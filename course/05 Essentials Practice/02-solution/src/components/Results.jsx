import { calculateInvestmentResults } from '../util/investment.js';

export default function Results({ userInput }) {
  const resultsData = calculateInvestmentResults(userInput);

  return <p>Results...</p>;
}
