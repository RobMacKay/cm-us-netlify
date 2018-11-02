import React from 'react'
import { Link } from 'gatsby'
import $ from 'jquery'

const Navbar = () => (
  <nav className="navbar">
    <div className="container">
      <div className="navbar-brand">
        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={click}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div className="navbar-menu" id="navbarBasicExample">
        <div className="navbar-start">
          <Link className="navbar-item" to="/">
            Home
          </Link>
          <Link className="navbar-item" to="/casino-reviews">
            Online Casino Reviews
          </Link>
          <Link className="navbar-item" to="/bonus-offers">
            Online Casino Bonuses
          </Link>
          <Link className="navbar-item" to="/us-legal-gambling">
            USA Legal Gambling
          </Link>
        </div>
      
      <div className="navbar-end">

      </div>
      </div>
    </div>
  </nav>
)

const click = () => {

  // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
  $(".navbar-burger").toggleClass("is-active");
  $(".navbar-menu").toggleClass("is-active");

}


export default Navbar
