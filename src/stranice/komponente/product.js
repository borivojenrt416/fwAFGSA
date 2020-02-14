import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {dodajUKorpu,vratiBroj} from '../../actions/dodajUKorpu'
import './product.scss'
class Product extends Component{
    constructor(props){
        super(props);
        this.state={
                objekat:null
        }
    }
    componentWillUpdate(prevProps){

        if(this.props.match.params.Naziv!==prevProps.match.params.Naziv)
        {
           fetch(`http://localhost:4000/korisnici/proizvod/${prevProps.match.params.IdAll}/${prevProps.match.params.Naziv}`)
        .then(response=>response.json())
        .then(vrati=>{
            this.setState({
                objekat:vrati.data[0]
            })
        })
        }}
    componentWillMount(){
        fetch(`http://localhost:4000/korisnici/proizvod/${this.props.match.params.IdAll}/${this.props.match.params.Naziv}`)
        .then(response=>response.json())
        .then(vrati=>{
            this.setState({
                objekat:vrati.data[0]
            })
        })
    }
dodaj=()=>{
    this.props.dodajUKorpu(this.state.objekat,this.props.korpa)
    this.props.vratiBroj(this.props.korpa)

}
render(){

    if(this.state.objekat!==undefined&&this.state.objekat!==null)
    {
    return(
<div className="proizvod">
    <div className="levaStrana">
    <p className="nazivpr">
        {this.state.objekat.Naziv}
        </p>
    <div className="img">
        <img src={this.state.objekat.image} />
    </div>
    </div>
    <div className="desnaStrana">
        <p><span id="besplatno">Opis proizvoda : </span> {this.state.objekat.opis}</p>
        <p><span id="besplatno">Cena proizvoda : </span> {this.state.objekat.Cena}<span>RSD</span></p>
        <hr/>
        <h1><i class="fas fa-truck"></i></h1>
                <p><span id="besplatno">BESPLATNA ISPORUKA</span> na teritoriji cele SRBIJE svakim radnim danom</p>
                <hr/>
                <div className="dugmesredina">
                <button type="submit" className="kupi" id={this.state.objekat.Naziv} onClick={this.dodaj}>DODAJ U KORPU<span id="korpa"><i class="fas fa-cart-plus"></i></span></button>
                </div>   </div>
</div>
    );
    }
  else
  {
      return(
        <div className="nema">
        <p>Poštovani korisniče, trenutno nemamo traženi proizvod u bazi!</p>
        <p>Molimo Vas da se<Link className="n" to="/"> vratite na početnu stranu. </Link>Hvala</p>
        </div>)
  }
}
}
const mapStateToProps = state =>({
    korpa:state.korpa.korpa
   })

export default connect(mapStateToProps,{dodajUKorpu,vratiBroj})(Product);