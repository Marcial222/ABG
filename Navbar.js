import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
      <>
      <div className="nav-container">  
      <div className="tagline">
        <a href="tel:18058847222" target="_blank" rel="noreferrer">805.884.7222</a>
        <a href="https://www.angelsbearinggifts.org" target="_blank" rel="noreferrer">
          <img src={require('../img/facebook.png')} alt="Find us on Facebook"/>
        </a>     
      </div>  
      <nav className="navbar">
        <ul className="nav-body">        
        <img className="angel" src={require('../img/angel_four.jpg')} alt="logo" />
          <li className="link-items"><Link to="/">Home</Link></li>        
          <li className="link-items"><Link to="about">About</Link></li>
          <li className="link-items"><Link to="/boardmembers">Board Members</Link></li>
          <li className="link-items"><Link to="/testimonials">Testimonials</Link></li>
          <li className="link-items"><Link to="/volunteer">Volunteer</Link></li>
          <li className="link-items"><Link to="/events">Events</Link></li>
          <li className="link-items"><Link to="/donate">Donate</Link></li>
          <li className="link-items"><Link to="/contact">Contact Us</Link></li>
        </ul>      
       </nav>
    </div>
    </>
  );
}
 
export default Navbar;