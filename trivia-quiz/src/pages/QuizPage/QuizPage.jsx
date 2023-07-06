import QuizController from '../../components/QuizController/QuizController';
import {useTitle} from '../../hooks/useTitle';
import {useAlert} from '../../hooks/useAlert';


const QuizPage = () => {
  useTitle(`QuizNinja - Slashing through question`);
  useAlert('Are you sure you want to leave? All provided data will be lost.');

  return (
    <>
      <QuizController />
    </>
  );
};

export default QuizPage;
