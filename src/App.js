import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Link} from 'react-router-dom'

import {connect} from 'react-redux'
import {dohvatiProizvode} from './actions/proizvodiAkcije'

// import Home from './stranice/home/home'
import Error from './stranice/Error/error'
import Onama from './stranice/onama/onama'
import Proizvodi from './stranice/proizvodi/proizvodi'
import Heder from './stranice/komponente/heder'
import { Switch } from 'react-router/esm/react-router';
import Omiljeno from './stranice/komponente/omiljeno'
import Fav from './stranice/fav/fav'
import Product from './stranice/komponente/product'
import Kupovina from './stranice/komponente/kupovina';
import LogIn from './stranice/komponente/login'
import Register from './stranice/komponente/register'
import Korisnik from './stranice/komponente/korisnik'
import Footer from './stranice/komponente/footer/footer'
import Home from './stranice/glavno/home'
class App extends React.Component {
constructor(props){
  super(props);
  this.state={
     proizvodi: [],
     izbor:[],
     tip:[],
    broj : localStorage.getItem("brojProizvoda"),
    trenutniKorisnik:JSON.parse(localStorage.getItem("trenutno")),
    korisnik:{
      email:"",
      sifra:""
    }
  }
}

componentWillMount(){
  this.props.dohvatiProizvode();
}

vrsta=e=>{
  console.log('usao')
  console.log(e.target.value)
  var niz = []
  for(let i=0;i<this.state.proizvodi.length;i++)
  {
    if(this.state.proizvodi[i].tip===e.target.value)
    {
      niz.push(this.state.proizvodi[i])
    }
  }
  console.log("niz",niz)
  this.setState({
    tip:niz
  })
}

promenjenKorisnik=()=>{
  console.log("promenjenkorisnik")
  this.setState({
    trenutniKorisnik:JSON.parse(localStorage.getItem("trenutno"))
  })
}

// ubaci=()=>{
//   console.log(this.state.products)
//   localStorage.setItem("pr",JSON.stringify(this.state.products))
//   var niz = [ this.state.products.map(pr=>pr.data.filter(d=>d.best===true))]
//   var niz3 = []

//   console.log(niz3)
//     // console.log(niz2)
//     console.log(niz)
//     localStorage.setItem("best",JSON.stringify(niz))
//   }

promeniState=()=>{
  console.log("promena izvrsena")
  console.log(localStorage.getItem("brojProizvoda"))
  this.setState({
    broj:localStorage.getItem("brojProizvoda")
  })
}
napuni=()=>{
  fetch('http://localhost:4000/korisnici/sviproizvodi')
  .then(response=>response.json())
  .then(response=>{
    this.setState({
      proizvodi:response.data
    })
  })
  
}


  


componentDidMount()
{
  this.napuni()
}



logovanje=()=>{
  const {trenutniKorisnik} = this.state
  this.setState({
    trenutniKorisnik:JSON.parse(localStorage.getItem("trenutno"))
  })
}

odjavi=()=>{
  console.log("odjava pokrenuta")
  const {trenutniKorisnik} = this.state
  this.setState({
    trenutniKorisnik:null
  })
}



  render()

  {
    console.log(this.props.proizvodi)


  return (

    <div className="App">
      <Heder brojPr={this.state.broj} moment={this.state.trenutniKorisnik} odjavise={this.odjavi}/>
      <div>
    <Switch>
  <Route exact path="/" render={props=><Home napuni={this.napuni} vrst={this.vrsta} azuriraj = {this.promeniState} />}/>
       <Route exact path="/home" render={props=><Home napuni={this.napuni} vrst={this.vrsta} azuriraj = {this.promeniState} />}/>
       <Route exact path="/proizvodi/:tip" component={Proizvodi} />
       {/* <Route exact path="/onama" component={Onama}/>
       <Route exact path="/proizvodi" render={props=><Proizvodi prosledjeno = {this.state.proizvodi} tip={this.state.tip} nap={this.napuni} azuriraj = {this.promeniState} />} />
       <Route exact path="/omiljeno" component={Fav}/>
       <Route exact path="/kupovina" render={props=><Kupovina azuriraj={this.promeniState} logout={this.odjavi} />}/>
       <Route exact path="/product/:id" component={Product} />
      
       <Route exact path="/login" render={props=><LogIn {...props} uloguj={this.logovanje}  />}/>
       <Route exact path="/register" component={Register} />
       <Route exact path="/korisnik" render={props=><Korisnik {...props} user={this.state.trenutniKorisnik}  pk={this.promenjenKorisnik} />}></Route>
       <Route component={Error}/> */}
     </Switch>
     </div>
     <div className="fut">
     <Footer/>
     </div>
   
    </div>
 
  );
 
}



}
const mapStateToProps = state =>({
  proizvodi:state.proizvodi.proizvod
})
export default connect(mapStateToProps,{dohvatiProizvode})(App);
