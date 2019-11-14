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
               <input type="text" placeholder="Unesite naziv proizvoda..." id="pr1" onChange={this.pretrazi}/><button type="submit" id="pr"><i class="fas fa-search"></i></button>
               </div>
               <div className="sp">
               <div className={this.state.niz.length===0? 'skriveno':'vidljivo'}>
                   {this.state.niz.map(n=>(
                       <div className="unutraLink">
                        <Link className="trazeno" to={"/product/"+n.idpr} onClick={this.isprazni}>{n.naziv}</Link><br/>
                        </div>
                   )   
                   )}
               </div>
               </div>
               </div>
        )
    }
}

export default Searchbar;
