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

        <p className="no-margin section">
        <a href="https://github.com/systemsvanguard"><i className="fab fa-github-alt w3-hover-opacity" style={{color: '#00008b'}} title="GitHub"></i></a>
        <a href="https://stackoverflow.com/users/1247476/funtasticapps"><i className="fab fa-stack-overflow  w3-hover-opacity"  style={{color: '#ff8c00'}} title="StackOverflow"></i></a>
        <a href="https://stackexchange.com/users/1296565/funtasticapps"><i className="fab fa-stack-exchange w3-hover-opacity" style={{color: '#00008b}} title="StackExchange"></i></a>
        <a href="https://www.reddit.com/user/funtasticapps"><i className="fab fa-reddit-alien w3-hover-opacity" style={{color: '#b22222'}} title="Reddit"></i></a>
        <a href="https://www.linkedin.com/in/ryan-hunter-4a166013/"><i className="fab fa-linkedin  w3-hover-opacity" style={{color: '#00008b'}} title="LinkedIn"></i></a>
        <a href="https://www.meetup.com/members/41724382/"><i className="fab fa-meetup w3-hover-opacity" style={{color: '#ff0000'}} title="MeetUp"></i></a>
        </p>

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