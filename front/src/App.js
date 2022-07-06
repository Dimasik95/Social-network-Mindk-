import React, {useState} from 'react';
import { Routes, Route } from "react-router-dom";
import Head from './containers/header';
import ArticlesContainer from "./containers/posts";
import ProfileContainer from "./containers/profile";
import UsersContainer from "./containers/users";
import AddArticle from './components/addArticle';
import authContext from './authContext';
import StartPage from './components/StartPage';

import './App.css';


function App() {
  
  const [userData, setUserData] = useState({
    authenticated: false,
    user: null,
    setUserData: () => {},
  });
  
  const changeContext = () => {
          setUserData({
                  authenticated: true,
                  user: {
                          iduser: 1,
                          name: 'Dmytro Yaroshenko',
                          email: 'yaroshenko@gmail.com',
                  },
                  setUserData
          });
  };


  return (
    <div>
        <authContext.Provider value={userData}>
        <Head />
        <Routes>
            <Route path='/' element={<StartPage />} />
            <Route path='/context' element={<div>Home Page <button onClick={changeContext}>Change context</button></div>} />
            <Route path='*' element={<div>Error 404</div>} />
            <Route path='/article' element={<AddArticle />} />
            <Route path='/articles' element={<ArticlesContainer />} />
            <Route path='/users' element={<UsersContainer />} />
            <Route path='/users/:iduser' element={<ProfileContainer />} />
        </Routes>
        </authContext.Provider>
    </div>
  );
}

export default App;