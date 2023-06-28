import {
  SliderFilledTrack,
  Slider,
  SliderTrack,
  SliderThumb,
  SliderMark,
} from '@chakra-ui/react';
import {useState} from 'react';
import {MIN_NUMBER_OF_QUESTIONS} from '../../common/constants.js';


const SliderQuestions = ({maxQuestions = 20}) => {
  const [questions, setQuestions] = useState(MIN_NUMBER_OF_QUESTIONS);

  return (
    <Slider aria-label='slider-ex-1'
      defaultValue={5}
      min={5}
      max={maxQuestions}
      onChange={(e) => setQuestions(e)}>
      <SliderMark
        value={questions}
        textAlign='center'
        bg='orange.500'
        color='white'
        mt='-20'
        ml='-3'
        w='12'
        transform='translate(-50%, -50%)'
      >
        {questions}
      </SliderMark>
      <SliderTrack h='0.8rem' >
        <SliderFilledTrack bgGradient={[
          'linear(to-r, yellow.400, red.400)',
        ]} />
      </SliderTrack>
      <SliderThumb h='2rem' w='2rem'
        transform='translate(-50%, -50%)' bg='orange.500' />
    </Slider>
  );
};

export default SliderQuestions;
