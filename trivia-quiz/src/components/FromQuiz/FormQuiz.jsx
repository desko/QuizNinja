import {
  FormControl,
  FormLabel,
  Card,
  CardHeader,
  Heading,
  Spinner,
} from '@chakra-ui/react';
import SliderDifficulty
  from '../SliderDifficulty/SliderDifficulty';
import Select from '../Select/Select';
import SliderQuestions from '../SliderQuestions/SliderQuestions';
import Btn from '../Btn/Btn';
import {fetchQuestions} from '../../services/quiz.service';
import {SLIDER_DIFFICULTY, MIN_NUMBER_OF_QUESTIONS, SECONDS_PER_QUESTION} from '../../common/constants';
import {useNavigate} from 'react-router-dom';
import {QUIZ_FIRST_QUESTION_PAGE} from '../../common/routes';
import {useQuizForm} from '../../hooks/useQuizForm';
import ErrorCard from '../ErrorCard/ErrorCard';

const FormQuiz = () => {
  const navigate = useNavigate();

  const {
    questionsAmount,
    category,
    difficulty,
    setQuizData,
    setQuizTime,
    setIsSubmitted,
    setErrorQuiz,
    isLoadingCategories,
    isLoadingCount,
    errorCategories,
    errorQuestions,
    errorQuiz,
    quizCategories,
    quizQuestionCount,
    setDifficulty,
    setQuestionsAmount,
    setCategory,
  } = useQuizForm();

  const difficultyChangeHandler = (e) => {
    setDifficulty(SLIDER_DIFFICULTY[e]);
    setQuestionsAmount(MIN_NUMBER_OF_QUESTIONS);
  };

  const selectChangeHandler = (e) => {
    setCategory(e.target.value);
    setQuestionsAmount(MIN_NUMBER_OF_QUESTIONS);
  };

  const questionsAmountChangeHandler = (e) => {
    setQuestionsAmount(e);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await fetchQuestions(questionsAmount, category, difficulty);
      setQuizData(data);
      setQuizTime(Math.floor((Date.now() + (questionsAmount * SECONDS_PER_QUESTION * 1000)) / 1000));
      setIsSubmitted(false);
      navigate(QUIZ_FIRST_QUESTION_PAGE);
    } catch (error) {
      setErrorQuiz(true);
    }
  };

  if (isLoadingCategories) return <Spinner color='orange.400' size='xl' display='block' mx='auto' />;

  if (errorCategories || errorQuestions || errorQuiz) return <ErrorCard />;

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
          Please fill out form to start a quiz!
        </Heading >
      </CardHeader>
      <form onSubmit={submitHandler} style={{display: 'contents'}}>
        <FormControl display='contents' >
          <FormLabel>Select Category:</FormLabel>
          <Select changeHandler={selectChangeHandler} options={quizCategories} />

          <FormLabel>Choose Difficulty:</FormLabel>
          <SliderDifficulty changeHandler={difficultyChangeHandler} />

          {(!isLoadingCount && quizQuestionCount) && (
            <>
              <FormLabel>Question Count:</FormLabel>
              <SliderQuestions
                maxQuestions={quizQuestionCount}
                changeHandler={questionsAmountChangeHandler} />
            </>
          )}

          {isLoadingCount && category && <Spinner color='orange.400' size='xl' display='block' mx='auto' mb='2rem' />}

          <Btn
            disabled={(quizQuestionCount && !isLoadingCount) ? false : true}
            alignSelf='center'
            text={'start quiz'} />
        </FormControl>
      </form>
    </Card>
  );
};

export default FormQuiz;
