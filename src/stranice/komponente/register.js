import React,{Component} from 'react'
import './login.scss'
import {Link} from 'react-router-dom'
class Register extends Component{
constructor(props) {
    super(props);
    this.state = {
         korisnik:{
             ime:"",
             prezime:"",
             email:"",
             sifra:"",
             datumRodjenja:null,
             telefon:""
         },
         vraceno:0,
         korisnici:[]
    }
}
dodajKorisnika=e=>{
    e.preventDefault()
    const {korisnik} = this.state;
    if(korisnik.ime===""||korisnik.prezime===""||korisnik.sifra===""||korisnik.email===""||korisnik.datumRodjenja===null||korisnik.telefon==="")
    {
            alert("POPUNITE SVA POLJA!")
    }
    else
    
        if(this.state.korisnik.telefon.match("[0-9]{3}-[0-9]{2}-[0-9]{2}-[0-9]{2,3}"))
                {
                   
                    fetch(`http://localhost:4000/korisnici/pretrazi/${korisnik.email}`)
                    .then(response=>response.json())
                    .then(broj=>{
                        // this.setState({
                        //   vraceno:broj.data
                        // })
                        console.log(broj)
                        if(broj.data===0)
                        {
                            fetch(`http://localhost:4000/korisnici/dodaj/${korisnik.ime}/${korisnik.prezime}/${korisnik.datumRodjenja}/${korisnik.email}/${korisnik.sifra}/${korisnik.telefon}`)
                        }
                        else
                        {
                            alert("KORISNIK VEĆ POSTOJI")
                        }
                      })
                }    
                else{
                    alert("UNESITE PRAVILNO BROJ TELEFONA!")
                }  
      }
    
            

uzmi=()=>{
    const {korisnici} = this.state
    fetch('http://localhost:4000/korisnici')
    .then(response=>response.json())
    .then(response=>{
        for(let i=0;i<response.data.length;i++)
        if(
            response.data[i].email==='d@gmail.com'
        )
        console.log("jbg")
    })
    console.log(korisnici)
}


render(){
 const{korisnik} = this.state;

    return(
        <div className="stil">
        <div className="levoL">
        <h2>Registracija fizičkog lica</h2>
        <p>Electroshop se obavezuje na privatnost Vaših ličnih podataka koji će biti korišćeni isključivo u svrhe kupovine na našem web sajtu.</p>
        <p>Upoznajte se sa<Link className="uk" to="#"> uslovima korišćenja.</Link></p>
        <h5>Šta dobijam registracijom?</h5>
        <p><i class="far fa-check-circle"></i> Omogućavate sebi brzu i jednostavnu kupovinu.</p>
        <p><i class="far fa-check-circle"></i> Možete pratiti istorijat kupovine.</p>
        <p><i class="far fa-check-circle"></i> Možete ostvaljati komentare.</p>
        <p><i class="far fa-check-circle"></i> Dobijate povremene pogodnosti za registrovane kupce.</p>
    </div>
    <div className="desnoL">
    <form className="forma">
    <table>
                    <tr><td className="tt">Vaše ime</td><td><input required className="inp" id={korisnik.ime} value={this.state.korisnik.ime} type="text" onChange={e=>this.setState({
                   korisnik:{...korisnik,ime:e.target.value}
               })}/></td></tr>
               <tr><td className="tt">Vaše prezime</td><td> <input required className="inp" id={korisnik.prezime} value={korisnik.prezime} type="text" onChange={e=>this.setState({
                   korisnik:{...korisnik,prezime:e.target.value}
               })}/></td></tr>
               <tr><td className="tt">Vaš email</td><td><input required className="inp" id={korisnik.email} value={korisnik.email} type="email" onChange={e=>this.setState({
                   korisnik:{...korisnik,email:e.target.value}
               })}/></td></tr>
               <tr><td className="tt">Vaša sifra</td><td><input required className="inp" id={korisnik.sifra} value={korisnik.sifra} type="text" onChange={e=>this.setState({
                   korisnik:{...korisnik,sifra:e.target.value}
               })}/></td></tr>
               <tr><td className="tt">Vaš broj telefona</td><td><input required className="inp" id={korisnik.telefon} value={korisnik.telefon} type="text" onChange={e=>this.setState({
                   korisnik:{...korisnik,telefon:e.target.value}
               })}/></td></tr>
               <tr><td className="tt">Vaš datum rođenja</td><td><input required className="inp" id={korisnik.datumRodjenja} value={korisnik.datumRodjenja} type="date" onChange={e=>this.setState({
                   korisnik:{...korisnik,datumRodjenja:e.target.value}
               })}/></td></tr>
               <tr><td className="tt"><button type="submit" onClick={this.dodajKorisnika}><Link className="lgn" to="/register">Registruj se</Link></button><br/><br/></td></tr>
                </table> 
    </form>
    </div>
    </div>
    );
}
}
export default Register;