import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
      <> 
      <p class="tagline"><a href="tel:18058847222" target="_blank" rel ="noreferrer">805.884.7222</a>
      <a href="https://www.angelsbearinggifts.org" target="_blank" rel ="noreferrer"><img className="facebook" src={require('../img/facebook.png')} alt="Find us on Facebook"/></a>
     </p>
      <nav className="navbar">
        <div className="navigation"> 
        <img className="angel" src={require('../img/angel_four.jpg')} alt="logo" />    
          <div className="links">
            <Link to="/">Home</Link>         
            <Link to="about">About</Link>
            <Link to="/boardmembers">Board Members</Link>
            <Link to="/news">News</Link>
            <Link to="/volunteer">Volunteer</Link>
            <Link to="/events">Events</Link>
            <Link to="/donate">Donate</Link>
            <Link to="/contact">Contact Us</Link>
        </div>        
       </div>
       </nav>
       </>
     );
}
 
export default Navbar;