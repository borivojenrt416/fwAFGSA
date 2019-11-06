import React, { Component } from 'react'
import './searchbar.scss'

export class Searchbar extends Component {
    render() {
        return (
            <div>
               <input type="text" placeholder="Unesite naziv proizvoda..." /><button type="submit"><i class="fas fa-search"></i></button>
               </div>
        )
    }
}

export default Searchbar;
