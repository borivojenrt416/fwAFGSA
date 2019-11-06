import React, { Component } from 'react'
import Card from '../card'
import './preporuka.scss'
export class Preporuka extends Component {
    render() {
      console.log(this.props.proizvodi)
        return (
            <div className="odeljak">
            <p className="podnaslov">Preporučujemo za Vas</p>
            {this.props.proizvodi.map(proizvod=>{
             
              if(proizvod.preporuka)
              return (
              <div className="pored">
                <Card product = {proizvod} />
                </div>
              )
            
            })}
            
            </div>
        )
    }
}

export default Preporuka
