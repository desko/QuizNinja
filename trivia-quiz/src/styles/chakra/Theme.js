import {extendTheme} from '@chakra-ui/react';
import {radioTheme} from './RadioTheme';
import {selectTheme} from './SelectTheme';

const theme = extendTheme({
  components: {
    Radio: radioTheme,
    Select: selectTheme,
  },
});

export default theme;
