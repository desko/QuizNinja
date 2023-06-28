import {Center, Box} from '@chakra-ui/react';

const Container = ( {children} ) => {
  return (
    <Center>
      <Box maxWidth='100rem' paddingX='2rem'>
        {children}
      </Box>
    </Center>
  );
};

export default Container;
