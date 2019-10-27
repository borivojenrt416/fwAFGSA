import React,{Component} from 'react'
import Gde from './gde'
import './login.css'
import {Link} from 'react-router-dom'
class LogIn extends Component{
constructor(props) {
    super(props)

    this.state = {
         korisnik:{
             email:"",
             sifra:""
         },
    }
}


prijava=e=>{
    e.preventDefault()
    const {korisnik} = this.state
    console.log(korisnik)

    fetch('http://localhost:4000/korisnici')
    .then(response=>response.json())
    .then(response=>{
        for(let i=0;i<response.data.length;i++)
        {
            if(response.data[i].email===korisnik.email && response.data[i].sifra===korisnik.sifra)
            {

            
            console.log(response.data[i])

           localStorage.setItem("trenutno",JSON.stringify(response.data[i]))
            this.props.history.push("/")
            this.props.uloguj()
        }}
    })
}

render(){
    const {korisnik} = this.state
    
    return(
        <div>
            <h1>Prijava</h1>
            <div>
            <Gde />
            <div className="stil">
            <form className="forma">
                <input className="inp" type="email" value={korisnik.email} onChange={e=>this.setState({
                   korisnik:{...korisnik,email:e.target.value}})}/>Unesite vas e-mail <br/>
                <input className="inp" type="password" value={korisnik.sifra} onChange={e=>this.setState({
                   korisnik:{...korisnik,sifra:e.target.value}})}/>Unesite vasu sifru<br/>
                <button type="submit" onClick={this.prijava}>Prijava</button><br/><br/>
                Nemate nalog?<Link to="/register">Registrujte se odmah!</Link>
            </form>
            </div>
            </div>
        </div>
    );
}
}

export default LogIn;