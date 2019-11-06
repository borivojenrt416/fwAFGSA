import React,{Component} from 'react'
import Navigacija from './navigacija'
import {Link} from 'react-router-dom'
import logo from './logo.png'
import './heder.scss'

import Searchbar from './searchbar'
import Prijavanav from './prijavanav'
import Ispodsearchbara from './ispodsearchbara'
class Heder extends Component{
constructor(props){
    super(props);

}

    render(){

        return(
        <div className="hed">
            <div className="content">
            <div className="icon">
           <Link to="/home"><img className="title" src={logo} /></Link>
           </div>
            </div>
            <div classname="nav"><Navigacija   mom={this.props.moment} odjava={this.props.odjavise} /> 
            </div>
            <div className="unos">
            <Searchbar/>
            </div>
            <div className="prijava">
                <Prijavanav br = {this.props.brojPr}/>
            </div>
            <div className="isp">
            <Ispodsearchbara/>
            </div>
        </div>
        );
    }
}

export default Heder;