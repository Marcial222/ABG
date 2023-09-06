import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
      <>
      <div className="nav-container">
      
      <nav className="navbar">
        <ul className="nav-body">
        <img className="angel" src={require('../img/angel_four.jpg')} alt="logo" />
          <li className="link-items"><Link to="/">Home</Link></li>        
          <li className="link-items"><Link to="about">About</Link></li>
          <li className="link-items"><Link to="/boardmembers">Board Members</Link></li>
          <li className="link-items"><Link to="/news">News</Link></li>
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