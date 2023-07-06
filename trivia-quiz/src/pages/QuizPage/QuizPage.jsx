import {useContext, useEffect} from 'react';
import QuizController from '../../components/QuizController/QuizController';
import {useTitle} from '../../hooks/useTitle';
import {QuizContext} from '../../context/QuizContext';
import {useNavigate} from 'react-router-dom';
import {LANDING_PAGE} from '../../common/routes';


const QuizPage = () => {
  const {quizData} = useContext(QuizContext);
  const navigate = useNavigate();

  useTitle(`QuizNinja - Slashing through question`);
  useEffect(() => {
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const handleBeforeUnload = (e) => {
    e.preventDefault();
    const message =
      'Are you sure you want to leave? All provided data will be lost.';
    e.returnValue = message;
    return message;
  };

  useEffect(() => {
    if (quizData.length === 0) {
      navigate(LANDING_PAGE);
    }
  }, [quizData.length, navigate]);

  if (quizData.length === 0) return;

  return (
    <>
      <QuizController />
    </>
  );
};

export default QuizPage;
