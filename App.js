import React, { useEffect} from 'react';
import {
  BrowserRouter,
  Routes, 
  Route
} from 'react-router-dom';
import Index from './components/Index';
import About from './components/About';
import BoardMembers from './components/BoardMembers';
import Contact from './components/Contact';
import Donate from './components/Donate';
import Events from './components/Events';
import News from './components/News';
import Volunteer from './components/Volunteer';
import Navbar from'./components/Navbar';
import Notfound from './components/Notfound';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = "Angels Bearing Gifts";
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
       <Navbar />
       <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/boardmembers" element={<BoardMembers />} />
          <Route path="/news" element={<News />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/events" element={<Events />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Notfound />} />
        </Routes>   
       </div> 
    </BrowserRouter> 
  );
}

export default App;
