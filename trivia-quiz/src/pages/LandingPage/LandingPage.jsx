import FormQuiz from '../../components/FromQuiz/FormQuiz';
import {Text} from '@chakra-ui/react';
import {useTitle} from '../../hooks/useTitle';

const LandingPage = () => {
  useTitle('QuizNinja - Unleash your inner QuizNinja');

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
      <FormQuiz />
    </>
  );
};

export default LandingPage;
