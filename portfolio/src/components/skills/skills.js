import React, { Component } from 'react'
import "./skills.css"
import {FaHtml5,FaCss3Alt,FaReact,FaPython} from 'react-icons/fa';
import {SiTensorflow,SiKeras,SiMysql} from 'react-icons/si';
export default class Skills extends Component {
  render() {
    return (
      <div >
            <h1 className='heading'>Skills 👨‍💻</h1>
          <div className='icons'>

              <ul className='line'>
              <li class="skills"><i className='h'><FaHtml5/></i><p className='name'>Html-5</p></li> 
              <li class="skills"><i className='h'><FaCss3Alt/></i><p className='name'>css-3</p></li> 
              <li class="skills"><i className='h'><FaReact/></i><p className='name'>ReactJs</p></li> 
              <li class="skills"><i className='h'><FaPython/></i><p className='name'>Python</p></li>
              <li class="skills"><i className='h'><SiTensorflow/></i><p className='name'>Tensorflow</p></li>
              <li class="skills"><i className='h'><SiKeras/></i><p className='name'> Keras</p></li>
              <li class="skills"><i className='h'><SiMysql/></i><p className='name'>MySql</p></li>   


            







              </ul>


          </div>
      </div>
    )
  }
}
