import {Button} from '@chakra-ui/react';

const Btn = ( {clickHandler = () => {}, text, disabled, type='submit', customStyle = {}} ) => {
  return (
    <Button
      variant='custom'
      onClick={clickHandler}
      isDisabled={disabled}
      type={type}
      {...customStyle}
    >
      {text}
    </Button>
  );
};

export default Btn;
