import {useContext, useEffect} from 'react';
import {QuizContext} from '../context/QuizContext';
import {useNavigate} from 'react-router-dom';
import {RESULTS_PAGE} from '../common/routes';

const NotSubmitted = ({children}) => {
  const {isSubmitted} = useContext(QuizContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isSubmitted) {
      navigate(RESULTS_PAGE);
    }
  }, [isSubmitted, navigate]);

  if (isSubmitted) {
    return;
  }

  return children;
};

export default NotSubmitted;
