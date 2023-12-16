import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Error from './Components/Error'
import Header from './Components/Header'
import About from './pages/About' 
import Music from './pages/Music';

  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='Music' element={<Music />} />
          <Route path='/About' element={<About/>}/>
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
  )
  

