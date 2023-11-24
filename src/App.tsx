import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import './App.css';
import Counter from './components/Counter';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/register' Component={Register}></Route>
        <Route path='/login' Component={Login}></Route>
        <Route path='/dashboard' Component={Dashboard}></Route>
        <Route path='/' Component={Counter}></Route>
      </Routes>
    </Router>
  );
}

export default App;
