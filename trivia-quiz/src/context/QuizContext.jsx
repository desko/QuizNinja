import {createContext, useState} from 'react';

export const QuizContext = createContext();

export const QuizProvider = ({children}) => {
  const [quizData, setQuizData] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [quizTime, setQuizTime] = useState(0);
  const [quizSubmitted, setQuizSubmitted] = useState(0);

  return (
    <QuizContext.Provider value={{quizData,
      setQuizData,
      isSubmitted,
      setIsSubmitted,
      quizTime,
      setQuizTime,
      quizSubmitted,
      setQuizSubmitted}}>
      {children}
    </QuizContext.Provider>
  );
};
