import React, { Component } from 'react'
import './card.scss'
import "../../node_modules/@fortawesome/fontawesome-free/css/all.css"
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {filtriraj} from '../actions/dodajUOmiljeno'
import {dodajUKorpu} from "../actions/dodajUKorpu"
import {vratiBroj} from "../actions/dodajUKorpu"
export class Omiljenocard extends Component {
    constructor(props){
        super(props)
    
        this.state = {
             
        }
    
    
    
    }
    dodaj=()=>{
        this.props.dodajUKorpu(this.props.product,this.props.korpa)
        this.props.vratiBroj(this.props.korpa)
    }
brisi=()=>{
    this.props.filtriraj(this.props.omiljeno,this.props.product)

}
    render() 
    
    {
        const {product} = this.props   
            return (
                <div>
                    <div className="card">
                   <button type="button" id="" value="" className="brisi" onClick={this.brisi}><i className="far fa-window-close"></i></button>
                   <div className="bezfloat">
                    <img src={product.img}/>
                        <h5 className="naziv">{product.naziv}</h5>
                        <div className="linija">
                        <hr />
                        <p className="cena">Cena: {product.cena}  RSD</p>
                        </div>
                        <button type="submit" className="dodajUKorpu" id={product.naziv} onClick={this.dodaj}>DODAJ U KORPU<span id="korpa"><i className="fas fa-cart-plus"></i></span></button>
                        </div>
                        <div className="detalj"><Link className="linkud" to={"/product/"+product.idpr}> DETALJI </Link></div>
                    </div>
                </div>
            )
        }
         
    
}
const mapStateToProps = state =>({
   korpa:state.korpa.korpa,
   omiljeno:state.omiljeno.omiljeno
  })
export default connect(mapStateToProps,{vratiBroj,filtriraj,dodajUKorpu})(Omiljenocard);



