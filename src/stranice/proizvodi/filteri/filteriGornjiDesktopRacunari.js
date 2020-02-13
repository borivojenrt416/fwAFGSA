import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../proizvodi.scss'
import {connect} from 'react-redux'
import { filteriDesktopRacunara } from "../../../actions/filteriDesktopRacunaraAkcija"

export class FilteriGornjiDekstopRacunari extends Component {
    constructor(props) {
      super(props);
      this.state = {
        filteri:[]
      };

    
    }
    render()
      {
          return(
            <div className="kf">
            <form>
              <div className="filtriranje">
                  <label htmlFor="sort">Sortiraj po </label>
                     <Link to="#" className="slct"><select id="sort" onChange={this.props.filter}>
                            <option value="Scrast" >Ceni rastuce</option>
                            <option value="Scopad" >Ceni opadajuce</option>
                            <option value="Snrast" >Nazivu A-Z</option>
                            <option value="Snopad" >Nazivu Z-A</option>
                        </select></Link>
                        </div>
          <div className="filtriranje">
          <label htmlFor="cenaDo">Cena do </label>
      <Link to="#" className="slct"><select id="cenaDo" onChange={this.props.filter}>
             <option value="dsvi" >Svi proizvodi</option>
             <option value="ddo50" >&lt; 50 000</option>
             <option value="ddo100" >&lt; 100 000</option>
             <option value="ddo200" >&lt; 200 000</option>
             <option value="dpreko200" >&gt; 200 000</option>
         </select></Link>
         </div> <div className="filtriranje">
       <button type="submit" onClick={this.props.clear}>Ocisti filtere</button>
        </div>
    </form>
    </div>
             
          )
      }
      
    }
    export default (FilteriGornjiDekstopRacunari);
    
