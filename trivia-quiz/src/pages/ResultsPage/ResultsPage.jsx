import {useTitle} from '../../hooks/useTitle';
import ResultsController from '../../components/ResultsController/ResultsController';
import {DOCUMENT_TITLE} from '../../common/constants';

const ResultsPage = () => {
  useTitle(DOCUMENT_TITLE.RESULTS_PAGE);

  return (
    <ResultsController />
  );
};

export default ResultsPage;
