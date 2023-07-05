import FormQuiz from '../../components/FromQuiz/FormQuiz';
import {Box, Text} from '@chakra-ui/react';
import {useTitle} from '../../hooks/useTitle';
import {useContext, useEffect, useState} from 'react';
import {QuizContext} from '../../context/QuizContext';
import {useNavigate} from 'react-router-dom';
import Btn from '../../components/Btn/Btn';

const LandingPage = () => {
  const {setIsSubmitted, quizTime, quizSubmitted} = useContext(QuizContext);
  const [activeQuiz, setActiveQuiz] = useState(false);
  const navigate = useNavigate();
  useTitle('QuizNinja - Unleash your inner QuizNinja');

  useEffect(() => {
    let time;
    const interval = setInterval(() => {
      time = 1000;
      setActiveQuiz((quizTime - Math.floor(Date.now() / 1000)) > 0);
    }, time || 0);

    return () => {
      clearInterval(interval);
    };
  }, [quizTime]);

  useEffect(() => {
    setIsSubmitted(false);
  }, [setIsSubmitted]);

  return (
    <>
      <Text
        p='1rem 0 4rem'
        maxW={{'base': '90%', 'md': '80%'}}
        m='0 auto'
        textAlign='center'
        fontSize={{'base': '2xl', 'md': '3xl', '2xl': '4xl'}}
        fontWeight='bold'
        color='orange.600'>
        <strong>
            Welcome to QuizNinja! Are you ready to put your knowledge to
            the test? Take a thrilling journey through a world of trivia
            and challenge yourself with exciting quizzes. Choose your
            preferred category, select the difficulty level that matches
            your expertise, and decide the number of questions to tackle.
            Whether you are a history buff, a pop culture enthusiast, or
            a science geek, QuizNinja has something for everyone.
            Sharpen your mind, learn new facts, and have fun along
            the way. Get started now and let the quiz adventure begin!
        </strong>
      </Text>
      <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
        {(activeQuiz && !quizSubmitted) && (
          <>
            <Text
              fontWeight='bold'
              color='orange.600'
              p='.5rem'>
            A true Ninja does not run from his assignment!
            </Text>
            <Btn text='Back to Quiz' clickHandler={() => navigate('quiz/questions/1')} />
          </>
        )}
      </Box>
      <FormQuiz />
    </>
  );
};

export default LandingPage;
