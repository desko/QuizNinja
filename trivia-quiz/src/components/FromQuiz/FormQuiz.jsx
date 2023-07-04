import {
  FormControl,
  FormLabel,
  FormErrorMessage,
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
import {useQuery} from '@tanstack/react-query';
import {fetchCategories, fetchQuestionCountByCategoryAndType, fetchQuestions} from '../../services/quiz.service';
import {useContext, useEffect, useState} from 'react';
import {SLIDER_DIFFICULTY, DIFFICULTY, MIN_NUMBER_OF_QUESTIONS} from '../../common/constants';
import {useNavigate} from 'react-router-dom';
import {QUIZ_FIRST_QUESTION_PAGE} from '../../common/routes';
import {QuizContext} from '../../context/QuizContext';
import ErrorCard from '../ErrorCard/ErrorCard';

const FormQuiz = () => {
  const navigate = useNavigate();
  const [difficulty, setDifficulty] = useState(DIFFICULTY.EASY.NAME);
  const [category, setCategory] = useState(null);
  const [isLoadingCount, setIsLoadingCount] = useState(true);
  const [questionsAmount, setQuestionsAmount] = useState(MIN_NUMBER_OF_QUESTIONS);

  const {isLoading: isLoadingCategs, error: errorCategories, data: quizCategories} = useQuery({
    queryKey: ['quizCategories'],
    queryFn: fetchCategories,
  });

  const {setQuizData} = useContext(QuizContext);

  const {
    isLoading: isLoadingQuestions,
    error: errorQuestions,
    data: quizQuestionCount,
    refetch: refetchSliderCount,
  } = useQuery({
    queryKey: ['quizQuestionCount'],
    queryFn: () => category && fetchQuestionCountByCategoryAndType(category, difficulty),
    enabled: false,
  });

  const difficultyChangeHandler = (e) => {
    setDifficulty(SLIDER_DIFFICULTY[e]);
  };

  const selectChangeHandler = (e) => {
    setCategory(e.target.value);
  };

  const questionsAmountChangeHandler = (e) => {
    setQuestionsAmount(e);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = await fetchQuestions(questionsAmount, category, difficulty);
    setQuizData(data);
    navigate(QUIZ_FIRST_QUESTION_PAGE);
  };

  useEffect(() => {
    setIsLoadingCount(false);
  }, [quizQuestionCount, setIsLoadingCount]);

  useEffect(() => {
    refetchSliderCount();
    setIsLoadingCount(true);
  }, [difficulty, category, refetchSliderCount]);

  if (isLoadingCategs) return <Spinner color='orange.400' size='xl' display='block' mx='auto' />;

  if (errorCategories || errorQuestions) return <ErrorCard />;

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
          <FormErrorMessage></FormErrorMessage>

          <FormLabel>Choose Diffuculty:</FormLabel>
          <SliderDifficulty changeHandler={difficultyChangeHandler} />
          <FormErrorMessage></FormErrorMessage>

          {(!isLoadingCount && quizQuestionCount) && (
            <>
              <FormLabel>Question Count:</FormLabel>
              <SliderQuestions
                maxQuestions={quizQuestionCount}
                changeHandler={questionsAmountChangeHandler} />
            </>
          )}
          <FormErrorMessage></FormErrorMessage>

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
