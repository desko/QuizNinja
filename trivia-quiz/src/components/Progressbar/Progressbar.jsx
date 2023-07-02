import {Box, Progress, Text} from '@chakra-ui/react';
import {useEffect} from 'react';
import {useState} from 'react';

const Progressbar = ({customStyle = {}, quizData}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress((quizData.filter((question) => question.selectedAnswer !== '' ? question : null).length /
    quizData.length) * 100);
  }, [quizData]);

  return (
    <Box style={customStyle}>
      <Text>Progress: {Math.round(progress)}%</Text>
      <Progress hasStripe value={progress} size='xl' colorScheme='orange' height='2rem' />
    </Box>
  );
};

export default Progressbar;
