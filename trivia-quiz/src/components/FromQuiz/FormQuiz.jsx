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

const FormQuiz = ({submitHandler} ) => {
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
          <Select changeHandler={selectChangeHandler} />
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
