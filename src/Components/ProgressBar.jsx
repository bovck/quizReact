import { useState, useEffect } from "react";
export default function ProgressBar({ onTimeout, timeout, mode }) {
  const [currentTime, setCurrentTime] = useState(timeout);
  useEffect(() => {
    const timer = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [onTimeout, timeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime((prev) => prev - 50);
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <progress
      id="question-time"
      value={currentTime}
      max={timeout}
      className={mode}
    ></progress>
  );
}
