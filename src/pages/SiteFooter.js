//src/pages/SiteFooter.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import Spacer from '../app/images/spacer.png';

const SiteFooter = () => {

  return(
    <footer>
      <div className="content">
        <h6 className="u-text-center">Code Portfolio ~ RyanHunter.org</h6>
        <br />



        <p className="uppercase font-semibold no-margin">Copyright <strong><em><a href="http://www.ryanhunter.ca/">RyanHunter.org</a></em> 2020</strong></p>
        <p className="uppercase font-semibold no-margin">
          <NavLink to="/home">Shopping List</NavLink> |
          <NavLink to="/services">Services</NavLink> |
          <NavLink to="/about">About Us</NavLink> |
          <NavLink to="/contact">Contact Us</NavLink>
        </p>
      </div>
    </footer>
  )
}

export default SiteFooter;