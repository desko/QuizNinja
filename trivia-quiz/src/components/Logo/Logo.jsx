import {Center, Image} from '@chakra-ui/react';
import QuinNinjaLogo from '../../assets/img/QuizNinja-Logo.png';

const Logo = () => {
  return (
    <Center pos='fixed' top='16px' width='100%' transform='translateX: -50%'>
      <Image
        src={QuinNinjaLogo}
        alt='QuizNinja Logo'
        width='300px'
        height='auto' />
    </Center>
  );
};

export default Logo;
