import {useContext, useEffect} from 'react';
import {QuizContext} from '../context/QuizContext';
import {useParams} from 'react-router-dom';
import {shuffleAnswers} from '../common/helpers';
export const useQuestions = () => {
  const {quizData, setQuizData} = useContext(QuizContext);
  const {questionNumber} = useParams();

  const currentQuestion = quizData[questionNumber - 1];

  useEffect(() => {
    if (currentQuestion.answers === undefined) {
      setQuizData(quizData.map((question, index) => {
        if (index === questionNumber - 1) {
          question.answers = shuffleAnswers([
            ...currentQuestion.incorrect_answers,
            currentQuestion.correct_answer,
          ]);
        }
        return question;
      }));
    }
  }, [
    currentQuestion.answers,
    currentQuestion.correct_answer,
    currentQuestion.incorrect_answers,
    questionNumber,
    setQuizData,
    quizData,
  ]);

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
