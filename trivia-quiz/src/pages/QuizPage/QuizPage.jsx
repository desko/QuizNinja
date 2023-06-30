import {useContext} from 'react';
import {QuizContext} from '../../context/QuizContext';


const QuizPage = () => {
  const {quizData} = useContext(QuizContext);

  console.log(quizData);
  return (
    <div>QuizPage</div>
  );
};

export default QuizPage;
