import React, { useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';

import SmoothScrollAnchor from './SmoothScrollAnchor';

import { UilBars } from '@iconscout/react-unicons';
import logo from "../../assets/logo.png";
import teddy from "../../assets/teddy.png";
import './navbar.css'; 

// LEARN MORE ABOUT BEM

const Menu = ({ handleCloseNavbar}) => (
  
  <>

    <p><SmoothScrollAnchor onClick={() => handleCloseNavbar()} id="services" targetId="services">SERVICE</SmoothScrollAnchor></p>
    <p><SmoothScrollAnchor onClick={() => handleCloseNavbar()} id="owner" targetId="owner">ÜBER UNS</SmoothScrollAnchor></p>
    <p><Link to="/carrier" onClick={()=> handleCloseNavbar()}>KARRIERE</Link></p>
    <p><SmoothScrollAnchor onClick={() => handleCloseNavbar()} id="reason" targetId="reason">STANDORTE</SmoothScrollAnchor></p>
    <p><Link to="/faq" onClick={()=> handleCloseNavbar()}>FRAGEN</Link></p>

    <a href={"tel:+492174791326"} className='guur__navbar-dropdown_button1'>+49 2174 7913 267</a>
    <a  
        href="mailto:hello@guurhlp.com" 
        className='guur__navbar-dropdown_button2'>
        hello@guurhlp.com
    </a>
  </>
)


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  const handleCloseNavbar = ()=> {
    setCloseDropdown(false);
    setOpen(false);
    setToggleMenu(false);
  }
  //Closing click
  const [closeDropdown, setCloseDropdown] = useState(false)
  const navbarRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setScrolled(scrollTop > 0);
      setOpen(false);
      setToggleMenu(false);

    };

    const handleClickOutside = (event) => {
      const clickedInsideNavbar = event.target.closest('.guur__navbar');
      const clickedInsideMenu = event.target.closest('.guur__navbar-menu_container-links');
      const clickedButton = event.target.closest('.guur__navbar-sign_button');
      const clickedMenu = event.target.closest('.guur__navbar-menu')
    
      if (!clickedInsideNavbar || (!clickedInsideMenu && !clickedButton && !clickedMenu)) {
        handleCloseNavbar()
      }
    }

    window.addEventListener('click', handleClickOutside)
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('click', handleClickOutside)
      window.removeEventListener('scroll', handleScroll);

    };
  }, [closeDropdown]);

  // Removing The Kontakt/ Open = drop down Menu with this Handler
  const handleKontakt = () => {
    setOpen(false)

  };

  // Remove the setToggleMenu or menu Button 
  const handleMenu = () => {
    setToggleMenu(false)

 
  };


  return (
    <div >
    <div ref={navbarRef} className={`guur__navbar ${scrolled ? 'guur__navbar-scrolled' : ''}`}>
      <div className="guur__navbar-links">
        <a className="guur__navbar-links-logo" href="/">
          <img src={logo} alt="logo" />
        </a>
        
        <div className="guur__navbar-links_container">

        <p><SmoothScrollAnchor onClick={() => handleCloseNavbar()} id="services" targetId="services">SERVICE</SmoothScrollAnchor></p>
        <p><SmoothScrollAnchor onClick={() => handleCloseNavbar()} id="owner" targetId="owner">ÜBER UNS</SmoothScrollAnchor></p>
        <p><Link to="/carrier" onClick={()=> handleCloseNavbar()}>KARRIERE</Link></p>
        <p><SmoothScrollAnchor onClick={() => handleCloseNavbar()} id="reason" targetId="reason">STANDORTE</SmoothScrollAnchor></p>
        <p><Link to="/faq" onClick={()=> handleCloseNavbar()}>FRAGEN</Link></p>
        
        </div>
      </div>
      <div  className="guur__navbar-sign"  onClick={() => {setOpen(!open); handleMenu();}}>
        <button className="guur__navbar-sign_button" type="button">KONTAKT</button>
      </div>
      {/* MOBILE RESPONSIVE MENU BUTTON */}
      <div  onClick={handleKontakt} className="guur__navbar-menu">
        {toggleMenu
          ? < UilBars color="#fff" size={27} onClick={() => setToggleMenu(false) } />
          : < UilBars color="#fff" size={27} onClick={() => setToggleMenu(true) } />
        }
        {toggleMenu && (
          <div className="guur__navbar-menu_container scale-up-center">
            <div className="guur__navbar-menu_container-links"> 
              <Menu handleCloseNavbar={handleCloseNavbar} className="guur_navbar-menu_container-links"/>
              <div className="guur__navbar-menu_container-links-sign" >
                <button type="button">KONTAKT</button>
              </div>
            </div>
            <img src={teddy} alt='teddy' className='teddy'></img>
          </div>
        )}
      </div>

      <div className={`guur__navbar-sign_dropdown ${open? 'active' : 'inactive'}`}>
        <ul>
          <li><a className='guur__navbar-sign_dropdownItem' href={"tel:+4921732640301"}>RUFEN SIE UNS AN</a></li>
          <li><a className='guur__navbar-sign_dropdownItem' href={"mailto:guur@gmail.com"}>SCHREIBEN SIE E-MAIL</a></li>
          <li><Link className='guur__navbar-sign_dropdownItem' to="/contact">KONTAKT PAGE</Link></li>


          <img src={teddy} alt='teddy' className='teddy'></img>
          {/* <DropdownItem text={"Rufen Sie uns an"} href={"tel:123456789"}/>
          <DropdownItem text={"E-mail Schreiben"} href={"mailto:guur@gmail.com"}/> */}
        </ul>
      </div>

    </div>
    </div>
  )
}

// function DropdownItem(props){
//   return(
//      <li className='guur__dropdown-item'>
//         <a href={props.href}> {props.text}</a>
//      </li>
//   );
// }

export default Navbar;
