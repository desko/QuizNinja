import {Card, Grid, GridItem} from '@chakra-ui/react';
import {NavLink} from 'react-router-dom';
import ConfirmationModal from '../ConfiramtionModal/ConfirmationModal';

const QuizNavigation = ({customStyle = {}, quizData, submitHandler, questionNumber}) => {
  return (
    <Card
      aria-label='Quiz Navigation'
      flexDirection='column'
      justifyContent='space-between'
      gap='2rem'
      border={'.3rem solid'}
      borderColor='orange.400'
      borderRadius='2rem'
      p='2rem'
      {...customStyle}>
      <Grid
        m={
          {
            base: '-2rem',
            md: '0',
          }
        }
        p={
          {
            base: '2rem',
            md: '0',
          }
        }
        templateColumns={
          {
            base: 'repeat(auto-fill, minmax(3.6rem, 1fr))',
            md: 'repeat(5, 1fr)',
          }
        }
        autoFlow={
          {
            base: 'column',
            md: 'initial',
          }
        }
        autoColumns={
          {
            base: 'minmax(3.6rem, 1fr)',
            md: 'initial',
          }
        }
        overflowX={
          {
            base: 'auto',
            md: 'initial',
          }
        }
        gap='1rem'>
        {quizData.map((question, index) => {
          const selected = {};
          let buttonStyle = {
            color: 'var(--chakra-colors-orange-600)',
          };
          if (question.selectedAnswer) {
            buttonStyle = {
              backgroundColor: 'var(--chakra-colors-orange-400)',
              color: 'var(--chakra-colors-white)',
            };
          }
          if (Number(questionNumber) === index + 1) {
            selected.boxShadow = '0 0 1rem .2rem var(--chakra-colors-orange-400)';
          }

          return (
            <GridItem
              key={index}
              transition='box-shadow .4s'
              _hover={
                {
                  borderRadius: '.5rem',
                  boxShadow: '0 0 1rem .2rem var(--chakra-colors-orange-400)',
                }
              }
            >
              <NavLink to={`/quiz/questions/${index + 1}`}
                style={{
                  display: 'inline-flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  ...buttonStyle,
                  ...selected,
                  border: '.3rem solid',
                  borderColor: 'var(--chakra-colors-orange-400)',
                  borderRadius: '.5rem',
                  aspectRatio: '1/1',
                  userSelect: 'none',
                  transition: 'background-color .4s, color .4s',
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
