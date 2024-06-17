// npm run start

import './App.css';
import React from 'react'
import Gallery from './Gallery'
import Home from './Home';
import Contact from "./Contact";
// import Cont from './Cont';
import About from './About';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
// import { Navbar } from 'react-bootstrap';

const App = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/gallery' element={<Gallery />} />
              <Route path='/contact' element={<Contact />}/>
            </Routes>
        </BrowserRouter>

     {/* <Gallery /> */}
     {/* <Home /> */}
    </> 
  );
}

export default App;
