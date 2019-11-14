import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './prijavanav.scss'
import { odjavi } from '../../actions/uloguj'
export class Prijavanav extends Component {
    render() {
        console.log(this.props.korisnik)
        console.log(this.props.broj)
        if (this.props.korisnik === null || this.props.korisnik === undefined) {
            return (
                <div>
                    <div className="prijavanav">
                        <Link to="/login" ><li>Prijava</li></Link>
                        <Link to="/omiljeno" ><li><i class="far fa-heart"></i></li></Link>
                        <Link to="/kupovina"  ><li><i class="fas fa-shopping-cart"></i>{this.props.broj}</li></Link>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div>
                    <div className="prijavanav">
                        <Link to="/korisnik" ><li>{this.props.korisnik[0].ime}</li></Link>
                        <Link to="/login" ><li onClick={this.props.odjavi} >Odjavi se</li></Link>

                        <Link to="/omiljeno" ><li><i class="far fa-heart"></i></li></Link>
                        <Link to="/kupovina"  ><li><i class="fas fa-shopping-cart"></i>{this.props.broj}</li></Link>
                    </div>
                </div>
            )
        }
    }
}
const mapStateToProps = state => ({
    korisnik: state.korisnik.korisnik,
    broj: state.broj.broj
})

export default connect(mapStateToProps, { odjavi })(Prijavanav)
