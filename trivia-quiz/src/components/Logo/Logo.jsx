import {Center, Image} from '@chakra-ui/react';
import QuinNinjaLogo from '../../assets/img/QuizNinja-Logo.png';
import {Link} from 'react-router-dom';
import {LANDING_PAGE} from '../../common/routes';

const Logo = () => {
  return (
    <Center pt='2rem' width='100%'>
      <Link to={LANDING_PAGE}>
        <Image
          src={QuinNinjaLogo}
          alt='QuizNinja Logo'
          width='30rem'
          height='auto' />
      </Link>
    </Center>
  );
};

export default Logo;
