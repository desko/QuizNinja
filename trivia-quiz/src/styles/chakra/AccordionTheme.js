import {accordionAnatomy as parts} from '@chakra-ui/anatomy';
import {createMultiStyleConfigHelpers} from '@chakra-ui/styled-system';

const {definePartsStyle, defineMultiStyleConfig} = createMultiStyleConfigHelpers(parts.keys);


const variants = {
  custom: definePartsStyle({
    panel: {
      maxH: 'max(40vh, 40rem)',
      overflow: 'auto',
      p: '2rem',
      bgColor: 'orange.50',
      borderRadius: '0 0 1rem 1rem',
    },
    button: {
      fontSize: '3xl',
      fontWeight: 'bold',
      bgColor: 'orange.400',
      color: 'white',
      p: '1rem 2rem',
      borderRadius: '1rem',
      transition: 'background-color .4s',
      _hover: {
        bgColor: 'orange.600',
        color: 'white',
      },
      _expanded: {
        borderRadius: '1rem 1rem 0 0',
      },
    },
  }),
};

export const accordionTheme = defineMultiStyleConfig({
  variants,
});
