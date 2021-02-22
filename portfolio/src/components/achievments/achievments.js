import React, { Component } from 'react'
import "./achievments.css"

export default class Achievments extends Component {
  render() {
    return (
        <div className='achievment'>
        <a id="aa"></a>
            <h1 className='achievment-heading'> Achievments and Certifications  🏆</h1>

            <article className='achiev-details'>
                <p><span>⚡</span>Secured 3rd rank in CodeRush Organised by CSI Parul University.</p>
                <p><span>⚡</span>4 Rank Code warriors Game of Data AI Challenge (Dockship).</p>
                <p><span>⚡</span>7 Rank in Product Sentiment Classification Hackathon(Machine Hack)</p>
                <p><span>⚡</span>Global rank 69 on MachineHack (Platform for DataScience) </p>

            </article>
        </div>
    )
  }
}
