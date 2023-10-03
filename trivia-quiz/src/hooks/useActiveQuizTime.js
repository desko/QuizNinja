import {useState, useEffect, useContext} from 'react';
import {QuizContext} from '../context/QuizContext';

export const useActiveQuizTime = () => {
  const {isSubmitted, quizTime} = useContext(QuizContext);
  const [activeQuizTime, setActiveQuizTime] = useState(false);

  useEffect(() => {
    let time;
    const interval = setInterval(() => {
      time = 1000;
      setActiveQuizTime((quizTime - Math.floor(Date.now() / 1000)) > 0);
    }, time || 0);

    return () => {
      clearInterval(interval);
    };
  }, [quizTime]);

  return {
    activeQuizTime,
    isSubmitted,
  };
};

