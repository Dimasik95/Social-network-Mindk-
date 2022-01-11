import Head from './containers/header';
import Body from './containers/body';

import {useState} from 'react';

import logo from './logo.svg';
import './App.css';

function App() {
   
  const [page, setPage] = useState('article');

  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
       <Head setPage={setPage} />
       <Body page={page} />
    </div>
  );
}

export default App;