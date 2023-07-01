import {Card, Grid, GridItem} from '@chakra-ui/react';
import {useContext} from 'react';
import {QuizContext} from '../../context/QuizContext';
import {NavLink} from 'react-router-dom';

const Navigation = ({customStyle = {}}) => {
  const {quizData} = useContext(QuizContext);
  console.log(quizData);


  return (
    <Card
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
          console.log(index);
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

    </Card>
  );
};

export default Navigation;
