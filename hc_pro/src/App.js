import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './Components/Landing';
import Home from './Components/Home';
// import $ from 'jquery'; // Import jQuery
// import 'owl.carousel/dist/assets/owl.carousel.css'; // Import Owl Carousel CSS
// import 'owl.carousel'; // Import Owl Carousel JS
import '../src/Components/slick.css'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../src/Components/styles.css'; // Import your custom CSS for animations
import VisitorList from './Components/VisitorList';
import UserForm from './Components/UserForm';
import FormDetails from './Components/FormDetails';
import FormDetails2 from './Components/FormDetails2';
import Edit from './Components/Edit';
import Contact from './Components/Contact';
function App() {  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/VisitorList" element={<VisitorList />} />
          <Route path="/UserForm" element={<UserForm />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/FormDetails/:id" element={<FormDetails />} />
          <Route path="/FormDetails2/:id" element={<FormDetails2 />} />
          <Route path="/Edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
