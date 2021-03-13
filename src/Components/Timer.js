import React, { useState, useEffect } from "react";
import Countdown from "./countdown";
import Laugh from "./../sounds/mixkit-crowd-laugh-424.wav";
import FeelingHappy from "./../sounds/mixkit-feeling-happy-5.mp3";
import Intro from "./../sounds/mixkit-intro-transition-1146.wav";
import Cheers from "./../sounds/mixkit-small-group-cheer-and-applause-518.wav";

export default function Timer() {
  const [counting, setCounting] = useState(false);
  const [time, setTime] = useState(10);
  const [key, setKey] = useState(0);
  const [audio, setAudio] = useState(new Audio(Cheers));

  const handleClick = (e) => {
    let timeInSeconds = e.target.value * 60;
    setTime(timeInSeconds);
    setCounting(false);
    setKey((prevKey) => prevKey + 1);
    audio.pause();
  };

  useEffect(() => {
    let timerId;
    if (counting) {
      timerId = setInterval(() => {
        if (time === 1) {
          setCounting(!counting);
          audio.play();
        }
        setTime((prevTime) => (prevTime -= 1));
      }, 1000);
    }

    return () => clearInterval(timerId);
  });

  return (
    <div className="timer-container">
      <h1>React Timer</h1>
      <Countdown time={time} counting={counting} id={key} />
      <div>
        <button
          onClick={() => {
            setCounting(!counting);
          }}
          disabled={time === 0}
        >
          {!counting ? "Start" : "Pause"}
        </button>
      </div>
      <div className="time-button-wrapper">
        <button onClick={handleClick} value={5}>
          5 minutes
        </button>
        <button onClick={handleClick} value={15}>
          15 minutes
        </button>
        <button onClick={handleClick} value={30}>
          30 minutes
        </button>
        <button onClick={handleClick} value={60}>
          60 minutes
        </button>
      </div>
      <div>
        <select onChange={(e) => setAudio(new Audio(e.target.value))}>
          <option value={Cheers}>Cheers</option>
          <option value={Laugh}>Laughs</option>
          <option value={Intro}>Intro</option>
          <option value={FeelingHappy}>Feeling Happy</option>
        </select>
      </div>
    </div>
  );
}
