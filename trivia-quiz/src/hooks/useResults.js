import {useContext} from 'react';
import {QuizContext} from '../context/QuizContext';
import {SCORE_MAP, SECONDS_PER_QUESTION} from '../common/constants';

export const useResults = () => {
  const {quizData, quizTime, quizSubmitted} = useContext(QuizContext);
  const correctAnswers = quizData.filter((question) => {
    return question.correct_answer === question.selectedAnswer;
  });
  const correctAnswersScore = `${correctAnswers.length}/${quizData.length}`;
  const percentageScore = (correctAnswers.length / quizData.length) * 100;

  const remainingTime = quizTime - quizSubmitted; // second remaining
  const totalTime = quizData.length * SECONDS_PER_QUESTION;

  const timeRemainingPercent = (Math.round(remainingTime / totalTime * 100));
  const timeScore = Math.round((percentageScore * (timeRemainingPercent / 100) / 10));

  let totalScore = percentageScore + timeScore;
  if (totalScore > 100) totalScore = 100;

  const percentageThreshhold = Math.floor(totalScore / 10) * 10;

  const score = SCORE_MAP.find((score) => score.SCORE_TRESHHOLD === percentageThreshhold);

  return {
    correctAnswersScore,
    totalScore,
    percentageScore,
    timeScore,
    remainingTime,
    score,
    quizData,
  };
};
