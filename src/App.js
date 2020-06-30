import React,{useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

import api from './Services/Api'

function App() {
  const [countShips, setCountShips] = useState(null)
  useEffect( () => {
    api.get('/starships/').then(data => {
      console.log(data)
      setCountShips(data.data)
    });
  },[]);
  async function handleApiRequest(){
    }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          {countShips && countShips.count}
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
