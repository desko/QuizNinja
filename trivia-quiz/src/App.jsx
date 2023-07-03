import {lazy, Suspense} from 'react';
import './App.css';
import Container from './components/Container/Container';
import Logo from './components/Logo/Logo';
import {Route, Routes} from 'react-router-dom';
import {LANDING_PAGE, QUIZ_PAGE, NOT_FOUND, RESULTS_PAGE} from '../src/common/routes';
import Submitted from './hoc/Submitted';
import NotSubmitted from './hoc/NotSubmitted';
import {Spinner} from '@chakra-ui/react';
const LandingPage = lazy(() => import('./pages/LandingPage/LandingPage'));
const QuizPage = lazy(() => import('./pages/QuizPage/QuizPage'));
const NotFoundPage = lazy(() => import('./pages/NotFound/NotFoundPage'));
const ResultsPage = lazy(() => import('./pages/ResultsPage/ResultsPage'));


function App() {
  return (
    <div className="wrapper">
      <Container>
        <Logo />
        <Suspense fallback={<Spinner color='orange.400' size='xl' display='block' mx='auto' />}>
          <Routes>
            <Route path={LANDING_PAGE} element={<LandingPage />} />
            <Route path={QUIZ_PAGE} element={<NotSubmitted>
              <QuizPage />
            </NotSubmitted>} />
            <Route path={NOT_FOUND} element={<NotFoundPage />} />
            <Route path={RESULTS_PAGE} element={<Submitted>
              <ResultsPage />
            </Submitted>} />
          </Routes>
        </Suspense>
      </Container>
    </div>
  );
}

export default App;
