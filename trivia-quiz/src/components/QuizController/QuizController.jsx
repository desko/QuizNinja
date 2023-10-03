import QuestionCard from '../../components/QuestionCard/QuestionCard';
import Progressbar from '../../components/Progressbar/Progressbar';
import QuizNavigation from '../QuizNavigation/QuizNavigation';
import Timer from '../../components/Timer/Timer';
import {Flex} from '@chakra-ui/react';
import {useQuestions} from '../../hooks/useQuestions';
import {RESULTS_PAGE} from '../../common/routes';
import {useNavigate} from 'react-router-dom';
import {useContext} from 'react';
import {QuizContext} from '../../context/QuizContext';

const QuizController = () => {
  const {
    quizData,
    questionNumber,
    currentQuestion,
    handleAnswerSelect,
  } = useQuestions();
  const {setIsSubmitted, quizTime, setQuizSubmitted} = useContext(QuizContext);
  const navigate = useNavigate();

  const submitHandler = () => {
    setQuizSubmitted(Math.floor(Date.now() / 1000));
    setIsSubmitted(true);
    navigate(RESULTS_PAGE);
  };

  return (
    <Flex flexWrap='wrap' gap='2rem'>
      <Timer timeEnd={quizTime}
        onFinishTime={submitHandler}
        customStyle={
          {
            flex: '0 0 100%',
          }
        } />
      <Flex
        flex='0 0 100%'
        position='relative'
        maxW='100%'
        flexWrap={
          {
            base: 'wrap',
            md: 'wrap',
          }
        }
        gap='2rem'>

        <QuestionCard
          customStyle={
            {
              flex: {
                base: '0 0 100%',
                md: '0 0 calc(100% - 25rem - 2rem)',
              },
            }
          }
          quizData={quizData}
          questionNumber={questionNumber}
          currentQuestion={currentQuestion}
          handleAnswerSelect={handleAnswerSelect}
          submitHandler={submitHandler}/>

        <QuizNavigation
          customStyle={
            {
              flex: {
                base: '0 0 100%',
                md: '0 0 25rem',
              },
            }
          }
          questionNumber={questionNumber}
          quizData={quizData}
          submitHandler={submitHandler} />
      </Flex>
      <Progressbar
        customStyle={
          {
            flex: '0 0 100%',
          }
        }
        quizData={quizData}
      />
    </Flex>
  );
};

export default QuizController;
