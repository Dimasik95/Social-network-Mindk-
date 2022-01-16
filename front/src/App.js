/* eslint-disable react/react-in-jsx-scope */
import { Routes, Route, useParams } from "react-router-dom";
import Head from './containers/header';

import AddArticle from './components/addArticle';
import Profile from './components/profile';
import Article from './components/article';


import logo from './logo.svg';
import './App.css';

function CheckId() {
  const { id } = useParams();
  const restrictions = {
    number: /^\d+$/,
    letter: /^[A-Z]+$/,
    file: /^\w+\.doc$|pdf$|jpeg$/
  }

  if (restrictions.number.test(id)) {
    return <div>Your number id is {id}</div> 
  } else if (restrictions.letter.test(id)) {
    return <div>You write only capital letters - {id}</div>
  } else if (restrictions.file.test(id)) {
    return <div>You want {id}-file</div>
  } else {
    return <div>Ooops, try again</div>
  }
}

function DATA() {
  const { data } = useParams();
  const now = new Date();
  const writeData = new Date(data);
  const restr = /^\d{4}([./-])\d{2}\1\d{2}$/;
  

  if (restr.test(data)) {
     if (now.getTime() > writeData.getTime()) {
			return <div>You write: {data}</div>
		}
		return <div>Write another data, pls</div>;
	}
	return <div>Wrong format</div>;
}

function App() {
 
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Head />
        <Routes>
            <Route path='/' element={<div>Home</div>} />
            <Route path='/articles' element={<Article />} />
            <Route path="/articles/:id" element={<CheckId />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/article' element={<AddArticle />} />
            <Route path='/date/:data' element={<DATA />} />
            <Route path='*' element={<div>EROR 404</div>} />
        </Routes>
    </div>
  );
}

export default App;