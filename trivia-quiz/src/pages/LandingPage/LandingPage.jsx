import FormQuiz from '../../components/FromQuiz/FormQuiz';
import {Box, Text} from '@chakra-ui/react';
import {useTitle} from '../../hooks/useTitle';
import {useNavigate} from 'react-router-dom';
import Btn from '../../components/Btn/Btn';
import {useActiveQuizTime} from '../../hooks/useActiveQuizTime';
import {DOCUMENT_TITLE} from '../../common/constants';
import Section from '../../components/Section/Section';

const LandingPage = () => {
  const {activeQuizTime, isSubmitted} = useActiveQuizTime();
  const navigate = useNavigate();
  useTitle(DOCUMENT_TITLE.LANDING_PAGE);

  return (
    <Section>
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
      <Box display='flex' alignItems='center' justifyContent='center' textAlign='center' flexDirection='column'>
        {(activeQuizTime && !isSubmitted) && (
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
    </Section>
  );
};

export default LandingPage;
