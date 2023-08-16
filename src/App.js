import logo from './logo.svg';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <header className="App-header">
      <div className="Nav">
        <NavBar />
        <div className="content">
      </div>
      </div>
      <img src={logo} className="App-logo" alt="logo" />
      <div>
      </div>
    </header>
  );
}

export default App;
