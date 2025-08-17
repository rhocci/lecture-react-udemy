export default function Log({ gameLogs }) {
  return (
    <ol id="log">
      {gameLogs.map((log, logIndex) => (
        <li key={logIndex}>
          {log.player}가 {log.square.row}행 {log.square.col}에 둠
        </li>
      ))}
    </ol>
  );
}
