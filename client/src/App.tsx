import React from 'react';
import {
  Route,
  Routes
} from 'react-router-dom';
import './App.css';
import Home from "./views/Home";
import Layout from "./views/Layout";
import LoginView from "./views/LoginView";
import RegistrationView from "./views/RegistrationView";
import CreateTopic from "./views/CreateTopic";

function App() {
  return <>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path='/login' element={<LoginView/>} />
        <Route path='/registration' element={<RegistrationView/>} />
        <Route path='/createTopic' element={<CreateTopic/>} />
      </Route>
    </Routes>
  </>;
}

export default App;
