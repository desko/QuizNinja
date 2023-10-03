import {Card, CardHeader, Heading, Flex} from '@chakra-ui/react';
import Btn from '../Btn/Btn';
import {useNavigate} from 'react-router-dom';

const ErrorCard = () => {
  const navigate = useNavigate();

  const reloadPage = () => {
    navigate(0);
  };

  return (
    <Card
      p='4rem'
      border='.3rem solid'
      borderColor='orange.400'
      borderRadius='2rem'>
      <CardHeader pb='4rem'>
        <Heading
          as='h2'
          color='orange.600'
          fontWeight='700'
          textAlign='center'>
            Error loading data. Please try again.
        </Heading>
      </CardHeader>

      <Flex alignItems='center' justifyContent='center'>
        <Btn text='Reload' clickHandler={reloadPage} />
      </Flex>
    </Card>
  );
};

export default ErrorCard;
