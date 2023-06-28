import {Center, Image} from '@chakra-ui/react';
import QuinNinjaLogo from '../../assets/img/QuizNinja-Logo.png';

const Logo = () => {
  return (
    <Center paddingY='2rem' width='100%'>
      <Image
        src={QuinNinjaLogo}
        alt='QuizNinja Logo'
        width='30rem'
        height='auto' />
    </Center>
  );
};

export default Logo;
