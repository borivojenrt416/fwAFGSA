import React, { Component } from 'react'
import './dostava.scss'
import { KurirskaSluzba } from './kurirskaSluzba'
import { LicnoPreuzimanje } from './licnoPreuzimanje'
export class Dostava extends Component {
    constructor(props) {
        super(props);
        this.state = {
dostava:'Dostava'
        }
    }

    changeDostava = (e) => {
        this.setState({
            dostava:e.target.value
        })
        this.props.nacinDostave(e.target.value)
    }



    render() {
        const { korisnik } = this.state
        return (
            <div>
                <div className="nazivKomponente"><h2 className="nazivKomponente">Dostava/Preuzimanje robe</h2></div>
                <div className="divForm">

                    <div className="inputRadio">
                        <input type="radio" id="dostava" name="Dostava" defaultChecked value="Dostava" onClick={this.changeDostava} />
                        <label htmlFor="dostava">Dostava</label>
                        <input type="radio" id="preuzimanjeRobe" name="Dostava" value="Preuzimanje robe" onClick={this.changeDostava} />
                        <label htmlFor="preuzimanjeRobe">Preuzimanje robe</label><br />
                    </div>
                    {this.state.dostava === 'Dostava' ? <KurirskaSluzba changeNacinDostave={this.props.changeNacinDostava} /> : <LicnoPreuzimanje changeNacinDostave={this.props.changeNacinDostava}/>}
                </div>
                <hr />

            </div>

        );

    }

}





export default Dostava;