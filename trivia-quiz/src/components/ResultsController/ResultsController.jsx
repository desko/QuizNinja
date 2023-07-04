import {Heading, Card, CardHeader} from '@chakra-ui/react';
import {useContext} from 'react';
import {QuizContext} from '../../context/QuizContext';
import {SCORE_MAP} from '../../common/constants';
import Award from '../../components/Award/Award';
import AccordionSingle from '../../components/AccordionSingle/AccordionSingle';
import QuestionReview from '../../components/QuestionReview/QuestionReview';
import {timeConverter} from '../../common/helpers';

const ResultsController = () => {
  const {quizData, quizTime, quizSubmitted} = useContext(QuizContext);
  const correctAnswers = quizData.filter((question) => {
    return question.correct_answer === question.selectedAnswer;
  });
  const correctAnswersScore = `${correctAnswers.length}/${quizData.length}`;
  const percentageScore = (correctAnswers.length / quizData.length) * 100;
  const percentageThreshhold = Math.floor(percentageScore / 10) * 10;
  const color = SCORE_MAP.find((score) => score.SCORE_TRESHHOLD === percentageThreshhold).COLOR;
  const remainingTime = timeConverter(quizTime - quizSubmitted);

  return (
    <Card
      border={'.3rem solid'}
      borderColor='orange.400'
      borderRadius='2rem'
      boxShadow=''
      p='4rem 12.5%'
      mt='2rem'>
      <CardHeader p='0 0 3rem'>
        <Heading
          as='h2'
          color='orange.600'
          fontWeight='700'
          textAlign='center'>
            Correct answers: {correctAnswersScore}
        </Heading >
        <Heading
          mt='2rem'
          as='h2'
          color='orange.600'
          fontWeight='700'
          textAlign='center'>
            You got {Math.round(percentageScore)} % of the questions right
        </Heading >
        <Heading
          mt='2rem'
          as='h2'
          color='orange.600'
          fontWeight='700'
          textAlign='center'>
                        Time remained: {
            (remainingTime.hours > 9 ? remainingTime.hours : `0${remainingTime.hours}`) + ' : ' +
          (remainingTime.minutes > 9 ? remainingTime.minutes : `0${remainingTime.minutes}`) + ' : ' +
          (remainingTime.seconds > 9 ? remainingTime.seconds : `0${remainingTime.seconds}`)
          }
        </Heading >
        <Heading
          mt='2rem'
          as='h2'
          color='orange.600'
          fontWeight='700'
          textAlign='center'>
            You earned:
        </Heading >
        <Award color={color} />
        <AccordionSingle title='Check Results' items={quizData} RenderItem={QuestionReview} />
      </CardHeader>
    </Card>
  );
};

export default ResultsController;
