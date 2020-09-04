// src/SiteNavBar
import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBarJS.js'


const SiteNavBar = () => {
  return (
    <>
      <nav className="navbar is-success" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <NavLink to="/" className="navbar-item">
            <span className="is-size-4 has-text-weight-bold has-text-link">Back2school</span>
          </NavLink>

          <button className="navbar-burger burger button is-link" aria-label="menu" aria-expanded="false" data-target="navMenu">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>

        <div id="navMenu" className="navbar-menu">
          <div className="navbar-end">
            <NavLink to="/"           className="navbar-item">Home</NavLink>
            <NavLink to="/services"   className="navbar-item">Services</NavLink>
            <NavLink to="/about"      className="navbar-item">About</NavLink>
            <NavLink to="/contact"    className="navbar-item">Contact</NavLink>
          </div>
        </div>
      </nav>
    </>
  )
}

export default SiteNavBar
