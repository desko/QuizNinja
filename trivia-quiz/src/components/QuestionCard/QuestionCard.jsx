import {Box, Card, CardHeader, Heading, Radio, RadioGroup} from '@chakra-ui/react';
import {Link, useNavigate} from 'react-router-dom';
import Btn from '../Btn/Btn';
import {useQuestions} from '../../hooks/useQuestions';
import {RESULTS_PAGE} from '../../common/routes';

const QuestionCard = ({customStyle = {}}) => {
  const {
    quizData,
    questionNumber,
    currentQuestion,
    handleAnswerSelect,
  } = useQuestions();
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
      p='4rem 12.5%'
      mt='2rem'
      style={customStyle}>
      <CardHeader p='0 0 3rem'>
        <Heading
          as='h2'
          color='orange.600'
          fontWeight='700'
          textAlign='center'>
          Question {questionNumber}
        </Heading >
        <Heading
          mt='2rem'
          as='h5'
          color='orange.600'
          fontWeight='500'
          textAlign='center'>
          {currentQuestion.question}
        </Heading >
      </CardHeader>

      <RadioGroup onChange={handleAnswerSelect} value={currentQuestion.selectedAnswer}>
        {currentQuestion?.answers?.map((answer) => (
          <Radio key={answer} value={answer} size='lg' display='block' colorScheme='orange' defaultChecked>
            {answer}
          </Radio>
        ))}
      </RadioGroup>
      <Box display='flex' alignItems='center' justifyContent='space-between'>
        {Number(questionNumber) !== 1 &&
          <Btn text='<' clickHandler={handlePreviousQuestion} />
        }
        {(Number(questionNumber) < quizData.length) &&
        <Btn text='>' customStyle={{'marginLeft': 'auto'}} clickHandler={handleNextQuestion} />
        }
        {(Number(questionNumber) === quizData.length) &&
        <Link to={RESULTS_PAGE}>
          <Btn text='Submit' />
        </Link>
        }
      </Box>

    </Card>
  );
};

export default QuestionCard;
