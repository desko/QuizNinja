import {selectAnatomy} from '@chakra-ui/anatomy';
import {createMultiStyleConfigHelpers} from '@chakra-ui/react';

const {definePartsStyle, defineMultiStyleConfig} = createMultiStyleConfigHelpers(selectAnatomy.keys);

// define custom variant
const variants = {
  custom: definePartsStyle({
    field: {
      border: '.3rem solid',
      borderColor: 'orange.400',
      padding: '.5rem',
      fontSize: '2xl',
      height: 'auto',
      color: 'orange.400',
      transition: 'border-color .4s, color .4s',
      _hover: {
        borderColor: 'orange.600',
        color: 'orange.600',
      },
    },
    icon: {
      color: 'orange.400',
      _hover: {
        color: 'orange.600',
      },
    },
  }),
};

export const selectTheme = defineMultiStyleConfig({
  variants,
});
