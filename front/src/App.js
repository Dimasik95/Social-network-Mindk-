import React, {useState, useEffect} from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Head from './containers/header';
import ArticlesContainer from "./containers/posts";
import ProfileContainer from "./containers/profile";
import UsersContainer from "./containers/users";
import AddArticle from './components/addArticle';
import authContext from './authContext';
import StartPage from './components/StartPage';
import ProtectedRoute from './components/routes/ProtectedRoute';
import GuestRoute from './components/routes/GuestRoute';

import './App.css';


function App() {
  
  const [userData, setUserData] = useState({
    authenticated: false,
    user: null,
    setUserData: () => {},
  });
  
  const data = JSON.parse(localStorage.getItem('auth'));

  useEffect(() => {
    if (data) {
      setUserData({ 
        authenticated: true, 
        userid: data.user.iduser,
        firstname: data.user.firstname,
        secondname: data.user.secondname})
    }
  }, [])

  return (
    <div>
        <authContext.Provider value={userData}>
        <Head />
        <Routes>
            <Route path='/' element={<Navigate to="/articles" replace />} />
            <Route path='/login' element={<GuestRoute><StartPage /></GuestRoute>} />
            <Route path='*' element={<div>Error 404</div>} />
            <Route path='/article' element={<ProtectedRoute><AddArticle /></ProtectedRoute>} />
            <Route path='/articles' element={<ProtectedRoute><ArticlesContainer /></ProtectedRoute>} />
            <Route path='/users' element={<ProtectedRoute><UsersContainer /></ProtectedRoute>} />
            <Route path='/users/:iduser' element={<ProtectedRoute><ProfileContainer /></ProtectedRoute>} />
        </Routes>
        </authContext.Provider>
    </div>
  );
}

export default App;