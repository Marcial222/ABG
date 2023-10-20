import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Tagline from './components/Tagline';
import Home from './components/Home';
import About from './components/About';
import BoardMembers from './components/BoardMembers';
import Contact from './components/Contact';
import Donate from './components/Donate';
import Delivery from './components/Delivery';
import Events from './components/Events';
import Testimonials from './components/Testimonials';
import Volunteer from './components/Volunteer';
import OfficeHours from './components/OfficeHours';
import Privacy from './components/Privacy';
import Accessibility from './components/Accessibility';
import Notfound from './components/Notfound';
import Footer from './components/Footer';

export const routing = (
  <>    
    <Tagline />
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/boardmembers" element={<BoardMembers />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/events" element={<Events />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/officehours" element={<OfficeHours />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route exact path="privacy" element={<Privacy />} />
          <Route path="accessibility" element={<Accessibility />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
        
        <Footer />
      </div>
    </BrowserRouter>
  </>
);
