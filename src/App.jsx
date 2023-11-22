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
import DouceAttentions from './pages/services/DouceAttentions';
import CelebrationIntermediaire from './pages/services/CelebrationIntermediaire';
import GrandeCelebration from './pages/services/GrandeCelebration';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/services" element={<DouceAttentions />} />
          <Route path="/services/douce-attention" element={<DouceAttentions />} />
          <Route path="/services/celebration-intermediaire" element={<CelebrationIntermediaire />} />
          <Route path="/services/grande-celebration" element={<GrandeCelebration />} />
          <Route path="/nous-joindre" element={<NousJoindre />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
