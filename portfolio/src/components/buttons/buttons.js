import React, { Component } from 'react'
import "./buttons.css"

export default class Buttons extends Component {
  render() {
    return (
        <div className='button-div'>
            <div>
                <a className="buttons">Contact Me</a>
            </div>
            <div>
                <a className="buttons">My Resume</a>
            </div>
        </div>
    )
  }
}
