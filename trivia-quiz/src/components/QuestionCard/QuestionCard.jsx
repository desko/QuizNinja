import {Box, Card, CardHeader, Heading, Radio, RadioGroup, Grid, GridItem} from '@chakra-ui/react';
import {useNavigate} from 'react-router-dom';
import Btn from '../Btn/Btn';
import {decode} from 'html-entities';
import ConfirmationModal from '../ConfiramtionModal/ConfirmationModal';

const QuestionCard = ({
  customStyle = {},
  quizData,
  questionNumber,
  currentQuestion,
  handleAnswerSelect,
  submitHandler,
}) => {
  const navigate = useNavigate();

  const handlePreviousQuestion = () => {
    const previousQuestion = Number(questionNumber) - 1;
    navigate(`/quiz/questions/${previousQuestion}`);
  };

  const handleNextQuestion = () => {
    const nextQuestionId = Number(questionNumber) + 1;
    navigate(`/quiz/questions/${nextQuestionId}`);
  };


  return (
    <Card
      border={'.3rem solid'}
      borderColor='orange.400'
      borderRadius='2rem'
      boxShadow=''
      p={
        {
          base: '2rem 2rem',
          lg: '2rem 5rem',
        }
      }
      style={customStyle}>
      <CardHeader p='0 0 3rem'>
        <Heading
          as='h2'
          color='orange.600'
          fontWeight='700'
          textAlign='center'>
          Category: {currentQuestion.category}
        </Heading >
        <Heading
          mt='2rem'
          as='h5'
          color='orange.600'
          fontWeight='500'
          textAlign='left'>
          {questionNumber}. {decode(currentQuestion.question)}
        </Heading >
      </CardHeader>

      <RadioGroup onChange={handleAnswerSelect} value={currentQuestion.selectedAnswer}>
        <Grid templateColumns='1fr' gap='1rem'>
          {currentQuestion?.answers?.map((answer) => (

            <GridItem key={answer}>
              <Radio
                value={answer}
                size='lg'
                width='100%'
                display='flex'
                colorScheme='orange'
                color='silver'
                defaultChecked
                variant='button'>
                {decode(answer)}
              </Radio>
            </GridItem>
          ))}
        </Grid>
      </RadioGroup>
      <Box mt='auto' pt='2rem' display='flex' alignItems='center' justifyContent='space-between'>
        {Number(questionNumber) !== 1 &&
          <Btn text='<' clickHandler={handlePreviousQuestion} />
        }
        {(Number(questionNumber) < quizData.length) &&
        <Btn text='>' customStyle={{'marginLeft': 'auto'}} clickHandler={handleNextQuestion} />
        }
        {(Number(questionNumber) === quizData.length) &&
          <ConfirmationModal submitHandler={submitHandler} />
        }
      </Box>

    </Card>
  );
};

export default QuestionCard;
