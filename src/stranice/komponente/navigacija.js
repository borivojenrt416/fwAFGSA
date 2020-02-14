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
                    <Link to="/proizvodi/desktop" ><li className={localStorage.getItem("tip")=="desktop"?"act":""} >Desktop računari</li></Link>
                    <Link to="/proizvodi/monitori"  ><li className={localStorage.getItem("tip")=="monitori"?"act":""}>Monitori</li></Link> 
                    <Link to="/proizvodi/maticneploce"  ><li className={localStorage.getItem("tip")=="maticneploce"?"act":""}>Matične ploče</li></Link> 
                    <Link to="/proizvodi/procesori"  ><li className={localStorage.getItem("tip")=="procesori"?"act":""}>Procesor</li></Link> 
                    <Link to="/proizvodi/memorije" ><li className={localStorage.getItem("tip")=="memorije"?"act":""}>Memorije</li></Link> 
                    <Link to="/proizvodi/grafickekarte"  ><li className={localStorage.getItem("tip")=="grafickekarte"?"act":""}>Grafičke kartice</li></Link> 
                    <Link to="/proizvodi/hdd"  ><li className={localStorage.getItem("tip")=="hdd"?"act":""}>HDD</li></Link>
                    <Link to="/proizvodi/ssd"  ><li className={localStorage.getItem("tip")=="ssd"?"act":""}>SSD</li></Link>
                    <Link to="/proizvodi/napajanja"  ><li className={localStorage.getItem("tip")=="napajanja"?"act":""}>Napajanja</li></Link>
                    <Link to="/proizvodi/kucista"  ><li className={localStorage.getItem("tip")=="kucista"?"act":""}>Kućišta</li></Link>  
                </ul>
              
            </div>
    );
    }
}
const mapStateToProps = state =>({
    tip:state.tip.tip
  })
  
  export default connect(mapStateToProps)(Navigacija);