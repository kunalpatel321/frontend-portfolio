import React, { Component } from 'react'
import "./social.css"
import {FaGithub,FaLinkedinIn} from 'react-icons/fa';

export default class Social extends Component {
  render() {
    return (

        <div>
        <div className='con-icons'>
        <a href="https://github.com/kunalpatel321"  class="icon-button-github" target="_blank" ><i class="github" ></i><span ><FaGithub/></span></a>
        <a href="https://www.linkedin.com/in/kunal-patel-633a8b16a/"  class="icon-button-linkedin" target="_blank"><i class="linkedin" ></i><span     ><FaLinkedinIn/></span></a> 
        </div>
        </div>
    )
  }
}
