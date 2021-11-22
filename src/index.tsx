import React from 'react';
import ReactDOM from 'react-dom';
import { Home, Dashboard, SignIn } from './components';
import reportWebVitals from './reportWebVitals';
import './styles.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={ <Home title = {'Car Collections'}/>} />
        <Route path = '/dashboard' element = { <Dashboard />} />
        <Route path = '/signin' element = { <SignIn />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
