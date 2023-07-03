import {createContext, useState} from 'react';

export const QuizContext = createContext();

export const QuizProvider = ({children}) => {
  const [quizData, setQuizData] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <QuizContext.Provider value={{quizData, setQuizData, isSubmitted, setIsSubmitted}}>
      {children}
    </QuizContext.Provider>
  );
};
