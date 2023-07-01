import {useContext, useEffect, useState} from 'react';
import {QuizContext} from '../../context/QuizContext';
import {Box, Card, CardHeader, Heading, Radio, RadioGroup} from '@chakra-ui/react';
import {useNavigate, useParams} from 'react-router-dom';
import {shuffleAnswers} from '../../common/helpers';
import Btn from '../Btn/Btn';


const QuestionCard = () => {
  const {quizData, setQuizData} = useContext(QuizContext);
  const {questionNumber} = useParams();
  const navigate = useNavigate();

  const currentQuestion = quizData[questionNumber - 1];


  useEffect(() => {
    if (currentQuestion.answers === undefined) {
      setQuizData(quizData.map((question, index) => {
        if (index === questionNumber - 1) {
          question.answers = shuffleAnswers([
            ...currentQuestion.incorrect_answers,
            currentQuestion.correct_answer,
          ]);
        }
        return question;
      }));
    }
  }, [
    currentQuestion.answers,
    currentQuestion.correct_answer,
    currentQuestion.incorrect_answers,
    questionNumber,
    setQuizData,
    quizData,
  ]);

  const handleAnswerSelect = (answer) => {
    setQuizData(quizData.map((question, index) => {
      if (index === questionNumber - 1) {
        question.selectedAnswer = answer;
      }
      return question;
    }));
  };

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
      mt='2rem'>
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
        <Btn text='Submit' />
        }
      </Box>

    </Card>
  );
};

export default QuestionCard;
