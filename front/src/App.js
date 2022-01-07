import MyDateContainer from './containers';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         <MyDateContainer
            firstName= 'Dima'
            lastName = 'Yaroshenko'
            bday = '05.09.1995'
         />
        </p>
      </header>
    </div>
  );
}

export default App;