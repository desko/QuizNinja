import {Card, Grid, GridItem} from '@chakra-ui/react';
import {NavLink} from 'react-router-dom';
import ConfirmationModal from '../ConfiramtionModal/ConfirmationModal';

const QuizNavigation = ({customStyle = {}, quizData, submitHandler}) => {
  return (
    <Card
      flexDirection='column'
      justifyContent='space-between'
      gap='2rem'
      border={'.3rem solid'}
      borderColor='orange.400'
      borderRadius='2rem'
      boxShadow=''
      p='2rem'
      mt='2rem'
      style={customStyle}>
      <Grid templateColumns='repeat(5, 1fr)' gap='1rem'>
        {quizData.map((question, index) => {
          let buttonStyle = {
            borderColor: 'var(--chakra-colors-orange-400)',
            color: 'var(--chakra-colors-orange-600)',
          };
          if (question.selectedAnswer) {
            buttonStyle = {
              borderColor: 'var(--chakra-colors-orange-400)',
              backgroundColor: 'var(--chakra-colors-orange-400)',
              color: 'var(--chakra-colors-white)',
            };
          }
          return (
            <GridItem key={index}
            >
              <NavLink to={`/quiz/questions/${index + 1}`}
                style={{
                  display: 'inline-flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  ...buttonStyle,
                  border: '.3rem solid',
                  borderRadius: '.5rem',
                  aspectRatio: '1/1',
                }}
              >
                {index + 1}
              </NavLink>
            </GridItem>
          );
        })}
      </Grid>
      <ConfirmationModal submitHandler={submitHandler} />
    </Card>
  );
};

export default QuizNavigation;
