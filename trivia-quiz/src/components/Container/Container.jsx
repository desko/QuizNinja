import {Center, Box} from '@chakra-ui/react';

const Container = ( {children} ) => {
  return (
    <Center>
      <Box w='120rem' paddingX='2rem'>
        {children}
      </Box>
    </Center>
  );
};

export default Container;
