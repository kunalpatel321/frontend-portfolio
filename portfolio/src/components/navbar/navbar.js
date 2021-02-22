import React, { Component } from 'react'
import kunal from "../logos/kunal.PNG"
import "./navbar.css"
export default class Navbar extends Component {
  render() {
    return (
        <nav className='navbar'>

       <div className='kunal'><img src={kunal} height="50"  /></div> 

        <ul className='navlinks'>

        <li>
            <a href="#ss" className="nav-link">
            Skills
            </a>
        </li>


        <li>
            <a href="#aa" className="nav-link">
            Achievments
            </a>
        </li>

        <li>
            <a href="#con " className="nav-link">
            Contact Me
            </a>
        </li>




        </ul>
            
        </nav>
    );
  }
}
