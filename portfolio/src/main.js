import React, { Component } from 'react'
import "./main.css";
import Navbar from "./components/navbar/navbar"
import Introduction from "./components/introduction/introduction"  
import Achievments from "./components/achievments/achievments"
import Projects from "./components/projects/projects"
import Skills from './components/skills/skills'
import Education from './components/education/education'
import Contact from "./components/contact/contact"
import Buttons from "./components/buttons/buttons"
import Social from './components/social/social';
export default class Main extends Component {
  render() {
    return (
      
      <div className="main">  
        <Navbar/>
        <Introduction/>
        <Social/>
        <Buttons/>
        <Skills/>
        <Education/>
        <Achievments/>
        <Projects/>
        <Contact/>


      
    </div>
      
      
    )
  }
}
