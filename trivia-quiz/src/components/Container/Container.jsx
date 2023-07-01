import {Center, Box} from '@chakra-ui/react';

const Container = ( {children} ) => {
  return (
    <Center>
      <Box maxWidth={{'sm': '100%',
        'md': '100%',
        'lg': '100rem',
        'xl': '120rem',
        '2xl': '140rem'}} paddingX='2rem'>
        {children}
      </Box>
    </Center>
  );
};

export default Container;
