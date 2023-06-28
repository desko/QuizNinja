import {Button} from '@chakra-ui/react';

const Btn = ( {clickHandler, text} ) => {
  return (
    <Button
      alignSelf='center'
      fontSize='1.6rem'
      p='1rem 2.5rem'
      textTransform='capitalize'
      borderRadius='1rem'
      lineHeight='1'
      height='auto'
      colorScheme='orange'
      onClick={clickHandler}>
      {text}
    </Button>
  );
};

export default Btn;
