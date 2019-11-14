import React,{Component} from 'react'
import {BrowserRouter,Route,Link} from 'react-router-dom'
import './navigacija.scss'
import "../../../node_modules/@fortawesome/fontawesome-free/css/all.css"
class Navigacija extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             broj : localStorage.getItem("brojProizvoda"),
        }
    }
    render(){
        return(
                <div className="lista">
                    <ul className="flex-container">
                        <Link to="/proizvodi/monitor"  ><li>Monitori</li></Link>
                        <Link to="/proizvodi/klima"  ><li>Klime</li></Link> 
                        <Link to="/proizvodi/telefon"  ><li>Telefoni</li></Link> 
                        <Link to="/proizvodi/tablet"  ><li>Tableti</li></Link> 
                        <Link to="/proizvodi/kamera"  ><li>Kamere</li></Link> 
                        <Link to="/proizvodi/miš"  ><li>Miševi</li></Link> 
                    </ul>
                  
                </div>
        );
    }
}

export default Navigacija;