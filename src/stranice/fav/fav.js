import React, { Component } from 'react'
import { connect } from 'react-redux'
import Omiljenocard from '../omiljenocard'
import {
  Link,
} from "react-router-dom";
import '../komponente/kupovina.scss'
class Fav extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    console.log(this.props.omiljeno)
    if (this.props.omiljeno !== null) {
      if (this.props.omiljeno.length !== 0) {
        return (
          <div className="kupovina">
            <p>Vaši omiljeni proizvodi</p>
            {this.props.omiljeno.map(k => (
              <div className="pored">
                <Omiljenocard product={k} vrsta="korpa" />
              </div>
            ))}
          </div>
        );
      }
      else {
        return (
          <div>
            <div className="prazno">
              <p className="ikonicaKorpe"><i class="fas fa-shopping-cart"></i></p>
              <p>Vaša korpa je prazna</p>
              <p><Link className="back" to="/home">Vrati se na početnu stranu</Link></p>
            </div>
          </div>
        );
      }
    }
  }
}
const mapStateToProps = state => ({
  korpa: state.korpa.korpa,
  omiljeno: state.omiljeno.omiljeno
})


export default connect(mapStateToProps)(Fav)