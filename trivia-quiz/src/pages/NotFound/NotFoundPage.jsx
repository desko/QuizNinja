import {Heading, Flex} from '@chakra-ui/react';
import Btn from '../../components/Btn/Btn';
import {useNavigate} from 'react-router-dom';
import {LANDING_PAGE} from '../../common/routes';
import Container from '../../components/Container/Container';
import NotFound from '../../assets/img/NotFound.min.png';
import {Image} from '@chakra-ui/react';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Flex py='2rem' flexDir='column' alignItems='center'>
        <Image
          src={NotFound}
          alt='QuizNinja Logo'
          width='51.2rem'
          height='auto'
          transform='scaleX(-1)' />
        <Heading as='h1' py='2rem' color='orange.700' textAlign='center' >Nothing to be found!</Heading>
        <Btn text='Back to Home' clickHandler={() => {
          navigate(LANDING_PAGE);
        }} />
      </Flex>
    </Container>
  );
};

export default NotFoundPage;
