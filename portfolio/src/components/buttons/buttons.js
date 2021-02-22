import React, { Component } from 'react'
import "./buttons.css"


export default class Buttons extends Component {
  render() {
    return (
        <div className='button-div'>

        
            <div>
                <a className="buttons" href="#con">Contact Me</a>
            </div>
            <div>
                <a className="buttons" href="https://github.com/kunalpatel321/Resume/blob/main/Resume%202021.pdf"  target="_blank">My Resume</a>
            </div>
        </div>
    )
  }
}
