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
    
    var s1 = document.getElementById("1".concat(JSON.stringify(this.props.product.naziv))).value
    var s = this.props.product.cena
    var a = JSON.stringify(s)
    var d = a.replace('.','')
    var k = JSON.parse(d)
    var novac = parseInt(k)*parseInt(s1)
    this.props.remove(this.props.product,novac)
    this.props.poz()
    
  
}
omiljeno=()=>{
    this.props.dodajUOmiljeno(this.props.product,this.props.omiljeno)
}
ok=(e)=>{
this.props.kolicinaputacena(this.props.product.idpr,e.target.value,this.props.korpa)
this.props.poz()
}
    render() 
    
    {
        const {product} = this.props   
            return (
                <div>
                    <div className="card">
                   <button type="button" id="" value="" className="omiljeno" onClick={this.omiljeno} ><i class="far fa-heart"></i></button>
                   <button type="button" id="" value="" className="brisi" onClick={this.brisi}><Link className="brs" to={"/ukloniti/"+product.idpr} ><i class="far fa-window-close"></i></Link></button>
                   <div className="bezfloat">
                    <img src={product.img}/>
                        <h5 className="naziv">{product.naziv}</h5>
                        <div className="linija">
                        <hr />
                        <p className="cena">Cena: {product.cena}  RSD</p>
                        </div>
                        </div>
                        KOLIČINA : <input id={"1".concat(JSON.stringify(product.naziv))} className="kolic" type="number" defaultValue="1" onChange={this.ok} min="1"/>
                        <div className="detalj"><Link className="linkud" to={"/product/"+product.idpr}> DETALJI </Link></div>
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



