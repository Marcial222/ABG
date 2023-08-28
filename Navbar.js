import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return ( 
      <nav className="navbar">
        <div className="navcontainer"> 
        <img src={require('../img/angel_four.jpg')} alt="logo" />    
          <div className="links">
          
            <Link to="/">About</Link>
            <Link to="/boardmembers">Board Members</Link>
            <Link to="/news">News</Link>
            <Link to="/volunteer">Volunteer</Link>
            <Link to="/Events">Events</Link>
            <Link to="/donate">Donate</Link>
            <Link to="/contact">Contact Us</Link>
        </div>
        
       </div>
       </nav>
     );
}
 
export default Navbar;