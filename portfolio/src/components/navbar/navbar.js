import React, { Component } from 'react'
import klogo from "../logos/klogo.PNG"
import "./navbar.css"
export default class Navbar extends Component {
  render() {
    return (
        <nav className='navbar'>

        <img src={klogo} height="100"  />

        <ul className='navlinks'>

        <li>
            <a href="/" className="nav-link">
            Skills
            </a>
        </li>


        <li>
            <a href="/" className="nav-link">
            Achievments
            </a>
        </li>

        <li>
            <a href="/" className="nav-link">
            Contact Me
            </a>
        </li>




        </ul>
            
        </nav>
    );
  }
}
