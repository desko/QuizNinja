import {useEffect, useState} from 'react';
import {timeConverter} from '../common/helpers';

export const useTimer = (time, onFinishTime) => {
  const [timeSeconds, setTimeSeconds] = useState(time);
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
