import React from 'react';
import { BrowserRouter as  Router, Route } from 'react-router-dom';
import './App.css';
import Homepage from './Page/Home';
import Loginpage from './Page/Login page';
import SignUpPage from './Page/Sign up page';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/' exact component = {Homepage} />
        <Route path='/login' component = {Loginpage}/>
        <Route path='/signup' component = {SignUpPage}/>
      </Router>
    </div>
  );
}

export default App;
