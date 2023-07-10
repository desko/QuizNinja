import {radioAnatomy} from '@chakra-ui/anatomy';
import {createMultiStyleConfigHelpers} from '@chakra-ui/react';

const {definePartsStyle, defineMultiStyleConfig} = createMultiStyleConfigHelpers(radioAnatomy.keys);

// define custom variant
const variants = {
  button: definePartsStyle({
    control: {
      display: 'none',
    },
    label: {
      fontSize: 'inherit',
    },
    container: {
      borderRadius: '.5rem',
      border: '.3rem solid',
      borderColor: 'orange.400',
      bgColor: 'transparent',
      fontSize: '2xl',
      padding: '.5rem',
      fontWeight: '700',
      color: 'orange.700',
      transition: 'box-shadow .4s, background-color .4s',
      _hover: {
        boxShadow: '0 0 1rem .2rem var(--chakra-colors-orange-400)',
      },
      _checked: {
        bgColor: 'orange.400',
        color: 'white',
        borderColor: 'orange.400',
      },
    },
  }),
};

export const radioTheme = defineMultiStyleConfig({
  variants,
});
