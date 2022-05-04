import logo from './holberton logo.jpg';
import {getFullYear, getFooterCopy} from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <body className='App-body'>
        <p>Login to access the full dashboard</p>
        <label for="email">Email</label>
        <input type="text" id="email"/>
        <label for="password">Email</label>
        <input type="password" id="password"/>
        <button>OK</button>
      </body>
      <footer className='App-footer'>
        <p>Copyright {getFullYear()} - {getFooterCopy('true')}</p>
      </footer>
    </div>
  );
}

export default App;
