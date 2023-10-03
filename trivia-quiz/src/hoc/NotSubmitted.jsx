import {useContext, useEffect} from 'react';
import {QuizContext} from '../context/QuizContext';
import {useNavigate} from 'react-router-dom';
import {RESULTS_PAGE, LANDING_PAGE} from '../common/routes';

const NotSubmitted = ({children}) => {
  const {quizData, isSubmitted} = useContext(QuizContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isSubmitted) {
      navigate(RESULTS_PAGE);
    }
    if (quizData.length === 0) {
      navigate(LANDING_PAGE);
    }
  }, [isSubmitted, navigate, quizData.length]);

  if (isSubmitted) {
    return;
  }

  if (quizData.length === 0) {
    return;
  }

  return children;
};

export default NotSubmitted;
