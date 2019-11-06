import React, { Component } from 'react'
import './card.scss'
import "../../node_modules/@fortawesome/fontawesome-free/css/all.css"
import {Link} from 'react-router-dom'

export class Card extends Component {
    constructor(props){
        super(props)
    
        this.state = {
             
        }
    
    
    
    }
    render() 
    
    {
        console.log(this.props.product)  
        const {product} = this.props    
          return (
            <div>
                <div className="card">
               <button type="button" id="" value="" className="omiljeno" ><i class="far fa-heart"></i></button>
               <div className="bezfloat">
                <img src={product.img}/>
                    <h5 className="naziv">{product.naziv}</h5>
                    <div className="linija">
                    <hr />
                    <p className="cena">Cena: {product.cena}  RSD</p>
                    </div>
                    </div>
                    <button type="submit" className="dodajUKorpu">DODAJ U KORPU<span id="korpa"><i class="fas fa-cart-plus"></i></span></button>
                    <div className="detalj"><Link className="linkud" to="#"> DETALJI </Link></div>
                </div>
            </div>
        )
    }
}

export default Card



