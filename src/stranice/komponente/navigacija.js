import React,{Component} from 'react'
import {BrowserRouter,Route,Link} from 'react-router-dom'
import './navigacija.scss'
import "../../../node_modules/@fortawesome/fontawesome-free/css/all.css"
import { Switch } from 'react-router/esm/react-router'
import Korisnik from './korisnik'

class Navigacija extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             broj : localStorage.getItem("brojProizvoda"),
        }
    }
    render(){
   
        // if(this.props.mom===null)
        // {
        return(
                <div className="lista">
                    <ul className="flex-container">
                        {/* <Link to="/home" ><li>HOME</li></Link>
                      
                       
                         */}
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
    // else{
    //     return(

        

    //         <div>
                
    //             <ul className="flex-container">
    //                 {/* <Link to="/home" ><li>HOME</li></Link> */}
                
    //                 <Link to="/proizvodi" ><li>PROIZVODI</li></Link>
    //                 <Link to="/"onClick={this.props.odjava}><li>Logout</li></Link>
    //                 <Link to="/korisnik" ><li>{this.props.mom.ime}</li></Link>
    //                 <Link to="/omiljeno" ><li>♥</li></Link>
    //                 <Link to="/kupovina"  user={this.props.mom}><li>🛒{this.props.br}</li></Link>
    //             </ul>
               
    //         </div>
    // );
    // }
// }
}

export default Navigacija;