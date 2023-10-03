import {chakra} from '@chakra-ui/react';
import {useTimer} from '../../hooks/useTimer';

const Timer = ({timeEnd, onFinishTime, customStyle = {}}) => {
  const timeObject = useTimer(timeEnd, onFinishTime);

  return (
    <chakra.div
      p='1rem 2rem'
      fontWeight='700'
      textAlign='center'
      borderRadius='1rem'
      border={'.3rem solid'}
      borderColor='orange.400'
      color='orange.400'
      {...customStyle}>
      <span>
        {
          (timeObject.hours > 9 ? timeObject.hours : `0${timeObject.hours}`) + ' : ' +
          (timeObject.minutes > 9 ? timeObject.minutes : `0${timeObject.minutes}`) + ' : ' +
          (timeObject.seconds > 9 ? timeObject.seconds : `0${timeObject.seconds}`)
        }
      </span>
    </chakra.div>
  );
};

export default Timer;
