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
import {fetchCategories} from '../../services/quiz.service';

const FormQuiz = ({submitHandler} ) => {
  const {isLoading, error, data: quizCategories} = useQuery({
    queryKey: ['quizCategories'],
    queryFn: fetchCategories,
  });

  console.log(quizCategories);

  const buttonClickHandler = (e) => {
    console.log('click');
  };

  const selectChangeHandler = (e) => {
    console.log(e.target.value);
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
          Please fill out form to start a quiz!
        </Heading >
      </CardHeader>
      <form onSubmit={submitHandler} style={{display: 'contents'}}>
        <FormControl display='contents' >
          <FormLabel>Select Category:</FormLabel>
          <Select changeHandler={selectChangeHandler} options={quizCategories} />
          <FormErrorMessage></FormErrorMessage>

          <FormLabel>Choose Diffuculty:</FormLabel>
          <SliderDifficulty />
          <FormErrorMessage></FormErrorMessage>

          <FormLabel>Question Count:</FormLabel>
          <SliderQuestions />
          <FormErrorMessage></FormErrorMessage>

          <Btn
            alignSelf='center'
            text={'start quiz'}
            clickHandler={buttonClickHandler} />
        </FormControl>
      </form>
    </Card>
  );
};

export default FormQuiz;
