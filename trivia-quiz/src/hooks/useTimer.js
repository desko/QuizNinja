import {useEffect, useState} from 'react';
import {timeConverter} from '../common/helpers';

export const useTimer = (timeEnd, onFinishTime) => {
  const [timeSeconds, setTimeSeconds] = useState(timeEnd - Math.floor(Date.now() / 1000));
  const [timeObject, setTimeObject] = useState(timeConverter(timeSeconds));

  useEffect(() => {
    if (timeSeconds > 0) {
      setTimeout(() => {
        setTimeSeconds(timeEnd - Math.floor(Date.now() / 1000));
      }, 1000);
    } else {
      onFinishTime();
      setTimeout(() => {
        setTimeSeconds(0);
      }, 1000);
    }
  }, [timeSeconds, onFinishTime, timeEnd]);

  useEffect(() => {
    setTimeObject(timeConverter(timeSeconds));
  }, [timeSeconds]);

  return timeObject;
};
