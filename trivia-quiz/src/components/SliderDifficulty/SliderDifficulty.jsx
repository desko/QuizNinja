import {
  SliderFilledTrack,
  Slider,
  SliderTrack,
  SliderThumb,
  SliderMark,
} from '@chakra-ui/react';
import {DIFFICULTY} from '../../common/constants.js';

const SliderDifficulty = () => {
  return (
    <Slider aria-label='slider-ex-1'
      defaultValue={0}
      min={0}
      max={2}
      onChange={(e) => console.log(e)}>
      <SliderMark pt='1rem' transform='translateX(-50%)' value={0}>
        {DIFFICULTY.EASY}
      </SliderMark>
      <SliderMark pt='1rem' transform='translateX(-50%)' value={1}>
        {DIFFICULTY.MEDIUM}
      </SliderMark>
      <SliderMark pt='1rem' transform='translateX(-50%)' value={2}>
        {DIFFICULTY.HARD}
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

export default SliderDifficulty;
