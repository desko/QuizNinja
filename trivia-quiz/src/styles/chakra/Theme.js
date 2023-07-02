import {extendTheme} from '@chakra-ui/react';
import {radioTheme} from './RadioTheme';

const theme = extendTheme({
  components: {
    Radio: radioTheme,
  },
});

export default theme;
