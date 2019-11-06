import React, { Component } from 'react'
import Card from '../card'
import './pametanizbor.scss'
export class Pametanizbor extends Component {
    render() {
        return (
            <div>
            <div className="pametanizbor">
            <p className="podnaslov">Pametan izbor</p>
            {this.props.proizvodi.map(proizvod=>{
              var a = JSON.stringify(proizvod.cena).replace('.','')
              var b = parseInt(JSON.parse(a))
              if(JSON.stringify(proizvod.naziv).startsWith('XIAOMI',1))
              return (
              <div className="pored">
                <Card product = {proizvod} />
                </div>
              )
            
            })}
            </div>
            </div>
        )
    }
}

export default Pametanizbor
