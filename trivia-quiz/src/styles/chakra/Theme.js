import {extendTheme} from '@chakra-ui/react';
import {radioTheme} from './RadioTheme';
import {selectTheme} from './SelectTheme';
import {buttonTheme} from './ButtonTheme';
import {accordionTheme} from './AccordionTheme';

const theme = extendTheme({
  components: {
    Radio: radioTheme,
    Select: selectTheme,
    Button: buttonTheme,
    Accordion: accordionTheme,
  },
});

export default theme;
