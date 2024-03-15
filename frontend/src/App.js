import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from "react";
import Main from './components/Main'

import Navigationbar from './assets/navbar'
import ContactUs from './components/ContactUs'
import PrivacyPolicy from './pages/privacypolicy'


function App() {
  return (
    
    <BrowserRouter>
    <div className="App">
      <Navigationbar/>
      <Routes>
          {/* Make the Home the default page*/}
          <Route path='/' element={<Main/>} />
            {/* Component Routes */}
          <Route path='/main' element={<Main/>}></Route>
     
          <Route path='/contactus' element={<ContactUs/>}></Route>
          <Route path='/privacypolicy' element={<PrivacyPolicy/>}></Route>


      </Routes>
    </div>
    </BrowserRouter>



  );
}

export default App;
