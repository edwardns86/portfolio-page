import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navi from './components/Nav'
import Masthead from './components/Masthead'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import About from './components/About'
import Footer from './components/Footer'

library.add(fab, faCheckSquare, faCoffee)

function App() {
    
  return (
    <div>
    <Navi />
    <div className="App">
      
      <Masthead />
    
        
        <Skills /> 
        
      
        
        <Projects /> 
        
      
        
        <Contact /> 
        
      
        
        <About /> 
        
      
        
        <Footer /> 
      
     </div>
     </div>
  );
}




export default App;
