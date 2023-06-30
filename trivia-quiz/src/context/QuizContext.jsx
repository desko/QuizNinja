import {createContext, useState} from 'react';

export const QuizContext = createContext();

export const QuizProvider = ({children}) => {
  const [quizData, setQuizData] = useState([]);

  return (
    <QuizContext.Provider value={{quizData, setQuizData}}>
      {children}
    </QuizContext.Provider>
  );
};
