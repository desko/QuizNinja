import './App.css';
import Container from './components/Container/Container';
import Logo from './components/Logo/Logo';
import {Route, Routes} from 'react-router-dom';
import {LANDING_PAGE} from '../src/common/routes';
import LandingPage from './pages/LandingPage/LandingPage';

function App() {
  return (
    <div className="wrapper">
      <Container>
        <Logo />
        <Routes>
          <Route path={LANDING_PAGE} element={<LandingPage />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
