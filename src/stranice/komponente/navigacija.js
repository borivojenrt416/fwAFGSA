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
                    <Link to="/proizvodi/MaticnePloce"  ><li className={localStorage.getItem("tip")=="MaticnePloce"?"act":""}>Matične ploče</li></Link> 
                    <Link to="/proizvodi/Procesori"  ><li className={localStorage.getItem("tip")=="Procesori"?"act":""}>Procesor</li></Link> 
                    <Link to="/proizvodi/Memorije" ><li className={localStorage.getItem("tip")=="Memorije"?"act":""}>Memorije</li></Link> 
                    <Link to="/proizvodi/GrafickeKarte"  ><li className={localStorage.getItem("tip")=="GrafickeKarte"?"act":""}>Grafičke kartice</li></Link> 
                    <Link to="/proizvodi/HDD"  ><li className={localStorage.getItem("tip")=="HDD"?"act":""}>HDD</li></Link>
                    <Link to="/proizvodi/SSD"  ><li className={localStorage.getItem("tip")=="SSD"?"act":""}>SSD</li></Link>
                    <Link to="/proizvodi/Napajanja"  ><li className={localStorage.getItem("tip")=="Napajanja"?"act":""}>Napajanja</li></Link>
                    <Link to="/proizvodi/Kucista"  ><li className={localStorage.getItem("tip")=="Kucista"?"act":""}>Kućišta</li></Link>  
                </ul>
              
            </div>
    );
    }
}
const mapStateToProps = state =>({
    tip:state.tip.tip
  })
  
  export default connect(mapStateToProps)(Navigacija);