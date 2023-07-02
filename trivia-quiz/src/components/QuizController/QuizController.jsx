import QuestionCard from '../../components/QuestionCard/QuestionCard';
import Progressbar from '../../components/Progressbar/Progressbar';
import QuizNavigation from '../QuizNavigation/QuizNavigation';
import Timer from '../../components/Timer/Timer';
import {Flex} from '@chakra-ui/react';
import {useQuestions} from '../../hooks/useQuestions';
import {RESULTS_PAGE} from '../../common/routes';
import {SECONDS_PER_QUESTION} from '../../common/constants';
import {useNavigate} from 'react-router-dom';

const QuizController = () => {
  const {
    quizData,
    questionNumber,
    currentQuestion,
    handleAnswerSelect,
  } = useQuestions();
  const navigate = useNavigate();
  const quizTime = quizData.length * SECONDS_PER_QUESTION;

  const submitHandler = () => {
    navigate(RESULTS_PAGE);
  };

  return (
    <Flex flexWrap='wrap' gap='2rem'>
      <Timer time={quizTime}
        onFinishTime={submitHandler}
        customStyle={{'flex': '0 0 100%'}} />
      <QuestionCard
        customStyle={{'flex': '0 0 calc(100% - 25rem - 2rem)'}}
        quizData={quizData}
        questionNumber={questionNumber}
        currentQuestion={currentQuestion}
        handleAnswerSelect={handleAnswerSelect}
        submitHandler={submitHandler}/>
      <QuizNavigation customStyle={{'flex': '0 0 25rem'}} quizData={quizData} />
      <Progressbar customStyle={{'flex': '0 0 100%'}} quizData={quizData} />
    </Flex>
  );
};

export default QuizController;
