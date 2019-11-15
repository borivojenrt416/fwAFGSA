import React, { Component } from "react";
import { Link } from "react-router-dom";
import './proizvodi.scss'
import Card from '../card'
import {connect} from 'react-redux'
import { uzmiTip,sortirajTip } from "../../actions/tipAkcija";

const Proizvod = ({ match }) => <p>{match.params.id}</p>;

class Proizvodi extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
    
  }
componentWillMount()
{
   this.props.uzmiTip(this.props.match.params.tip)
}
componentWillUpdate(prevProps){
  if(this.props.match.params.tip!==prevProps.match.params.tip)
  {
    this.props.uzmiTip(prevProps.match.params.tip)
  }
  }
sort=(e)=>{
this.props.sortirajTip(this.props.tip,e.target.value)
}
  render() 
  {
    return (
      <div className="sve">
        <div className="kf">
        <form>
      
                <label htmlFor="sort">Sortiraj po </label>
                 <Link className="slct"><select id="sort" onChange={this.sort}>
                        <option value="rast" >Ceni rastuće</option>
                        <option value="opad" >Ceni opadajuće</option>
                    </select></Link>
                   
                </form>
                </div>
       <div>
       <div className="proiz">
         <div className="proiz1">
           {
            this.props.tip.map(i=>(
               <div className="pored">
               <Card product={i}/>
               </div>
             ))
           }
           </div>
           </div>
         </div>
      </div>
    );
  }
}
const mapStateToProps = state =>({
  tip:state.tip.tip
})

export default connect(mapStateToProps,{uzmiTip,sortirajTip})(Proizvodi);
