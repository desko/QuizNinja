import {Box, Progress, Text} from '@chakra-ui/react';
import {useContext, useEffect} from 'react';
import {QuizContext} from '../../context/QuizContext';
import {useState} from 'react';

const Progressbar = ({val = 0}) => {
  const {quizData} = useContext(QuizContext);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress((quizData.filter((question) => question.selectedAnswer !== undefined ? question : null).length /
    quizData.length) * 100);
  }, [quizData]);

  return (
    <Box>
      <Text>Progress: {Math.round(progress)}%</Text>
      <Progress hasStripe value={progress} size='xl' colorScheme='orange' height='2rem' />
    </Box>
  );
};

export default Progressbar;
