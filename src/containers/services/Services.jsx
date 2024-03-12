import React from 'react';
import './services.css';
import mop from "../../assets/mop.png";
import groceries from "../../assets/groceries.png";
import lawn from "../../assets/lawn.png";
import { Slider } from '../services/Slider.js';

const Services = () => {
  return (
    
    <div className="guur__services" id="services">
      <Slider/>
      <div className="guur__services-child">
      
      <div className="guur__services-cleaning">
        <div className='guur__services-image_container'>
          <div className="guur__services-image_background"></div>
          <img src={mop} alt="mop" className="guur__services-image_mop" />
        </div>
        <h2 className="guur__services-titles2">Reinigunsservice</h2>
        <div className="guur__services-paragraph1">
          <ul>
            <li>Grundreinigung</li>
            <li>Standardreinigung</li>
            <li>Fensterreinigung</li>
            <li>Unterhaltsreinigung</li>
            <li>Treppenhausreinigung</li>
            <li>Gartenarbeiten</li>

          </ul>
        </div>
      </div>

      <div className="guur__services-outdoor">
        <div className='guur__services-image_container'>
          <div className="guur__services-image_background"></div>
          <img src={lawn} alt="groceries" className="guur__services-image_lawn" />
        </div>
          <h2 className="guur__services-titles2">Immobilienservice</h2>
          <div className="guur__services-paragraph1">
            <ul>
              <li>Housekeeping <br />(während Urlaub und Abwesenheit)</li>
              <li>Umzug</li>
              <li>Entrümpelung</li>
              <li>Unterstützung bei Verkauf <br/>oder Kauf Ihrer Immobilie</li>
            </ul>
          </div>
      </div>

      <div className="guur__services-shopping">
        <div className='guur__services-image_container'>
          <div className="guur__services-image_background"></div>
          <img src={groceries} alt="lawn" className="guur__services-image_groceries" />
        </div>
          <h2 className="guur__services-titles2">Alltagshilfe</h2>
          <div className="guur__services-paragraph1">
            <ul>
              <li>Haushaltstätigkeiten</li>
              <li>Einkaufserledigungen</li>
              <li>Kochen und Backen</li>
              <li>Spaziergänge</li>
              <li>Indiviuelle Tätigkeiten</li>
              <li>und weiteres</li>
            </ul>
          </div>
      </div>

      </div>
    </div>
  )
}

export default Services;