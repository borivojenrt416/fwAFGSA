import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './prijavanav.scss'
export class Prijavanav extends Component {
    render() {
        return (
            <div>
                  <div className="prijavanav">
                        <Link to="/login" ><li>Prijava</li></Link>
                        <Link to="/omiljeno" ><li><i class="far fa-heart"></i></li></Link>
                        <Link to="/kupovina"  ><li><i class="fas fa-shopping-cart"></i>{this.props.br}</li></Link>
                        </div>
            </div>
        )
    }
}

export default Prijavanav
