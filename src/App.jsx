import './assets/css/App.css';
import Home from './pages/Home';
import NousJoindre from './pages/NousJoindre';
import APropos from './pages/APropos';
import NoPage from './pages/NoPage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/nous-joindre" element={<NousJoindre />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
