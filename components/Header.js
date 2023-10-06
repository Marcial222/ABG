import { Link } from 'react-router-dom';

import Navbar from './Navbar';

const Header = () => {
    return (
        <header>
          <div className="nav-area">
            <Link to="/" className="logo">
            <img className="angel" src={require('../img/angel_four.jpg')}
            alt="cute angel" />        
            </Link>
            <Navbar />        
          </div>
        </header>
    );
};

export default Header;




