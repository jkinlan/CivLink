import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import FixMyStreet from './pages/FixMyStreet';
import Petitions from './pages/Petitions';
import logo from './civlink_logo.png';

export default function App() {
  return (
    <Router>
      <header class="site-header">
      <img src={logo} className="App-logo" alt="Welcome to CivLink" />
      </header>
      <nav className="menu">
        <Link to="/FixMyStreet">Report Issues</Link>
        <Link to="/Petitions">Petitions</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FixMyStreet" element={<FixMyStreet />} />
        <Route path="/Petitions" element={<Petitions />} />
      </Routes>
    </Router>
  );
}
