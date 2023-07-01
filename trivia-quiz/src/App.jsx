import './App.css';
import Container from './components/Container/Container';
import Logo from './components/Logo/Logo';
import {Route, Routes} from 'react-router-dom';
import {LANDING_PAGE, QUIZ_PAGE} from '../src/common/routes';
import LandingPage from './pages/LandingPage/LandingPage';
import QuizPage from './pages/QuizPage/QuizPage';

function App() {
  return (
    <div className="wrapper">
      <Container>
        <Logo />
        <Routes>
          <Route path={LANDING_PAGE} element={<LandingPage />} />
          <Route path={QUIZ_PAGE} element={<QuizPage />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
