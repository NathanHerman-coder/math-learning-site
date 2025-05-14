import React from 'react';
import './App.css'
import Home from './pages/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Cours from './pages/Cour';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cours" element={<Cours/>}/>
      </Routes>
    </Router>
  );
}
  export default App;
