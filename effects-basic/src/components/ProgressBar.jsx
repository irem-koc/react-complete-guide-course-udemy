import React, { useEffect, useState } from "react";

const ProgressBar = ({ timer }) => {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const progress = setInterval(() => {
      console.log("INTERVAL");
      setRemainingTime((prev) => prev - 10);
    }, 10);
    return () => {
      clearTimeout(progress);
    };
  }, []);
  return <progress value={remainingTime} max={timer} />;
};

export default ProgressBar;
