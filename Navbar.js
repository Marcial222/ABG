import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
      <>
      {/* Desktop menu */}
      <div className="nav-container">  
      <div className="tagline">
        <a href="tel:18058847222" target="_blank" rel="noreferrer">(805) 884-7222</a>
        <a href="https://www.angelsbearinggifts.org" target="_blank" rel="noreferrer">
          <img className="social" src={require('../img/facebook.png')} alt="Find us on Facebook"/>
        </a>     
      </div>  
      <nav>      
        <ul className="nav-body">   
        <img className="angel" src={require('../img/angel_four.jpg')} alt="cute angel" />   
          <li className="nav-link"><Link to="/">Home</Link></li>        
          <li className="nav-link"><Link to="/about">About</Link></li>
          <li className="nav-link"><Link to="/boardmembers">Board Members</Link></li>
          <li className="nav-link"><Link to="/testimonials">Testimonials</Link></li>
          <li className="nav-link"><Link to="/volunteer">Volunteer</Link></li>
          <li className="nav-link"><Link to="/events">Events&nbsp;&#9660;</Link>
              <ul>
                <li className="nav-link"><Link to="/wrapping">Annual Wrapping Parties</Link></li>
                <li className="nav-link"><Link to="/delivery">Holiday Deliveries</Link></li>
              </ul>
          </li>
          <li className="nav-link"><Link to="/donate">Donate</Link></li>
          <li className="nav-link"><Link to="/contact">Contact Us</Link></li>
        </ul>      
       </nav>
      </div>
    </>
  );
}
 
export default Navbar;