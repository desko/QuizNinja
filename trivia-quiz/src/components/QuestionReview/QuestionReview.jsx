import {Heading, Card, Text, Grid, GridItem} from '@chakra-ui/react';
import {decode} from 'html-entities';

const QuestionReview = ( {question} ) => {
  return (
    <Card aria-label='Review-card' p='2rem' bgColor='gray.50' borderRadius='2rem' boxShadow='lg'>
      <Heading as='h4' pb='2rem'>{decode(question.question)}</Heading>
      <Grid templateColumns='1fr' gap='1rem'>
        {
          question.answers.map((ans, index) => {
            let bgColor = 'transparent';
            if (ans === question.correct_answer) {
              bgColor = 'green.100';
            }
            if ((ans === question.selectedAnswer) &&
              (ans !== question.correct_answer)) {
              bgColor = 'red.100';
            }

            return (
              <GridItem key={ans}>
                <Text
                  p='.5rem 2rem'
                  backgroundColor={bgColor}
                  borderRadius={'.5rem'}
                  border={ans === question.selectedAnswer && '.3rem solid'}
                  borderColor={ans === question.selectedAnswer && 'orange.400'}>
                  {decode(ans)}
                </Text>
              </GridItem>
            );
          })
        }
      </Grid>
    </Card>
  );
};

export default QuestionReview;
