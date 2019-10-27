import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './korisnik.css'
import Kartica from './kartica'
import { Object } from 'core-js'
export class Korisnik extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             korisnik:this.props.user,
             kupljeni:[]
           
        }
    }
    

azuriraj=e=>{
    e.preventDefault()
    const {korisnik} = this.state;
    if(korisnik.telefon.match("[0-9]{3}-[0-9]{2}-[0-9]{2}-[0-9]{2,3}"))
    {
       fetch(`http://localhost:4000/korisnici/azuriraj?ime=${korisnik.ime}&prezime=${korisnik.prezime}&email=${korisnik.email}&sifra=${korisnik.sifra}&telefon=${korisnik.telefon}`)
        console.log("uspoesno azuriran korisnik!")
        localStorage.setItem("trenutno",JSON.stringify(korisnik))
    console.log(korisnik)
    console.log("TRENUTNO",localStorage.getItem("trenutno"))
    var objekat = korisnik
    this.setState({
        korisnik:objekat
    })
    this.props.pk()
    }
    this.props.pk()
}


uplati=e=>{
    
    e.preventDefault()
    const {korisnik} = this.state

    var staro = korisnik.novac
    if(staro===null || staro==="")
    staro = 0
    const pare = parseInt(staro)+parseInt(document.getElementById("uplata").value)
    console.log("KORISNIKOV NOVAC",pare)
   
    if(pare.toString().match("^[0-9]*$"))
    {
        fetch(`http://localhost:4000/korisnik/uplati?novac=${pare}&email=${korisnik.email}`)
        console.log("UPLACEN NOVAC!")
        var objekat = korisnik
        objekat.novac = pare
        console.log(objekat.novac)
        localStorage.setItem("trenutno",JSON.stringify(objekat))
    console.log(objekat)
    console.log("TRENUTNO",localStorage.getItem("trenutno"))
   this.setState({
       korisnik:objekat
   })
    this.props.pk()
    }
    
    document.getElementById("uplata").value=""
}

