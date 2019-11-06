import {UZMI_TIP} from './types';


export const uzmiTip=(t)=>dispatch=>{
    console.log('tip')
    fetch(`http://localhost:4000/korisnici/${t}`)
    .then(response=>response.json())
   .then(tip=>dispatch({
        type:UZMI_TIP,
        payload:tip.data
   }))
}
