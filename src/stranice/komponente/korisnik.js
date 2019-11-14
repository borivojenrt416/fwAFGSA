import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './korisnik.scss'
import {connect} from 'react-redux'
import {uzmi} from '../../actions/istorijakupljenih'
import {azuriraj} from '../../actions/uloguj'
export class Korisnik extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             korisnik:null
           
        }
    }
    
azuriraj=e=>{
    e.preventDefault()
    const {korisnik} = this.state;
    if(korisnik.telefon.match("[0-9]{3}-[0-9]{2}-[0-9]{2}-[0-9]{2,3}"))
    {
       fetch(`http://localhost:4000/korisnici/${korisnik.ime}/${korisnik.prezime}/${korisnik.email}/${korisnik.sifra}/${korisnik.telefon}`)
        console.log("uspoesno azuriran korisnik!")
        localStorage.setItem("trenutno",JSON.stringify(korisnik))
    console.log(korisnik)
    var objekat = korisnik
    this.setState({
        korisnik:objekat
    })
    this.props.pk()
    }
    this.props.pk()
    this.props.azuriraj(this.state.korisnik.id)
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
        fetch(`http://localhost:4000/korisnik/uplati/${pare}/${korisnik.email}`)
        console.log("UPLACEN NOVAC!")
    }
    this.props.azuriraj(korisnik.id)
}
componentWillMount(){
    if(this.props.korisnik===undefined)
    {

    }
    else
    {
    this.setState({
        korisnik:this.props.korisnik[0]
    })
}
}
componentDidMount(){
    if(this.props.korisnik!==undefined)
{
    console.log(this.props.korisnik[0].id)
    this.props.uzmi(this.props.korisnik[0].id)
}
}



    render() 
    {
      console.log(this.props.istorija)
      const {korisnik} = this.state;
       
    console.log(korisnik)
    if(this.props.korisnik===undefined)
    {
                return(
                <div className="nema">
                <p>Poštovani korisniče,trenutno niste ulogovani na svoj nalog!</p>
                <p>Molimo Vas da se <Link className="n" to="/login">ulogujete</Link></p>
                </div>)
    }
    else
    {
    if(this.props.istorija.length===0)
    {
        return (
            <div>
                
                <div className="ispod">
                <h3>Dobrodošli, {korisnik.ime}!</h3>
                <h4>Vaše trenutno stanje na računu je : {korisnik.novac} RSD</h4>
                <div className="jedan">
                    
                <form className="forma">
                <p>Podaci</p>
                <table>
                    <tr><td className="tt">Vaše ime</td><td><input className="inp" id={korisnik.ime} value={this.state.korisnik.ime} type="text" onChange={e=>this.setState({
                   korisnik:{...korisnik,ime:e.target.value}
               })}/></td></tr>
               <tr><td className="tt">Vaše prezime</td><td> <input className="inp" id={korisnik.prezime} value={korisnik.prezime} type="text" onChange={e=>this.setState({
                   korisnik:{...korisnik,prezime:e.target.value}
               })}/></td></tr>
               <tr><td className="tt">Vaš email</td><td><input className="inp" id={korisnik.email} disabled value={korisnik.email} type="email" onChange={e=>this.setState({
                   korisnik:{...korisnik,email:e.target.value}
               })}/></td></tr>
               <tr><td className="tt">Vaša sifra</td><td><input className="inp" id={korisnik.sifra} value={korisnik.sifra} type="text" onChange={e=>this.setState({
                   korisnik:{...korisnik,sifra:e.target.value}
               })}/></td></tr>
               <tr><td className="tt">Vaš broj telefona</td><td><input className="inp" id={korisnik.telefon} value={korisnik.telefon} type="text" onChange={e=>this.setState({
                   korisnik:{...korisnik,telefon:e.target.value}
               })}/></td></tr>
                </table>
               <button type="submit" onClick={this.azuriraj}><Link className="d" to="/login">Ažuriraj</Link></button><br/><br/>
             
              
            </form>
            <form className="novac">
                <p>Uplatite novac</p>
                <label htmlFor="uplata">Unesite željeni iznos za uplatu :</label><input className="inp" id="uplata" type="text" /><br/>
               <button type="submit" onClick={this.uplati}><Link className="d" to="/login">Uplati</Link></button><br/><br/>
              
            </form>
            </div>
            <div className="dva">
                   <h1>Istorija kupljenih proizvoda</h1>
                   <h2>Vaša istorija kupljenih proizvoda je prazna. </h2>
                   </div>
                </div>
            </div>
        )
    }
    else
    {
        return (
            <div>
             
                <div className="ispod">
                <h3>Dobrodošli, {korisnik.ime}!</h3>
                <h4>Vaše trenutno stanje na računu je : {korisnik.novac} RSD</h4>
                <div className="jedan">
                    
                <form className="forma">
                <p>Podaci</p>
                <table>
                    <tr><td className="tt">Vaše ime</td><td><input className="inp" id={korisnik.ime} value={this.state.korisnik.ime} type="text" onChange={e=>this.setState({
                   korisnik:{...korisnik,ime:e.target.value}
               })}/></td></tr>
               <tr><td className="tt">Vaše prezime</td><td> <input className="inp" id={korisnik.prezime} value={korisnik.prezime} type="text" onChange={e=>this.setState({
                   korisnik:{...korisnik,prezime:e.target.value}
               })}/></td></tr>
               <tr><td className="tt">Vaš email</td><td><input className="inp" id={korisnik.email} disabled value={korisnik.email} type="email" onChange={e=>this.setState({
                   korisnik:{...korisnik,email:e.target.value}
               })}/></td></tr>
               <tr><td className="tt">Vaša sifra</td><td><input className="inp" id={korisnik.sifra} value={korisnik.sifra} type="text" onChange={e=>this.setState({
                   korisnik:{...korisnik,sifra:e.target.value}
               })}/></td></tr>
               <tr><td className="tt">Vaš broj telefona</td><td><input className="inp" id={korisnik.telefon} value={korisnik.telefon} type="text" onChange={e=>this.setState({
                   korisnik:{...korisnik,telefon:e.target.value}
               })}/></td></tr>
                </table>
               <button type="submit" onClick={this.azuriraj}><Link className="d" to="/login">Ažuriraj</Link></button><br/><br/>
             
              
            </form>
            <form className="novac">
                <p>Uplatite novac</p>
                <label htmlFor="uplata">Unesite željeni iznos za uplatu :</label><input className="inp" id="uplata" type="text" /><br/>
               <button type="submit" onClick={this.uplati}><Link className="d" to="/login">Uplati</Link></button><br/><br/>
              
            </form>
            </div>
               <div className="dva">
                   <h1>Istorija kupljenih proizvoda</h1>
                   <table>
                       <tbody>
                       <tr>
                           <th>Slika proizvoda</th><th>Naziv proizvoda</th><th>Datum kupovine</th><th>Cena proizvoda</th><th>Ukupna cena</th><th>Kupljena količina</th>
                       </tr>
                   
                   {this.props.istorija.map(k=>(
    <tr key={k.IDB}><th><img src={k.img}/></th><th>{k.nazivPr}</th><th>{k.datumKupovine}</th><th>{k.cena}</th><th>{k.ukupnaCena}</th><th>{k.kolicina}</th></tr>
                   ))}
                   </tbody>
                   </table>
               </div>
                </div>
            </div>
        )
    }
}
    }
}
const mapStateToProps = state =>({
    korisnik:state.korisnik.korisnik,
    istorija:state.istorija.istorija
  })
  const mapDispatchToProps = (dispatch) =>({
    uzmi:(id)=>dispatch(uzmi(id)),
    azuriraj:(id)=>dispatch(azuriraj(id))
  })
export default connect(mapStateToProps,mapDispatchToProps)(Korisnik)

