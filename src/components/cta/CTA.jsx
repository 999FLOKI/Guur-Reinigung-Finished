import React from 'react';
import './cta.css';
import living_room from '../../assets/living_room.png';

const CTA = () => {
  return (
    <div className="guur__CTA" id="cta">
      <div className='guur__CTA-container'>
        <div className='guur__CTA-content'>
          <div className='guur__CTA-heading-wrapper'>
            <hr className='guur__CTA-hr' />
            <h2 className="guur__CTA-heading">
              Wie können wir Ihnen helfen? - Sprechen Sie uns gerne an!
            </h2>
          </div>
          
          <div className="guur__CTA-content_texts">
            <div>
              <p className='guur__CTA-text1-header'>Rufen Sie uns an</p>
              {/* <p className="guur__CTA-text1">Rufen Sie uns an, wenn Sie an unseren 
              Dienstleistungen interessiert sind.</p> */}
              <div className='guur__CTA-button1'>
              
                <button type="button" className='guur__CTA-text1-button'><a href={"tel:+4921747913267"}>+49 2174 7913 267 </a></button>
              </div>
            </div>
        
            <div>
              <p className='guur__CTA-text2-header'>E-Mail senden</p>
              {/* <p className="guur__CTA-text2">Schreiben Sie uns eine E-Mail, wenn unsere Dienstleistungen Sie neugierig machen</p> */}
              
              <div className='guur__CTA-button2'>
                  <a href="mailto:guur@gmail.com">
                      <button className='guur__CTA-text2-button'>
                        hello@guurhlp.com
                      </button>
                  </a>
              </div>

            </div>
          </div>
        </div>
        
        <div className="guur__CTA-img">
          <img src={living_room} alt="living room"/>
        </div>
      </div>
    </div>
  )
}

export default CTA;
