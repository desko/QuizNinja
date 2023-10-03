import {useTitle} from '../../hooks/useTitle';
import ResultsController from '../../components/ResultsController/ResultsController';
import {DOCUMENT_TITLE} from '../../common/constants';
import Section from '../../components/Section/Section';

const ResultsPage = () => {
  useTitle(DOCUMENT_TITLE.RESULTS_PAGE);

  return (
    <Section>
      <ResultsController />
    </Section>
  );
};

export default ResultsPage;
