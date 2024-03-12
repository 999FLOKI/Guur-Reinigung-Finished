import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import { footerLinks, socialMedia } from './index.js';
import logo from '../../assets/logo.png';

const Footer = () => (
  <section  className="guur__footer">
      <div className="guur__footer-content">
        <div>
          <a href="/">
            <img src={logo} alt="guur" className='guur__footer-logo' />
          </a>
        </div>

        <div className="guur__footer-links">
          {footerLinks.map((footerLink) => (
            <div key={footerLink.id} className="guur__footer-link_style">
              <h4  className='guur__footer-link-style_title'>
                <Link key={footerLink.id} to={footerLink.link}>{footerLink.title}</Link>
              </h4>
            </div>
          ))}
        </div>

        <div className='guur__footer-socials'>
          {socialMedia.map((social) => (
            <a key={social.id} href={social.link} target="_blank" rel="noopener noreferrer">
              <img 
                key={`img-${social.id}`} 
                src={social.icon}
                alt={social.id}
                className={`guur__footer-social_style ${social.className}`}
              />
            </a>        
          ))}
        </div>

      </div>
    <hr className='guur__footer-hr'/>

    <div className='guur__footer-bottom'>
        <p>Copyright 2023 Guur. All Rights Reserved.</p>
    </div>
  </section>
)

export default Footer;
