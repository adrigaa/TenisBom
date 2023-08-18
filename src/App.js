import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <header className="App-header">
      <div className="Nav">
        <NavBar />
        <CartWidget />
        <ItemListContainer greeting="Bem-vindo à nossa loja!" />  
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
