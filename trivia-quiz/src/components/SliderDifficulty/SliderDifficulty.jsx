import {
  SliderFilledTrack,
  Slider,
  SliderTrack,
  SliderThumb,
  SliderMark,
} from '@chakra-ui/react';
import {DIFFICULTY} from '../../common/constants.js';

const SliderDifficulty = ( {changeHandler} ) => {
  return (
    <Slider aria-label='slider-ex-1'
      defaultValue={DIFFICULTY.EASY.VALUE}
      min={DIFFICULTY.EASY.VALUE}
      max={DIFFICULTY.HARD.VALUE}
      mb='6rem'
      mt='1rem'
      onChange={changeHandler}>
      <SliderMark color='orange.400' pt='1rem' transform='translateX(-50%)' value={0}>
        {DIFFICULTY.EASY.NAME}
      </SliderMark>
      <SliderMark color='orange.400' pt='1rem' transform='translateX(-50%)' value={1}>
        {DIFFICULTY.MEDIUM.NAME}
      </SliderMark>
      <SliderMark color='orange.400' pt='1rem' transform='translateX(-50%)' value={2}>
        {DIFFICULTY.HARD.NAME}
      </SliderMark>
      <SliderTrack h='0.8rem' >
        <SliderFilledTrack bgGradient={[
          'linear(to-r, yellow.400, red.400)',
        ]} />
      </SliderTrack>
      <SliderThumb h='2rem' w='2rem'
        transform='translate(-50%, -50%) scale(1) !important' bg='orange.500' />
    </Slider>
  );
};

export default SliderDifficulty;
