import React, { useEffect} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  useEffect(() => {
    document.title = "Angels Bearing Gifts";
  }, []);
  return (
    <main>
       <Header />
       <Home />
       <Footer />
    </main>
  );
}

export default App;