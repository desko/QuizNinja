import {useEffect, useState} from 'react';

export const useTimer = (time, onFinishTime) => {
  const [timeSeconds, setTimeSeconds] = useState(time);

  const timeConverter = (num) => {
    const hours = Math.floor(num / 3600);
    const minutes = Math.floor((num % 3600) / 60);
    const seconds = Math.floor(num % 60);

    return {
      hours,
      minutes,
      seconds,
    };
  };

  const [timeObject, setTimeObject] = useState(timeConverter(time));


  useEffect(() => {
    if (timeSeconds > 0) {
      setTimeout(() => {
        setTimeSeconds(timeSeconds - 1);
      }, 1000);
    } else {
      onFinishTime();
      setTimeout(() => {
        setTimeSeconds(0);
      }, 1000);
    }
  }, [timeSeconds, onFinishTime]);

  useEffect(() => {
    setTimeObject(timeConverter(timeSeconds));
  }, [timeSeconds]);

  return timeObject;
};
