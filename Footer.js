import { Link } from 'react-router-dom';
import './Footer.css';
import './Privacy.js';

const Footer = () => {
    return (    
      <footer className="footer">
        <ul>     
              <li><Link to="privacy">Privacy Policy |</Link></li>
              <li><Link to="accessibility">Accessibility</Link></li> 
        </ul>   
    </footer>
 );
}
 
export default Footer;