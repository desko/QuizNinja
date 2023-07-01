import QuestionCard from '../../components/QuestionCard/QuestionCard';
import Progressbar from '../../components/Progressbar/Progressbar';
import Navigation from '../../components/Navigation/Navigation';
import Timer from '../../components/Timer/Timer';
import {Flex} from '@chakra-ui/react';
import { useContext } from 'react';
import { QuizContext } from '../../context/QuizContext';

const QuizPage = () => {
  const {quizData} = useContext(QuizContext);
  const quizTime = quizData.length * 60;
  return (
    <>
      <Flex flexWrap='wrap' gap='2rem'>
        <Timer time={quizTime}
          onFinishTime={() => console.log('time')}
          customStyle={{'flex': '0 0 100%'}}/>
        <QuestionCard customStyle={{'flex': '0 0 calc(100% - 25rem - 2rem)'}} />
        <Navigation customStyle={{'flex': '0 0 25rem'}} />
        <Progressbar customStyle={{'flex': '0 0 100%'}}/>
      </Flex>
    </>
  );
};

export default QuizPage;
