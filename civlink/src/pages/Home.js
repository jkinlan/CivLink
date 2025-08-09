import { Link } from 'react-router-dom';
import logo from '../civlink_logo.png';
import '../App.css';

export default function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Welcome to CivLink" />
        <p>
          Helping improve our society.
        </p>
      </header>
      <footer>
        <nav className="footer-container">
            <div className="footer-links">
                <Link to="/privacy-policy">Privacy</Link>
                <Link to="/cookies">Cookies</Link>
                <Link to="/termsconditions">T&Cs</Link>
                <Link to="/licence">Licence</Link>
            </div>
        </nav>
      </footer>
    </div>
  );
}