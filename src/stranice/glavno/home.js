import React, { Component } from 'react'
import Preporuka from '../komponente/preporuka'
import Pametanizbor from '../komponente/pametanizbor'
import Letizimi from '../komponente/letizimi'
import './home.scss'

import {connect} from 'react-redux'
import {dohvatiProizvode} from '../../actions/proizvodiAkcije'

export class Home extends Component {
    constructor(props){
        super(props);
        this.state={
          proizvodi:[]
        }
    }
 
    componentWillMount()
    {
      this.props.dohvatiProizvode();
    }
 
    // pokupiProizvode=()=>{
    //   fetch('http://localhost:4000/korisnici/sviproizvodi')
    //   .then(response=>response.json())
    //   .then(response=>{
    //     this.setState({
    //       proizvodi:response.data
    //     })
    //   })
    // }

    render() 
    
    {
  console.log(this.props.proizvodi)
          return (
            <div>
                 <div className="preporuka">
               <Preporuka proizvodi={this.props.proizvodi}/>
               <Pametanizbor proizvodi={this.props.proizvodi}/>
               <Letizimi proizvodi={this.props.proizvodi}/>
               </div>
             
            </div>
        )
    }
}
const mapStateToProps = state =>({
  proizvodi:state.proizvodi.proizvodi
})
export default connect(mapStateToProps,{dohvatiProizvode})(Home);
