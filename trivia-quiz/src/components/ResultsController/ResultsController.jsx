import {Heading, Card, CardHeader} from '@chakra-ui/react';
import {useContext} from 'react';
import {QuizContext} from '../../context/QuizContext';
import {SCORE_MAP, SECONDS_PER_QUESTION} from '../../common/constants';
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

  const remainingTime = quizTime - quizSubmitted; // second remaining
  const totalTime = quizData.length * SECONDS_PER_QUESTION;

  const timeRemainingPercent = (Math.round(remainingTime / totalTime * 100));
  const timeScore = Math.round((percentageScore * (timeRemainingPercent / 100) / 10));

  let totalScore = percentageScore + timeScore;
  if (totalScore > 100) totalScore = 100;

  const percentageThreshhold = Math.floor(totalScore / 10) * 10;
  console.table(quizTime, quizSubmitted);
  console.table(remainingTime, totalTime);
  console.log(percentageScore);
  console.log(timeRemainingPercent);
  console.log(timeScore);
  // console.table({remainingTime, spentTime, timeRemainingPercent, totalTime});

  const score = SCORE_MAP.find((score) => score.SCORE_TRESHHOLD === percentageThreshhold);

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
          You got {totalScore}%!
        </Heading >
        <Heading
          mt='2rem'
          as='h2'
          color='orange.600'
          fontWeight='700'
          textAlign='center'>
          {Math.round(percentageScore)} % of the questions right and {timeScore}% for bonus time
        </Heading >
        <Heading
          mt='2rem'
          as='h2'
          color='orange.600'
          fontWeight='700'
          textAlign='center'>
          Time remained: {
            (timeConverter(remainingTime).hours > 9 ?
              timeConverter(remainingTime).hours :
              `0${timeConverter(remainingTime).hours}`) + ' : ' +
            (timeConverter(remainingTime).minutes > 9 ?
              timeConverter(remainingTime).minutes :
              `0${timeConverter(remainingTime).minutes}`) + ' : ' +
            (timeConverter(remainingTime).seconds > 9 ?
              timeConverter(remainingTime).seconds :
              `0${timeConverter(remainingTime).seconds}`)
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
        <Award color={score.COLOR} />
        <Heading
          mt='2rem'
          maxW='75%'
          mx='auto'
          as='h3'
          color='orange.600'
          fontWeight='700'
          textAlign='center'>
          {score.MESSAGE}
        </Heading >
        <AccordionSingle title='Check Results' items={quizData} RenderItem={QuestionReview} />
      </CardHeader>
    </Card>
  );
};

export default ResultsController;
