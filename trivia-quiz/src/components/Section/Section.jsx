import {Box} from '@chakra-ui/react';

const Section = ({children}) => {
  return (
    <Box
      as='section'
      py={
        {
          base: '2rem',
          md: '5rem',
        }
      }>
      {children}
    </Box>
  );
};

export default Section;
