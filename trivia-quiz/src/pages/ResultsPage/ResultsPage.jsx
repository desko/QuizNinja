import {useContext} from 'react';
import {QuizContext} from '../../context/QuizContext';


const ResultsPage = () => {
  const {quizData} = useContext(QuizContext);
  const correctAnswers = quizData.filter((question) => {
    return question.correct_answer === question.selectedAnswer;
  });
  const correctAnswersScore = `${correctAnswers.length}/${quizData.length}`;
  const percentageScore = (correctAnswers.length / quizData.length) * 100;
  console.log(correctAnswers);
  return (
    <>
      <div>Correct answers: {correctAnswersScore}</div>
      <div>{percentageScore} %</div>
    </>
  );
};

export default ResultsPage;
