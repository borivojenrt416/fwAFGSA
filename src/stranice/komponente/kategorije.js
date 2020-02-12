import React, { Component } from 'react'
import './kategorije.scss'
import {Link} from 'react-router-dom'
export class Kategorije extends Component {
    render() {
        return (
            <div className="kategorije">
                <p>Kategorije proizvoda</p>
                <hr />
                <ul className="kat">
                    <Link className="link" to="/proizvodi" ><li onClick={this.props.vrs} value="monitor"><i className="fas fa-desktop"></i>  Monitori</li></Link>
                    <Link className="link" value="miš" to="/proizvodi"  ><li ><i className="fas fa-mouse"></i>  Miševi</li></Link>
                    <Link className="link" to="#" ><li onClick={this.props.vrs} value="kamera"><i className="fas fa-camera"></i>  Kamere</li></Link>
                    <Link className="link" to="#" ><li onClick={this.props.vrs} value="klima"><i className="fas fa-air-freshener"></i>  Klime</li></Link>
                    <Link className="link" to="#" ><li onClick={this.props.vrs} value="tablet"><i className="fas fa-tablet-alt"></i>  Tableti</li></Link>
                    <Link className="link" to="#" ><li onClick={this.props.vrs} value="telefon"><i className="fas fa-mobile"></i>  Telefoni</li></Link>
                </ul>
            </div>
        )
    }
}

export default Kategorije
