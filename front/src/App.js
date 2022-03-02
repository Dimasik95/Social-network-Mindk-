import { Routes, Route, useParams } from "react-router-dom";
import Head from './containers/header';

import AddArticle from './components/addArticle';

import logo from './logo.svg';
import './App.css';
import ArticlesContainer from "./containers/posts";
import ProfileContainer from "./containers/profile";
import UsersContainer from "./containers/users";
import FormContainer from './containers/form';


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
    <div>
        <img src={logo} className="App-logo" alt="logo" />
        <Head />
        <Routes>
            <Route path='/' element={<div>Home</div>} />
            <Route path="/articles/:id" element={<CheckId />} />
            <Route path='/article' element={<AddArticle />} />
            <Route path='/date/:data' element={<DATA />} />
            <Route path='*' element={<div>Error 404</div>} />
            <Route path='/articles' element={<ArticlesContainer />} />
            <Route path='/users' element={<UsersContainer />} />
            <Route path='/users/:iduser' element={<ProfileContainer />} />
            <Route path="/form" element={<FormContainer />}/>
        </Routes>
    </div>
  );
}

export default App;