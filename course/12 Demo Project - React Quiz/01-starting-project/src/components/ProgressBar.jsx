import { useEffect, useState } from 'react';

export default function ProgressBar({ allottedTime, updateQuestion }) {
  const [remainingTime, setRemainingTime] = useState(allottedTime);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateQuestion();
    }, allottedTime);

    return () => {
      clearTimeout(timer);
    };
  }, [allottedTime, updateQuestion]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => (prevTime -= 10));
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress value={remainingTime} max={allottedTime} />;
}
