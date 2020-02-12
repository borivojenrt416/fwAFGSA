import React, { Component } from 'react'
import './card.scss'
import "../../node_modules/@fortawesome/fontawesome-free/css/all.css"
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {filtriraj} from '../actions/dodajUKorpu'
import {vratiBroj,kolicinaputacena} from '../actions/dodajUKorpu'
import {dodajUOmiljeno} from '../actions/dodajUOmiljeno'
export class Kupovinacard extends Component {
    constructor(props){
        super(props)
    
        this.state = {
          
        }
    }

brisi=()=>{
    
    // var s1 = document.getElementById("1".concat(JSON.stringify(this.props.product.naziv))).value
    // var s = this.props.product.cena
    // var a = JSON.stringify(s)
    // var d = a.replace('.','')
    // var k = JSON.parse(d)
    // var novac = parseInt(k)*parseInt(s1)
    this.props.remove(this.props.product.proizvod)
    // this.props.poz()
    
  
}
omiljeno=()=>{
    this.props.dodajUOmiljeno(this.props.product.proizvod,this.props.omiljeno)
}
ok=(e)=>{
this.props.kolicinaputacena(this.props.product.proizvod.Naziv,e.target.value,this.props.korpa)
this.props.poz()
}
    render() 
    
    {
        const {product} = this.props   
            return (
                <div>
                    <div className="card">
                   <button type="button" id="" value="" className="omiljeno" onClick={this.omiljeno} ><i className="far fa-heart"></i></button>
                   {/* <button type="button" id="" value="" className="brisi" onClick={this.brisi}><Link className="brs" to={"/ukloniti/"+product.proizvod.IdDesktop} ><i class="far fa-window-close"></i></Link></button> */}
                   <button type="button" id="" value="" className="brisi" onClick={this.brisi}><i className="far fa-window-close"></i></button>
                   <div className="bezfloat">
                    <img src={product.proizvod.image}/>
                    <div className="Naziv">
                        <h5>{product.proizvod.Naziv}</h5>
                        </div>
                        <div className="linija">
                        <hr />
                        <p className="cena">Cena: {product.proizvod.Cena}  RSD</p>
                        </div>
                        </div>
                        KOLICINA : <input id={"1".concat(JSON.stringify(product.proizvod.Naziv))} className="kolic" type="number"  value={this.props.product.kolicina} onChange={this.ok} min="1"/>
                        <div className="detalj"><Link className="linkud" to={"/product/"+product.proizvod.IdDesktop}> DETALJI </Link></div>
                    </div>
                </div>
            )
        }
         
    
}
const mapStateToProps = state =>({
   korpa:state.korpa.korpa,
   poruka:state.poruka,
   omiljeno:state.omiljeno.omiljeno,
   cena:state.cena.cena
  })
export default connect(mapStateToProps,{filtriraj,vratiBroj,dodajUOmiljeno,kolicinaputacena})(Kupovinacard);