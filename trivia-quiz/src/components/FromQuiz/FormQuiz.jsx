import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Card,
  CardHeader,
  Heading,
} from '@chakra-ui/react';
import SliderDifficulty
  from '../SliderDifficulty/SliderDifficulty';
import Select from '../Select/Select';
import SliderQuestions from '../SliderQuestions/SliderQuestions';
import Btn from '../Btn/Btn';
import {useQuery} from '@tanstack/react-query';
import {fetchCategories, fetchQuestionCountByCategoryAndType} from '../../services/quiz.service';
import {useEffect, useState} from 'react';
import {SLIDER_DIFFICULTY, DIFFICULTY} from '../../common/constants';
import {useNavigate} from 'react-router-dom';
import {QUIZ_PAGE} from '../../common/routes';

const FormQuiz = () => {
  const [difficulty, setDifficulty] = useState(DIFFICULTY.EASY.NAME);
  const [category, setCategory] = useState(null);
  const navigate = useNavigate();
  const {isLoading: isLoadingCategs, error: errorCategories, data: quizCategories} = useQuery({
    queryKey: ['quizCategories'],
    queryFn: fetchCategories,
  });

  const {isLoading: isLoadingQuestions,
    error: errorQuestions,
    data: quizQuestions,
    refetch: refetchSliderCount} = useQuery({
    queryKey: ['quizQuestions'],
    queryFn: () => category && fetchQuestionCountByCategoryAndType(category, difficulty),
    enabled: true,
  });


  const difficultyChangeHandler = (e) => {
    setDifficulty(SLIDER_DIFFICULTY[e]);
  };

  const selectChangeHandler = (e) => {
    setCategory(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(QUIZ_PAGE);
  };

  useEffect(() => {
    refetchSliderCount();
  }, [difficulty, category, refetchSliderCount]);

  if (isLoadingCategs) return <p>Loading...</p>;

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

          {quizQuestions && (
            <>
              <FormLabel>Question Count:</FormLabel>
              <SliderQuestions maxQuestions={quizQuestions} />
            </>
          ) }
          <FormErrorMessage></FormErrorMessage>

          <Btn
            disabled={quizQuestions ? false : true}
            alignSelf='center'
            text={'start quiz'} />
        </FormControl>
      </form>
    </Card>
  );
};

export default FormQuiz;
