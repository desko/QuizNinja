import QuizController from '../../components/QuizController/QuizController';
import {useTitle} from '../../hooks/useTitle';
import {useAlert} from '../../hooks/useAlert';
import {ALERT_MESSAGE, DOCUMENT_TITLE} from '../../common/constants';
import Section from '../../components/Section/Section';

const QuizPage = () => {
  useTitle(DOCUMENT_TITLE.QUIZ_PAGE);
  useAlert(ALERT_MESSAGE);

  return (
    <Section>
      <QuizController />
    </Section>
  );
};

export default QuizPage;
