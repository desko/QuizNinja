import {useContext} from 'react';
import {QuizContext} from '../../context/QuizContext';
import {Card, CardHeader, Heading} from '@chakra-ui/react';


const ResultsPage = () => {
  const {quizData} = useContext(QuizContext);
  const correctAnswers = quizData.filter((question) => {
    return question.correct_answer === question.selectedAnswer;
  });
  const correctAnswersScore = `${correctAnswers.length}/${quizData.length}`;
  const percentageScore = (correctAnswers.length / quizData.length) * 100;

  return (
    <>
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
            You earned:
          </Heading >
        </CardHeader>
      </Card>
    </>
  );
};

export default ResultsPage;
