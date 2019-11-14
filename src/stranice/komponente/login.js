import React,{Component} from 'react'
import './login.scss'
import {Link} from 'react-router-dom'
import fb from './footer/mreze/fb.png'
import linkedin from './footer/mreze/linkedin.png'
import twitter from './footer/mreze/twitter.png'
import {connect} from 'react-redux'
import {uloguj} from "../../actions/uloguj"
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
            <div className="stil">
                <div className="levoL">
                <h2>Nemate nalog? Registrujte se</h2>
                <p>Kreiranjem naloga bićete u mogućnosti da:</p>
                <p><i class="far fa-check-circle"></i> prolazite brže kroz proces plaćanja,</p>
                <p><i class="far fa-check-circle"></i> da koristite više adresa za isporuku,</p>
                <p><i class="far fa-check-circle"></i> pregledate i pratite Vaše porudžbine itd.</p>
                <button type="submit" onClick={()=>{alert("REG")}}><Link className="reg" to="/register">Kreiraj korisnički nalog</Link></button>
            </div>
            <div className="desnoL">
                <h2>Registrovani korisnici</h2>
                <p>Ako kod nas imate korisnički nalog, molimo ulogujte se.</p>
            <form className="forma">
                <label htmlFor={korisnik.email}>Email adresa</label>
                <input placeholder="Unesite Vaš email..." className="inp" type="email" value={korisnik.email} onChange={e=>this.setState({
                   korisnik:{...korisnik,email:e.target.value}})}/><br/>
                 <label htmlFor={korisnik.sifra}>Lozinka</label>
                <input placeholder="Unesite Vašu lozinku..." className="inp" type="password" value={korisnik.sifra} onChange={e=>this.setState({
                   korisnik:{...korisnik,sifra:e.target.value}})}/><br/>
                  <button type="submit" onClick={()=>this.props.uloguj(this.state.korisnik.email,this.state.korisnik.sifra)}><Link className="lgn" to="/">Prijavi se</Link></button><br/><br/>
            </form>
            <hr/>
            <div className="drm">
            <p>Prijavite se koristeći naloge društvenih mreža:</p>
            <Link className="mreza"><img src={fb}/></Link>
            <Link className="mreza"><img src={twitter}/></Link>
            <Link className="mreza"><img src={linkedin}/></Link>
            </div>
            </div>
            </div>
    );
}
}
const mapDispatchToProps = (dispatch) =>({
    uloguj:(email,lozinka)=>dispatch(uloguj(email,lozinka))
  })
export default connect(mapDispatchToProps,{uloguj})(LogIn);