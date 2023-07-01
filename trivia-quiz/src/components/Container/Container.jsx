import {Center, Box} from '@chakra-ui/react';

const Container = ( {children} ) => {
  return (
    <Center>
      <Box width='100%' maxWidth={{'sm': '100%',
        'md': '100%',
        'lg': '100rem',
        'xl': '120rem',
        '2xl': '120rem'}} paddingX='2rem'>
        {children}
      </Box>
    </Center>
  );
};

export default Container;
