import logo from './logo.svg';
import './App.css';
import './cssFiles/main.scss'
import Home from './home/home';
import Home2 from './home@/home2';
function App() {
  return (
    <div className="App main">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Home2 />
        <br /><br />
        <Home />
      </header>
    </div>
  );
}

export default App;
