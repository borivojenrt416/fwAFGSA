import React,{Component} from 'react'
import Gde from './gde'
import './login.css'
import {Link} from 'react-router-dom'
class Register extends Component{
constructor(props) {
    super(props)

    this.state = {
         korisnik:{
             ime:"",
             prezime:"",
             email:"",
             sifra:"",
             datumRodjenja:null,
             telefon:""
         },
         korisnici:[]
    }
}





dodajKorisnika=e=>{

      e.preventDefault()
    const {korisnik} = this.state;
    
    fetch('http://localhost:4000/korisnici')
    .then(response=>response.json())
    .then(response=>{
        var brojac=0;
        for(let i=0;i<response.data.length;i++)
        {
        if(
            response.data[i].email===korisnik.email
        )
        {
            brojac=1
          console.log("nadjen korisnik!")
        }
    }
      if(brojac===0)
      {
        if(this.state.korisnik.telefon.match("[0-9]{3}-[0-9]{2}-[0-9]{2}-[0-9]{2,3}"))
                {
                   fetch(`http://localhost:4000/korisnici/dodaj?ime=${korisnik.ime}&prezime=${korisnik.prezime}&datumRodjenja=${korisnik.datumRodjenja}&email=${korisnik.email}&sifra=${korisnik.sifra}&telefon=${korisnik.telefon}`)
                    console.log("uspoesno dodat korisnik!")
                    this.props.history.push("/")
                }      
      }
      else
      alert(`KORISNIK VEC POSTOJI SA ADRESOM ${this.state.korisnik.email}`)
    })
    


    // if(brojac===0){
    //         if(this.state.korisnik.telefon.match("[0-9]{3}-[0-9]{2}-[0-9]{2}-[0-9]{2,3}"))
    //         {
    //            fetch(`http://localhost:4000/korisnici/dodaj?ime=${korisnik.ime}&prezime=${korisnik.prezime}&datumRodjenja=${korisnik.datumRodjenja}&email=${korisnik.email}&sifra=${korisnik.sifra}&telefon=${korisnik.telefon}`)
    //             console.log("uspoesno dodat korisnik!")
    //         }  
    // }
    // else
    // {
    //     console.log("Vec postoji korisnik sa zadatom email adresom!")
    // }
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
        <div>
            <h1>Registracija</h1>
            <div>
            <Gde />
            <div className="stil">
            <form className="forma">
               <input className="inp" value={korisnik.ime} type="text" onChange={e=>this.setState({
                   korisnik:{...korisnik,ime:e.target.value}
               })}/>Unesite vase ime <br/> 
               <input className="inp" value={korisnik.prezime} type="text" onChange={e=>this.setState({
                   korisnik:{...korisnik,prezime:e.target.value}
               })}/>Unesite vase prezime <br/>
               <input className="inp" value={korisnik.email} type="email" onChange={e=>this.setState({
                   korisnik:{...korisnik,email:e.target.value}
               })}/>Unesite vas e-mail<br/>
               <input className="inp" value={korisnik.sifra} type="password" onChange={e=>this.setState({
                   korisnik:{...korisnik,sifra:e.target.value}
               })}/>Unesite vasu sifru <br/>
               <input className="inp" value={korisnik.datumRodjenja} type="date" onChange={e=>this.setState({
                   korisnik:{...korisnik,datumRodjenja:e.target.value}
               })}/>Unesite vas datum rodjenja<br/>
               <input className="inp" value={korisnik.telefon} type="text" onChange={e=>this.setState({
                   korisnik:{...korisnik,telefon:e.target.value}
               })}/>Unesite vas broj telefona <br/>
               <button type="submit" onClick={this.dodajKorisnika}>Registruj se!</button><br/><br/>
            </form>
            <h2></h2>
            </div>
            </div>
        </div>
    );
}
}

export default Register;