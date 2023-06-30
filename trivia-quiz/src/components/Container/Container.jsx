import {Center, Box} from '@chakra-ui/react';

const Container = ( {children} ) => {
  return (
    <Center>
      <Box maxWidth={{'sm': '100%',
        'md': '100%',
        'lg': '100%',
        'xl': '100rem',
        '2xl': '120rem'}} paddingX='2rem'>
        {children}
      </Box>
    </Center>
  );
};

export default Container;
