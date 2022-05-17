// import logo from './logo.svg';
import './App.css';
import Log_in from './component/logIn';
import userName from './component/userName';
import password from './component/password';
import logIn from './component/Log_in';




function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        </a>
      </header> */}
      <div className='Log_in'>{Log_in()}</div>
      <div className='userName'>{userName()}</div>
      <div className='password'>{password()}</div>
      <div className='button'>{logIn()}</div>

    </div>
  );
}

export default App;
