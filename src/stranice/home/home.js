import React,{Component} from 'react'
import Gde from '../komponente/gde'
import './home.scss'
import Card from '../card'
import Preporuka from '../komponente/preporuka'
import Pametanizbor from '../komponente/pametanizbor'
// import Kategorije from '../komponente/kategorije'
import {
  Link,
} from "react-router-dom";

class Home extends Component{
constructor(props){
    super(props);
    this.state={
      proizvodi:[]
    }
}

componentDidMount()
{
  this.pokupiProizvode()
}

pokupiProizvode=()=>{
  fetch('http://localhost:4000/korisnici/sviproizvodi')
  .then(response=>response.json())
  .then(response=>{
    this.setState({
      proizvodi:response.data
    })
  })
}

    render(){
    
     
        return(
            <div className="sve">
             <Preporuka proizvodi={this.state.proizvodi}/>
           
            {/* <p className="podnaslov">Pametan izbor</p>
            {this.state.proizvodi.map(proizvod=>{
              var a = JSON.stringify(proizvod.cena).replace('.','')
              var b = parseInt(JSON.parse(a))
              if(JSON.stringify(proizvod.naziv).startsWith('XIAOMI',1))
              return (
              <div className="pored">
                <Card product = {proizvod} />
                </div>
              )
            
            })}
           
            <p className="podnaslov">Izoštri sliku</p>
            {this.state.proizvodi.map(proizvod=>{
              var a = JSON.stringify(proizvod.cena).replace('.','')
              var b = parseInt(JSON.parse(a))
              if(b>23000 && proizvod.tip==="monitor")
              return (
              <div className="pored">
                <Card product = {proizvod} />
                </div>
              )
            
            })}
            
           
            {/* {
                this.state.best.map(bes=>(
                    bes.map(be=>be.map(b=>(
                        <div className="kartica" style = {karta}key={b.id}>
                        {/* <button type="button" className="korpa" value={b.title} onClick={this.kupi}>
                          🛒
                        </button> */}
                        {/* <button type="button" id={b.id} value={b.title} className="fav" onClick={this.props.prosao}>
                ♥
              </button> */}
                        {/* <h1 className="ime">{b.title}</h1> <br />
                        <div className="opis">
                        <br/><br/><br/><br/>
                          <div className="slika">
                            <img src={b.img} onMouseOver={this.prikazi} />

                          </div>
                          <hr />
                          <h2 className="cenaTekst">
                            Cena : {b.cena} <span id="cen">RSD</span>
                          </h2>
                        </div><br/>
                       
                        <Link className="obicno" style={linkk} to={"product/"+b.id} >Detalji</Link>
                      </div>
                    ))
                )
                ))
            } */} 
        
            </div>
 
        );
    }
}

export default Home;