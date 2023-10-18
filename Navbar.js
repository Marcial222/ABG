import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
      <>      
      <nav>      
        <ul className="nav-body">   
        <img className="angel" src={require('../img/angel_four.jpg')} alt="cute angel" />   
          <li className="nav-link"><Link to="/">Home</Link></li>        
          <li className="nav-link"><Link to="/about">About</Link></li>
          <li className="nav-link"><Link to="/boardmembers">Board Members</Link></li>
          <li className="nav-link"><Link to="/testimonials">Testimonials</Link></li>
          <li className="nav-link"><Link to="/volunteer">Volunteer</Link></li>
          <li className="nav-link"><Link to="/events">Events&nbsp;&#9660;</Link></li>
          <li className="nav-link"><Link to="/donate">Donate</Link></li>
          <li className="nav-link"><Link to="/contact">Contact Us</Link></li>
        </ul>      
       </nav>
    </>
  );
}
 
export default Navbar;