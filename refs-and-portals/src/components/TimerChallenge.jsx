import React, { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef(); //timer has not direct effect in the ui
  const dialog = useRef(); //timer has not direct effect in the ui
  // const [timerStarted, setTimerStarted] = useState(false);
  // const [timerExpired, setTimerExpired] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }
  const handleReset = () => {
    setTimeRemaining(targetTime * 1000);
  };
  const handleStart = () => {
    timer.current = setInterval(() => {
      setTimeRemaining((prevState) => prevState - 10);
      // setTimerExpired(true);
      // dialog.current.open();
    }, 10);
    // setTimerStarted(true);
  };
  const handleStop = () => {
    dialog.current.open();
    // clearTimeout(timer.current);
    clearInterval(timer.current);
  };
  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Timer is running..." : "Timer is inactive"}
        </p>
      </section>
    </>
  );
}