istorijaKupljenih=()=>{
    const {korisnik} = this.state
    console.log(korisnik)
    var br = parseInt(korisnik.id)
    fetch(`http://localhost:4000/korisnici/uzmiProizvode?id=${korisnik.id}`)
    .then(response=>response.json())
    .then(response=>{
        console.log(response.data)
        this.setState({
            kupljeni:response.data
        })
        
    })
}
componentDidMount(){
    this.istorijaKupljenih()
}
    render() 
    
    {
        const {korisnik} = this.state
        const styleLinks = {
            textDecoration : 'none',
            fontSize:'1.2vw',
            Color:'black'
            
    }
    if(this.state.kupljeni===null || this.state.kupljeni.length===0)
    {
        return (
            <div>
                <h1>Dobrodosli, {this.state.korisnik.ime}!</h1>
                <h3>Vase trenutno stanje na racunu je : {korisnik.novac} RSD</h3>
                <div className="ispod">
                    
                <div className="jedan">
                    
                <form className="forma">
                <h1>Podaci</h1>
                
                <label className="labela" for={korisnik.ime}>Vase ime</label><input className="inp" id={korisnik.ime} value={korisnik.ime} type="text" onChange={e=>this.setState({
                   korisnik:{...korisnik,ime:e.target.value}
               })}/><br/> 
               <label className="labela" for={korisnik.prezime}>Vase prezime</label>  <input className="inp" id={korisnik.prezime} value={korisnik.prezime} type="text" onChange={e=>this.setState({
                   korisnik:{...korisnik,prezime:e.target.value}
               })}/><br/>
               <label className="labela" for={korisnik.email}>Vas email</label> <input className="inp" id={korisnik.email} disabled value={korisnik.email} type="email" onChange={e=>this.setState({
                   korisnik:{...korisnik,email:e.target.value}
               })}/><br/>
                <label for={korisnik.sifra}>Vasa sifra</label><input className="inp" id={korisnik.sifra} value={korisnik.sifra} type="text" onChange={e=>this.setState({
                   korisnik:{...korisnik,sifra:e.target.value}
               })}/><br/>
               <label for={korisnik.telefon}>Vas broj telefona</label><input className="inp" id={korisnik.telefon} value={korisnik.telefon} type="text" onChange={e=>this.setState({
                   korisnik:{...korisnik,telefon:e.target.value}
               })}/><br/>
               <button type="submit" onClick={this.azuriraj}>Azuriraj</button><br/><br/>
             
              
            </form>
            <form className="novac">
                <h1>Uplatite novac</h1>
                <label for="uplata">Unesite zeljeni iznos za uplatu :</label><input className="inp" id="uplata" type="text" /><br/>
               <button type="submit" onClick={this.uplati}>Uplati</button><br/><br/>
              
            </form>
            </div>
            <div className="dva">
                   <h1>Istorija kupljenih proizvoda</h1>
                   <h2>Vasa istorija kupljenih proizvoda je prazna. </h2>
                   </div>
                </div>
            </div>
        )
    }
    else
    {
        return (
            <div>
                <h1>Dobrodosli, {this.state.korisnik.ime}!</h1>
                <h3>Vase trenutno stanje na racunu je : {korisnik.novac} RSD</h3>
                <div className="ispod">
                    
                <div className="jedan">
                    
                <form className="forma">
                <h1>Podaci</h1>
                
                <label className="labela" for={korisnik.ime}>Vase ime</label><input className="inp" id={korisnik.ime} value={korisnik.ime} type="text" onChange={e=>this.setState({
                   korisnik:{...korisnik,ime:e.target.value}
               })}/><br/> 
               <label className="labela" for={korisnik.prezime}>Vase prezime</label>  <input className="inp" id={korisnik.prezime} value={korisnik.prezime} type="text" onChange={e=>this.setState({
                   korisnik:{...korisnik,prezime:e.target.value}
               })}/><br/>
               <label className="labela" for={korisnik.email}>Vas email</label> <input className="inp" id={korisnik.email} disabled value={korisnik.email} type="email" onChange={e=>this.setState({
                   korisnik:{...korisnik,email:e.target.value}
               })}/><br/>
                <label for={korisnik.sifra}>Vasa sifra</label><input className="inp" id={korisnik.sifra} value={korisnik.sifra} type="text" onChange={e=>this.setState({
                   korisnik:{...korisnik,sifra:e.target.value}
               })}/><br/>
               <label for={korisnik.telefon}>Vas broj telefona</label><input className="inp" id={korisnik.telefon} value={korisnik.telefon} type="text" onChange={e=>this.setState({
                   korisnik:{...korisnik,telefon:e.target.value}
               })}/><br/>
               <button type="submit" onClick={this.azuriraj}>Azuriraj</button><br/><br/>
             
              
            </form>
            <form className="novac">
                <h1>Uplatite novac</h1>
                <label for="uplata">Unesite zeljeni iznos za uplatu :</label><input className="inp" id="uplata" type="text" /><br/>
               <button type="submit" onClick={this.uplati}>Uplati</button><br/><br/>
              
            </form>
            </div>
               <div className="dva">
                   <h1>Istorija kupljenih proizvoda</h1>
                   <table>
                       <tr>
                           <th>Slika proizvoda</th><th>Naziv proizvoda</th><th>Opis proizvoda</th><th>Datum kupovine</th><th>Cena proizvoda</th><th>Kupljena kolicina</th>
                       </tr>
                   
                   {this.state.kupljeni.map(k=>(
                       <tr><th><img src={k.img}/></th><th>{k.nazivPr}</th><th>{k.opisPr}</th><th>{k.datumKupovine}</th><th>{k.cena}</th><th>{k.kolicina}</th></tr>
                   ))}
                   </table>
               </div>
                </div>
            </div>
        )
    }
}
}

export default Korisnik

