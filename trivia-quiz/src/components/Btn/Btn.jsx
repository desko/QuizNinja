import {Button} from '@chakra-ui/react';

const Btn = ( {clickHandler, text} ) => {
  return (
    <Button colorScheme='orange' onClick={clickHandler}>{text}</Button>
  );
};

export default Btn;
