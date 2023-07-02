import {useContext} from 'react';
import {QuizContext} from '../context/QuizContext';
import {useParams} from 'react-router-dom';

export const useQuestions = () => {
  const {quizData, setQuizData} = useContext(QuizContext);
  const {questionNumber} = useParams();
  const currentQuestion = quizData[questionNumber - 1];

  const handleAnswerSelect = (answer) => {
    setQuizData(quizData.map((question, index) => {
      if (index === questionNumber - 1) {
        question.selectedAnswer = answer;
      }
      return question;
    }));
  };

  return {
    quizData,
    questionNumber,
    currentQuestion,
    handleAnswerSelect,
  };
};
