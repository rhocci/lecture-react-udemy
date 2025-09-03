import ProgressBar from './ProgressBar.jsx';

export default function Question({ children }) {
  return (
    <div id="question">
      <ProgressBar />
      <p>{children.text}</p>
    </div>
  );
}
