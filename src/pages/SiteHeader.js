// src/pages/SiteHeader.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const SiteHeader = () => {
  return (
    <div className="header header-fixed unselectable header-animated">
      <div className="header-brand">
        <div className="nav-item no-hover">
          <h6 className="title"><NavLink to="/">BACK2school</NavLink></h6>
        </div>
        <div className="nav-item nav-btn" id="header-btn">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="header-nav" id="header-menu">
        <div className="nav-left">
          <div className="nav-item text-center">
            <a href="https://www.linkedin.com/in/ryan-hunter-4a166013/">
              <span className="icon">
                <i className="fab fa-wrapper fa-linkedin" aria-hidden="true"></i>
              </span>
            </a>

            <a href="https://github.com/systemsvanguard">
              <span className="icon">
                <i className="fab fa-wrapper fa-github-alt" aria-hidden="true"></i>
              </span>
            </a>
          </div>
        </div>

        <div className="nav-right">
          <NavLink to="/">
            <span className="icon">
            <i className="fas fa-wrapper fa-list-ol" aria-hidden="true"></i>
            </span>
            <span>Shopping List</span>
          </NavLink>
          <NavLink to="/services">
            <span className="icon">
            <i className="fas fa-wrapper fa-shopping-basket" aria-hidden="true"></i>
            </span>
            <span>Services</span>
          </NavLink>

          <NavLink to="/about">
            <span className="icon">
            <i className="fas fa-wrapper fa-info" aria-hidden="true"></i>
            </span> About
          </NavLink> |

          <NavLink to="/contact">
            <span className="icon">
            <i className="fas fa-wrapper fa-phone" aria-hidden="true"></i>
            </span>
            <span>Contact</span>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default SiteHeader