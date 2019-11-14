import {DODAJUKORPU,VRATIPORUKU,ISPRAZNIKORPU,VRATIBROJKORPA,FILTRIRANJEKORPE,KOLICINA} from './types'

export const kolicinaputacena=(id,kolicina,niz)=>dispatch=>{
    console.log(id,kolicina)
    console.log(niz)
    var ukupno=0
    for(let i=0;i<niz.length;i++)
    {
        console.log(niz[i].idpr)
       if(niz[i].idpr===id)
       {
        var a = JSON.stringify(niz[i].cena)
        var d = a.replace('.','')
        var s = JSON.parse(d)
        var izracunaj = parseInt(s)*parseInt(kolicina)
        ukupno+=izracunaj
       }
       else
       {
        var a = JSON.stringify(niz[i].cena)
        var d = a.replace('.','')
        var s = JSON.parse(d)
        ukupno+=parseInt(s)
       }
    }
    console.log(ukupno)
    var n = ukupno.toLocaleString()
    console.log(n)
    dispatch({
        type:KOLICINA,
        c:n
    })

}
export const isprazniKorpu=()=>dispatch=>{
    dispatch({
        type:ISPRAZNIKORPU,
        payload:[],
        c:""
    })
}
export const filtriraj=(niz,element,staraCena,novac)=>dispatch=>{
    var niz2 = niz.filter(n=>n!==element)
    var a = JSON.stringify(staraCena)
    var d = a.replace('.','')
    var s = JSON.parse(d)
    console.log(novac)
    var nova = parseInt(s)-parseInt(novac)
    console.log("FILTRIRANJE")
    var t = nova.toLocaleString()
    console.log(t)
    // var ukupno=0
    // for(let i=0;i<niz2.length;i++)
    // {
       
    //     var a = JSON.stringify(niz2[i].cena)
    //     var d = a.replace('.','')
    //     var s = JSON.parse(d)
    //     ukupno+=parseInt(s)
    // }
    // var n = ukupno.toLocaleString()
    dispatch({
        type:FILTRIRANJEKORPE,
        payload:niz2,
        br:niz2.length,
        c:t
    })
}

export const vratiBroj=(proizvodi)=>dispatch=>{
    dispatch({
        type:VRATIBROJKORPA,
        payload:proizvodi.length
    })
}
export const dodajUKorpu=(proizvod,postojeciniz)=>dispatch=>{
    console.log("Zeljeni proizvod",proizvod)
    console.log("Postojeci niz",postojeciniz)
    var br=0;
    for(let i=0;i<postojeciniz.length;i++)
    {
      if(postojeciniz[i].naziv===proizvod.naziv)
      {
        br=1;
        dispatch({
            type:VRATIPORUKU,
            payload:"Proizvod je već dodat u Vašu korpu!"
       })
      }
    }
    if(br===0)
    {
        var niz = postojeciniz
        niz.push(proizvod)
        var ukupno=0
        for(let i=0;i<niz.length;i++)
        {
           
            var a = JSON.stringify(niz[i].cena)
            var d = a.replace('.','')
            var s = JSON.parse(d)
            ukupno+=parseInt(s)
        }
        var n = ukupno.toLocaleString()
        dispatch({
            type:DODAJUKORPU,
            payload:niz,
            c:n
       })
    }    
}
