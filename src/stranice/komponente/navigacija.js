import React,{Component} from 'react'
import {BrowserRouter,Route,Link} from 'react-router-dom'
import './navigacija.scss'
import "../../../node_modules/@fortawesome/fontawesome-free/css/all.css"
import {connect} from 'react-redux'


class Navigacija extends Component{
    constructor(props) {
        super(props)
    

    }

    render(){
        return(
            <div className="lista">
                <ul className="flex-container">
                    <Link to="/proizvodi/Desktop" ><li className={localStorage.getItem("tip")=="Desktop"?"act":""} >Desktop računari</li></Link>
                    <Link to="/proizvodi/Monitori"  ><li className={localStorage.getItem("tip")=="Monitori"?"act":""}>Monitori</li></Link> 
                    <Link to="/proizvodi/klima"  ><li className={localStorage.getItem("tip")=="klima"?"act":""}>Matične ploče</li></Link> 
                    <Link to="/proizvodi/telefon"  ><li>Procesor</li></Link> 
                    <Link to="/proizvodi/tablet"  ><li>Memorije</li></Link> 
                    <Link to="/proizvodi/kamera"  ><li>Grafičke kartice</li></Link> 
                    <Link to="/proizvodi/miš"  ><li>HDD</li></Link>
                    <Link to="/proizvodi/miš"  ><li>SSD</li></Link>
                    <Link to="/proizvodi/miš"  ><li>Napajanja</li></Link>
                    <Link to="/proizvodi/miš"  ><li>Kućišta</li></Link>  
                </ul>
              
            </div>
    );
    }
}
const mapStateToProps = state =>({
    tip:state.tip.tip
  })
  
  export default connect(mapStateToProps)(Navigacija);