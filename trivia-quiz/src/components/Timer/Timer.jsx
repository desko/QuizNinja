import {Box} from '@chakra-ui/react';
import {useTimer} from '../../hooks/useTimer';

const Timer = ({time, onFinishTime}) => {
  const timeObject = useTimer(time, onFinishTime);

  return (
    <Box
      maxW='max-content'
      p='1rem 2rem'
      fontWeight='700'
      borderRadius='.5rem'
      border={'.3rem solid'}
      borderColor='orange.400'
      color='orange.400'
      m='3rem auto'>
      <span>
        {
          (timeObject.hours > 9 ? timeObject.hours : `0${timeObject.hours}`) + ' : ' +
          (timeObject.minutes > 9 ? timeObject.minutes : `0${timeObject.minutes}`) + ' : ' +
          (timeObject.seconds > 9 ? timeObject.seconds : `0${timeObject.seconds}`)
        }
      </span>
    </Box>
  );
};

export default Timer;
