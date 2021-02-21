import React, { Component } from 'react'
import Navbar from "./navbar/navbar"
import Introduction from "./introduction/introduction"  
import Achievments from "./achievments/achievments"
import Projects from "./projects/projects"
import Skills from './skills/skills'
import Education from './education/education'
import Contact from "./contact/contact"
import Buttons from "./buttons/buttons"

export default class Main extends Component {
  render() {
    return (
      <div>
      <Navbar/>
      <Introduction/>
      
      
      </div>
      

    )
  }
}
