import {DODAJUOMILJENO,FILTRIRANJEOMILJENIH} from './types'

export const filtriraj=(niz,element)=>dispatch=>{
    var niz2 = niz.filter(n=>n!==element)
    console.log("FILTRIRANJE")
    dispatch({
        type:FILTRIRANJEOMILJENIH,
        payload:niz2
    })
}
export const dodajUOmiljeno=(proizvod,postojeciniz)=>dispatch=>{
    console.log("DODAJ U OMILJENO POZVANO")
    console.log("Zeljeni proizvod",proizvod)
    console.log("Postojeci niz",postojeciniz)
    var br=0;
    for(let i=0;i<postojeciniz.length;i++)
    {
      if(postojeciniz[i].naziv===proizvod.naziv)
      {
        br=1;
      }
    }
    if(br===0)
    {
        var niz = postojeciniz
        niz.push(proizvod)
        dispatch({
            type:DODAJUOMILJENO,
            payload:niz
       })
    }    
}
