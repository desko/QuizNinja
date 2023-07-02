import QuizController from '../../components/QuizController/QuizController';
import {useTitle} from '../../hooks/useTitle';

const QuizPage = () => {
  useTitle(`QuizNinja - Slashing through question`);
  return (
    <>
      <QuizController />
    </>
  );
};

export default QuizPage;
