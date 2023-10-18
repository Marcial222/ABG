import '../styles/Tagline.css';

const Tagline = () => {
    return (
      <div className="taglineContainer">
          <div className="tagline">
              <a href="tel:18058847222" target="_blank" rel="noreferrer">805.884.7222</a><a href="https://www.angelsbearinggifts.org" target="_blank" rel="noreferrer">
              <img src={require('../img/facebook.png')} alt="Find us on Facebook" /></a>
           </div>
    </div>
    );
  }

  export default Tagline;