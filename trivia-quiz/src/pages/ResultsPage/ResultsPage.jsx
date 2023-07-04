import {useTitle} from '../../hooks/useTitle';
import ResultsController from '../../components/ResultsController/ResultsController';

const ResultsPage = () => {
  useTitle(`QuizNinja - Your Results`);

  return (
    <ResultsController />
  );
};

export default ResultsPage;
