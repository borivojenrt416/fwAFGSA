import React,{Component} from 'react'
import Navigacija from './navigacija'
import {Link} from 'react-router-dom'
import './heder.css'

class Heder extends Component{
constructor(props){
    super(props);

}

    render(){

        const s={
            textDecoration:'none'
        }
        return(
        <div className="hed">
           <Link to="/home" style={s}><h1 className="title">🛒SHOP</h1></Link>
            <Navigacija br = {this.props.brojPr}  mom={this.props.moment} odjava={this.props.odjavise} />
        </div>
        );
    }
}

export default Heder;