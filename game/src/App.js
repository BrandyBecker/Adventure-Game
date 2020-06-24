import React from 'react';
import './App.css';
import Nav from './components/nav/nav'
import { Route } from "react-router-dom"; 
import Home from './components/home';
import Game from './components/game';
import Faq from './components/faq';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Nav/>
        <Route exact path='/' component={Home} />
        <Route exact path='/game' component={Game} />
        <Route exact path='/faq' component={Faq} />
      <Footer/>
    </div>
  );
}

export default App;
