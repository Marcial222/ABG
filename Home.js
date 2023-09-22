import { Link } from 'react-router-dom';
import './Home.css';  

const Home  = () => {
    return (
    <>
    <div className="index-container">
      <div className="index-text">
        <p>Click here for Holiday Info 2023</p>
        <p>Angels Bearing Gifts brings happiness to people with developmental disabilities 
          who have no one to remember them by providing gifts on birthdays and holidays.</p>
        <p className="like-a-button"><Link to="/about">Learn More</Link></p>
      </div>
        <p><img src={require ('../img/gifts.jpg')} alt="Wrapping Christmas gifts" /></p>
      </div>
      <div className="story-container">
        <div className="text-container">
          <h1>Angels Bearing Gifts</h1>
          <h2>Our Story</h2>
          <h3>We fly on the wings of your generosity.</h3>
          <p>Angels Bearing Gifts is the story of a mother whose adult child is developmentally disabled. What if I were not here to celebrate her birthday she wondered—who would? 
          This mother became an activist when she learned that there are hundreds of adults with developmental disabilities in Santa Barbara County who have outlived 
          their families or whose families have withdrawn from their lives.</p>
          <p>Evelynn Smith started Angels Bearing Gifts in 1999, delivering December holiday presents to nine individuals with developmental disabilities
            who would have otherwise gone unremembered. 
            Today there are over 200 beneficiaries to whom we declare “you are special” by remembering them on their birthdays, Valentine’s Day, Hanukkah, and Christmas.</p>
          <p>We are grateful for the enthusiasm of our community and their generosity in supporting our mission.</p>
        </div>
        <div className="gift-container">

        </div>
      </div>


  
  
        
    
        
    
    </>
                    
            
     );
}
 
export default Home ;