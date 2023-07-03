import {useContext, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {QuizContext} from '../context/QuizContext';
import {LANDING_PAGE} from '../common/routes';

const Submitted = ({children}) => {
  const {isSubmitted} = useContext(QuizContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isSubmitted) {
      navigate(LANDING_PAGE);
    }
  }, [isSubmitted, navigate]);

  if (!isSubmitted) {
    return null;
  }

  return children;
};

export default Submitted;
