import React, { Component } from 'react'
import "./education.css"
import pulogo from "../logos/pulogo.jpg"
import svvlogo from "../logos/svvlogo.jpg"

export default class Education extends Component {
  render() {
    return (

        <div className='education'>

            <h1 className='education-heading'>Education  <span>🏫</span></h1>

            <div className='edu-card'>
            <div className='edu-details'>
                <img  src={pulogo} height="100" width="150"/>
                
                
                <h2>Parul University</h2>
                <h3>B.Tech in Computer Science</h3>
                <p>July 2018 - May 2022 </p>

                </div>

         
              
              
              <br></br>
                
                <div className='edu-details'>
                <img src={svvlogo} height="120" width="150"/>
                <h2>Shree Vasishtha Vidhyalaya</h2>
                <h3>Senior Secondary</h3>
                <p>June 2016 - June 2018 </p>
                </div>

            </div>
           

           

            

        </div>
    )
  }
}
