export default function Log({ gameLogs }) {
  return (
    <ol id="log">
      {gameLogs.map((log, logIndex) => (
        <li key={logIndex}>{log}</li>
      ))}
    </ol>
  );
}
