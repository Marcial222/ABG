import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
    return (    
      <footer className="footer">
        <div className="footer-container">
          <div className="copyright">
             <p><Link to="/">&#169;{`${year} Angels Bearing Gifts`}</Link></p>
          </div>
        <ul className="footer-ul">     
              <li className="footer-li"><Link to="privacy"> Privacy Policy |</Link></li>
              <li className="footer-li"><Link to="accessibility">&nbsp;Accessibility</Link></li> 
        </ul>
        <div className="credit">
          <p>Site build by plumstreet.design</p>
        </div>
      </div>
    </footer>
 );
}
 
export default Footer;