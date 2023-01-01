import logo from '../logo.svg';
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          👇Jesteś w <code>src/App.js</code>, a poniżej znajdziesz link do dokumentacji biblioteki React.👇
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          🔥↠Kliknij Mnie i łogień↞🔥
        </a>
      </header>
    </div>
  );
}

export default App;
