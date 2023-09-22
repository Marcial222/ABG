import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter,
  Routes, 
  Route
} from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import About from './components/About';
import BoardMembers from './components/BoardMembers';
import Contact from './components/Contact';
import Donate from './components/Donate';
import Delivery from './components/Delivery';
import Events from './components/Events';
import Testimonials from './components/Testimonials';
import Volunteer from './components/Volunteer';
import Wrapping from './components/Wrapping';
import Navbar from'./components/Navbar';
import Privacy from './components/Privacy';
import Accessibility from './components/Accessibility';
import Notfound from './components/Notfound';
import Footer from './components/Footer';

const routing = (
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
          <Route path="/wrapping" element={<Wrapping />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route exact path="privacy" element={<Privacy />} />
          <Route path="accessibility" element={<Accessibility />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
        <Footer />  
       </div>  
  </BrowserRouter>
)

ReactDOM.render(routing, document.getElementById('root'));
     <React.StrictMode>
        <App />
     </React.StrictMode>
