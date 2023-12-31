import {Heading, Flex} from '@chakra-ui/react';
import Btn from '../../components/Btn/Btn';
import {useNavigate} from 'react-router-dom';
import {LANDING_PAGE} from '../../common/routes';
import NotFound from '../../assets/img/NotFound.min.png';
import {Image} from '@chakra-ui/react';
import {useTitle} from '../../hooks/useTitle';
import {DOCUMENT_TITLE} from '../../common/constants';
import Section from '../../components/Section/Section';

const NotFoundPage = () => {
  const navigate = useNavigate();

  useTitle(DOCUMENT_TITLE.NOT_FOUND_PAGE);

  return (
    <Section>
      <Flex
        paddingBlock='2rem 5rem'
        flexDir='column'
        alignItems='center'>
        <Heading
          as='h1'
          py='2rem'
          color='orange.700'
          textAlign='center'>Nothing to be found!</Heading>
        <Image
          src={NotFound}
          alt='QuizNinja Logo'
          width={
            {
              base: '25.6rem',
              lg: '38.4rem',
            }
          }
          height='auto'
          transform='scaleX(-1)' />
        <Btn text='Back to Home' customStyle={
          {
            marginTop: '2rem',
          }
        } clickHandler={() => {
          navigate(LANDING_PAGE);
        }} />
      </Flex>
    </Section>
  );
};

export default NotFoundPage;
