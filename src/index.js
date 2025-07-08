import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
//import App from './App';
import{BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Welcome from './include/Welcome';
import Nav1 from './pages/Nav1';
import Main from './pages/Main';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import CircleText from './pages/CircleText';


export default function App(){
    return(
      <>
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<Welcome/>}></Route>
              <Route path='nav1' element={<Nav1/>}/>
                <Route path='main' element={<Main/>}>
                <Route path='about' element={<About/>}/>
                <Route path='portfolio' element={<Portfolio/>}/>
                <Route path='contact' element={<Contact/>}/>
                <Route path='circleText' element={<CircleText/>}/>
                </Route>   
          </Routes>
        </BrowserRouter>
      </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);


