import {modalAnatomy as parts} from '@chakra-ui/anatomy';
import {createMultiStyleConfigHelpers} from '@chakra-ui/styled-system';

const {definePartsStyle, defineMultiStyleConfig} = createMultiStyleConfigHelpers(parts.keys);


const variants = {
  custom: definePartsStyle({
    dialog: {
      border: '.3rem solid',
      borderColor: 'orange.400',
      borderRadius: '2rem',
      p: '6rem 3rem 1rem 3rem',
      display: 'flex',
      m: 'auto',
      width: 'calc(100% - 4rem)',
      paddingX: '2rem',
      maxWidth: {
        'sm': '100%',
        'md': '100%',
        'lg': '60rem',
      },
    },
    footer: {
      gap: '2rem',
    },
    closeButton: {
      color: 'orange.400',
      size: '2xl',
    },
  }),
};

export const modalTheme = defineMultiStyleConfig({
  variants,
});
