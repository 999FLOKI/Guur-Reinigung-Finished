import React, { useEffect } from 'react';
import './header.css';
import cleaningkit from "../../assets/cleaningkit.png";

const Header = () => {
    
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target); // Stop observing the element after it has been shown
        }
      });
    });
    
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

  }, []);
  return (
    <div className="guur__header gradient__bg" id="home">
      <div className='guur__header-child'>
        <div className='guur__header_top-container'>
          <div className="guur__header-content hidden">
            <h1>Reinigungs- und Immobilienservice Khorloo</h1>
            <p>Ganz gleich, ob Sie Ihre Immobilie reinigen, veräußern oder eine neue erwerben wollen, sind wir Ihr kompetenter und erfahrener Partner.</p>
            <p>Unsere Alltagshelfer unterstützen und begleiten Sie oder Ihre Angehörigen im Alltag und entlasten die Betreuungspersonen.</p>
          </div>  
          
          <div className='guur__header-image__wrapper'>
            <div className="guur__header-image hidden">
                {/* <div className="blurry-circle"></div> */}
                <img src={cleaningkit} alt="cleaning kit"></img>
              </div>
          </div>
          
        </div>
      </div>
    </div>         
  ) 
}
export default Header;
