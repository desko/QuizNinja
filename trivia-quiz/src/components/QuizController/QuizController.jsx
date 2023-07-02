import QuestionCard from '../../components/QuestionCard/QuestionCard';
import Progressbar from '../../components/Progressbar/Progressbar';
import QuizNavigation from '../QuizNavigation/QuizNavigation';
import Timer from '../../components/Timer/Timer';
import {Flex} from '@chakra-ui/react';
import {useQuestions} from '../../hooks/useQuestions';

const QuizController = () => {
  const {
    quizData,
    questionNumber,
    currentQuestion,
    handleAnswerSelect,
  } = useQuestions();

  const quizTime = quizData.length * 60;

  const onTimeEnded = () => {
    console.log('time');
  };

  const submitHandler = () => {

  };

  return (
    <Flex flexWrap='wrap' gap='2rem'>
      <Timer time={quizTime}
        onFinishTime={onTimeEnded}
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
