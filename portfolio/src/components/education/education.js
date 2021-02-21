import React, { Component } from 'react'
import "./education.css"
import pulogo from "../logos/pulogo.jpg"
import svvlogo from "../logos/svvlogo.jpg"

export default class Education extends Component {
  render() {
    return (

        <div className='education'>

            <h1 className='heading'>Education  <span>🏫</span></h1>

            <div className='edu-card'>

                <div><img src={pulogo}/></div>
                <div className='details'>
                <h2>Parul University</h2>
                <h2>B.Tech in Computer Science</h2>
                <p>July 2018 - May 2022 </p>

                </div>

                <div className='details'>
                <div><img src={svvlogo}/></div>
                <h2>Shree Vasishtha Vidhyalaya</h2>
                <h2>Senior Secondary</h2>
                <p>June 2016 - June 2018 </p>
                </div>

            </div>
           

           

            

        </div>
    )
  }
}
