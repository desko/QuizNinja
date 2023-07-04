import {Button} from '@chakra-ui/react';

const Btn = ( {clickHandler = () => {}, text, disabled, type='submit', customStyle} ) => {
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
      onClick={clickHandler}
      isDisabled={disabled}
      type={type}
      style={customStyle}
      _hover={{
        bgColor: 'orange.600',
      }}>
      {text}
    </Button>
  );
};

export default Btn;
