import React from 'react';
import './App.css';
import {BrowserRouter,Route,Link} from 'react-router-dom'

import {connect} from 'react-redux'
import {dohvatiProizvode} from './actions/proizvodiAkcije'

import Obrisan from './stranice/komponente/obrisan'
import Error from './stranice/Error/error'
import Proizvodi from './stranice/proizvodi/proizvodi'
import Heder from './stranice/komponente/heder'
import { Switch } from 'react-router/esm/react-router';
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
    korisnik:{
      email:"",
      sifra:""
    }
  }
}

componentWillMount(){
  this.props.dohvatiProizvode();
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




  render()
  {
  return (

    <div className="App">
      <Heder/>
      <div>
    <Switch>
  <Route exact path="/" render={props=><Home/>}/>
       <Route exact path="/home" render={props=><Home/>}/>
       <Route exact path="/proizvodi/:tip" component={Proizvodi} />
       <Route exact path="/login" render={props=><LogIn/>}/>
       <Route exact path="/register" component={Register} />
       <Route exact path="/korisnik" render={props=><Korisnik/>}/>
       <Route exact path="/kupovina" render={props=><Kupovina/>}/>
       <Route exact path="/product/:id" component={Product} />
       <Route exact path="/ukloniti/:id" component={Obrisan} />
       <Route exact path="/omiljeno" component={Fav}/>
       <Route component={Error}/>
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
  proizvodi:state.proizvodi.proizvod,
  korpa:state.korpa.korpa
})
export default connect(mapStateToProps,{dohvatiProizvode})(App);
