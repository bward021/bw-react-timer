import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import moment from "moment";

export default function Countdown(props) {
  return (
    <div className="timer-circle-wrapper">
      <CountdownCircleTimer
        key={props.id}
        size={300}
        isPlaying={props.counting ? true : false}
        duration={props.time}
        colors={[
          ["#0000FF", 0.25],
          ["#00FF00", 0.25],
          ["#FFFF00", 0.25],
          ["#FF0000", 0.25]
        ]}
      >
        {({ remainingTime }) =>
          moment()
            .hour(0)
            .minute(0)
            .second(remainingTime)
            .format("HH : mm : ss")
        }
      </CountdownCircleTimer>
    </div>
  );
}
