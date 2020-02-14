import React, { Component } from 'react'
import './searchbar.scss'
import {Link} from 'react-router-dom'

export class Searchbar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             niz:[]
        }
    }
    pretrazi=(e)=>{
      
        fetch(`http://localhost:4000/korisnici/pretraga/${e.target.value}`)
        .then(response=>response.json())
        .then(response=>{
            this.setState({
                niz:response.data
                })
        })
    }
    isprazni=()=>{
        this.setState({
            niz:[]
        })
    }
    

    render() {
        return (
            <div><div>
            <input type="text" placeholder="Unesite naziv proizvoda..." id="pr1" onChange={this.pretrazi}/>
            <div className="sp">
            <div className={this.state.niz.length===0? 'skriveno':'vidljivaPretraga'}>
                {this.state.niz.map(n=>(
                    <Link className="trazeno" to={"/product/"+n.idpr} onClick={this.isprazni}>
                    <div className="unutraLink">
                     <span id="bold">Naziv :</span> {n.Naziv} <span id="bold">Cena :</span> {n.Cena} <span id="bold">RSD</span><br/>
                     </div></Link>
                )   
                )}
            </div>
            </div>
            {/* <button type="submit" id="pr"><i className="fas fa-search"></i></button> */}
            </div>
           
               </div>
        )
    }
}

export default Searchbar;
