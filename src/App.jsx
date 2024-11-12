// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import  About  from '../pages/About';
import {Blog} from '../pages/Blog';
import {Contact} from '../pages/Contact';
import CakeContainer from './components/CakeContainer';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CakeContainer/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
