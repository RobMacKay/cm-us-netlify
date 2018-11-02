import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/casinomeister-us-logo-4.png'

export default function Header() {
  return (
    <div className="siteHeader">
      <div className="container prince">
        <Link to="/">
          <img src={logo} alt='Casinomeister US Test' />
        </Link>
      </div>
    </div>
  )
}
