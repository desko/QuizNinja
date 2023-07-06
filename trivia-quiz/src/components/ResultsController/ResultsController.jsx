import {Heading, Card, CardHeader} from '@chakra-ui/react';
import Award from '../../components/Award/Award';
import AccordionSingle from '../../components/AccordionSingle/AccordionSingle';
import QuestionReview from '../../components/QuestionReview/QuestionReview';
import {timeConverter} from '../../common/helpers';
import {useResults} from '../../hooks/useResults';
import {useNavigate} from 'react-router-dom';
import Btn from '../Btn/Btn';
import {LANDING_PAGE} from '../../common/routes';

const ResultsController = () => {
  const {
    correctAnswersScore,
    totalScore,
    percentageScore,
    timeScore,
    remainingTime,
    score,
    quizData,
  } = useResults();
  const navigate = useNavigate();

  return (
    <Card
      border={'.3rem solid'}
      borderColor='orange.400'
      borderRadius='2rem'
      p={
        {
          base: '2rem',
          md: '4rem 12.5%',
        }
      }>
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
          Your score {Math.round(totalScore)}%!
        </Heading >
        <Heading
          mt='2rem'
          as='h2'
          color='orange.600'
          fontWeight='700'
          textAlign='center'>
          You got {Math.round(percentageScore)}% of the questions right and {timeScore}% for bonus time
        </Heading >
        <Heading
          mt='2rem'
          as='h2'
          color='orange.600'
          fontWeight='700'
          textAlign='center'>
          {remainingTime > 0 ? (
            'Time remained: ' + (timeConverter(remainingTime).hours > 9 ?
              timeConverter(remainingTime).hours :
              `0${timeConverter(remainingTime).hours}`) + ' : ' +
            (timeConverter(remainingTime).minutes > 9 ?
              timeConverter(remainingTime).minutes :
              `0${timeConverter(remainingTime).minutes}`) + ' : ' +
            (timeConverter(remainingTime).seconds > 9 ?
              timeConverter(remainingTime).seconds :
              `0${timeConverter(remainingTime).seconds}`)
            ) : (
              'Your time has expired !'
            )}
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
          maxW={
            {
              base: '90%',
              md: '75%',
            }
          }
          mx='auto'
          as='h3'
          color='orange.600'
          fontWeight='700'
          textAlign='center'>
          {score.MESSAGE}
        </Heading >
        <AccordionSingle title='Check Results' items={quizData} RenderItem={QuestionReview} />
      </CardHeader>
      <Btn text='Back to Home' clickHandler={() => {
        navigate(LANDING_PAGE);
      }}/>
    </Card>
  );
};

export default ResultsController;
