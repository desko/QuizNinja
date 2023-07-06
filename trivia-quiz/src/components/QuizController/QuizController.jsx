import QuestionCard from '../../components/QuestionCard/QuestionCard';
import Progressbar from '../../components/Progressbar/Progressbar';
import QuizNavigation from '../QuizNavigation/QuizNavigation';
import Timer from '../../components/Timer/Timer';
import {Flex} from '@chakra-ui/react';
import {useQuestions} from '../../hooks/useQuestions';
import {RESULTS_PAGE} from '../../common/routes';
import {useNavigate} from 'react-router-dom';
import {useContext, useEffect, useState} from 'react';
import {QuizContext} from '../../context/QuizContext';
import {useWindowWidth} from '../../hooks/useWindowWidth';
import Btn from '../Btn/Btn';

const QuizController = () => {
  const windowWidth = useWindowWidth();
  const [navigationHidden, setNavigationHidden] = useState(true);
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

  const navigationHandler = () => {
    setNavigationHidden(!navigationHidden);
  };

  useEffect(() => {
    setNavigationHidden(true);
  }, [questionNumber]);

  return (
    <Flex flexWrap='wrap' gap='2rem'>
      <Timer timeEnd={quizTime}
        onFinishTime={submitHandler}
        customStyle={{'flex': '0 0 100%'}} />
      <Flex
        flex='0 0 100%'
        position='relative'
        flexWrap={
          {
            base: 'wrap-reverse',
            md: 'wrap',
          }
        }
        gap='2rem'>

        <QuestionCard
          customStyle={
            windowWidth > 767 ?
              {
                flex: '0 0 calc(100% - 25rem - 2rem)',
              } :
              {
                flex: '0 0 100%',
              }
          }
          quizData={quizData}
          questionNumber={questionNumber}
          currentQuestion={currentQuestion}
          handleAnswerSelect={handleAnswerSelect}
          submitHandler={submitHandler}/>

        <QuizNavigation

          customStyle={
            windowWidth > 767 ?
              {
                flex: '0 0 25rem',
              } :
              navigationHidden ?
              {
                flex: '0 0 100%',
                position: 'absolute',
                top: '5.6rem',
                left: '0',
                width: '100%',
                opacity: '0',
                minHeight: 'calc(100% - 5.6rem)',
                transition: 'opacity .4s',
                pointerEvents: 'none',
              } :
              {
                flex: '0 0 100%',
                position: 'absolute',
                top: '5.6rem',
                left: '0',
                width: '100%',
                minHeight: 'calc(100% - 5.6rem)',
                opacity: '1',
                transition: 'opacity .4s',
                zIndex: '2',
              }
          }
          questionNumber={questionNumber}
          quizData={quizData}
          submitHandler={submitHandler} />

        {
          windowWidth < 768 &&
          <Btn
            clickHandler={navigationHandler}
            text={
              navigationHidden ?
              'Show Navigation' :
              'Hide Navigation'
            }
            customStyle={
              {
                flex: '0 0 100%',
              }
            }/>
        }
      </Flex>
      <Progressbar customStyle={{'flex': '0 0 100%'}} quizData={quizData} />
    </Flex>
  );
};

export default QuizController;
