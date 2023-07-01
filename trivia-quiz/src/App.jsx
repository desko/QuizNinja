import './App.css';
import Container from './components/Container/Container';
import Logo from './components/Logo/Logo';
import {Route, Routes} from 'react-router-dom';
import {LANDING_PAGE, QUIZ_PAGE, NOT_FOUND} from '../src/common/routes';
import LandingPage from './pages/LandingPage/LandingPage';
import QuizPage from './pages/QuizPage/QuizPage';
import NotFoundPage from './pages/NotFound/NotFoundPage';

function App() {
  return (
    <div className="wrapper">
      <Container>
        <Logo />
        <Routes>
          <Route path={LANDING_PAGE} element={<LandingPage />} />
          <Route path={QUIZ_PAGE} element={<QuizPage />} />
          <Route path={NOT_FOUND} element={<NotFoundPage />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
