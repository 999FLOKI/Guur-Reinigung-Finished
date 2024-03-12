import React, { useEffect } from 'react';
import vasekit from '../assets/vasekit.png';
import './module.css';

const Contact = ({ setShowRootComponents }) => {
  useEffect(() => {
    setShowRootComponents(false);
    return () => setShowRootComponents(true);
  }, [setShowRootComponents]);

  return (
    <div>
      <div className='pagesContainer'>
        <div className="background">
            <h1 className='pagesBasicStyles pagesH1'>Kontakt Page</h1>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div className="pagesContentContainer pagesIMG">
          <img src={vasekit} alt="vases"/>
          <div className="pagesGrid">
            <div className="pagesGridItem">
              <h3 className='pagesH2'>Soziale Medien</h3>
              <a href="https://twitter.com/Guur_Reinigungs" target="_blank" rel="noopener noreferrer" className='pagesParagraphContact'>X</a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className='pagesParagraphContact'>Instagram</a>
              <a href="https://www.linkedin.com/in/guur-reinigungs-und-immoservice-277a952b8/" target="_blank" rel="noopener noreferrer" className='pagesParagraphContact'>Linkedin</a>
              <a href="https://www.facebook.com/profile.php?id=61554154070802" target="_blank" rel="noopener noreferrer" className='pagesParagraphContact'>Facebook</a>
            </div>
            <div className="pagesGridItem">
              <h3 className='pagesH2'>Kontakt</h3>
              <a href="mailto:guureuro@gmail.com" className='pagesParagraphContact'>hello@guurhlp.com</a>
              <a className='guur__navbar-sign_dropdownItem' href={"tel:+4921732640301"}>+49 2174 7913 267</a>
              <p>Telefonisch erreichbar von 08:00 bis 18:00 Uhr </p>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default Contact;
