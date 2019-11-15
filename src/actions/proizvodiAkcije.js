import {DOHVATI_PROIZVODE} from './types';


export const dohvatiProizvode = () => dispatch => {
        fetch('http://localhost:4000/korisnici/sviproizvodi')
        .then(response=>response.json())
        .then(proizvodi=>dispatch({
            type:DOHVATI_PROIZVODE,
            payload: proizvodi.data
        }));      
};

