import React,{Component} from 'react'
import {BrowserRouter,Route,Link} from 'react-router-dom'
import './navigacija.css'
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
        const styleLinks = {
                textDecoration : 'none',
                fontSize:'1.2vw',
                Color:'black'
                
        }

        const desno={
            textDecoration : 'none',
                fontSize:'1.2vw',
                float:'right'
        }
        const mali={
            fontSize:'0.8vw'
        }
        if(this.props.mom===null)
        {
        return(

        

                <div>
                    <ul className="flex-container">
                        <Link to="/home" style={styleLinks}><li>HOME</li></Link>
                        <Link to="/onama" style={styleLinks}><li>O NAMA</li></Link>
                        <Link to="/proizvodi" style={styleLinks}><li>PROIZVODI</li></Link>
                        <Link to="/login" style={desno}><li>Prijava</li></Link>
                        <Link to="/omiljeno" style={desno}><li>♥</li></Link>
                        <Link to="/kupovina" style={desno} ><li>🛒{this.props.br}</li></Link>
                    </ul>
                   
                </div>
        );
    }
    else{
        return(

        

            <div>
                
                <ul className="flex-container">
                    <Link to="/home" style={styleLinks}><li>HOME</li></Link>
                    <Link to="/onama" style={styleLinks}><li>O NAMA</li></Link>
                    <Link to="/proizvodi" style={styleLinks}><li>PROIZVODI</li></Link>
                    <Link to="/" style={desno} onClick={this.props.odjava}><li>Logout</li></Link>
                    <Link to="/korisnik" style={desno}><li>{this.props.mom.ime}</li></Link>
                    <Link to="/omiljeno" style={desno}><li>♥</li></Link>
                    <Link to="/kupovina" style={desno} user={this.props.mom}><li>🛒{this.props.br}</li></Link>
                </ul>
               
            </div>
    );
    }
}
}

export default Navigacija;