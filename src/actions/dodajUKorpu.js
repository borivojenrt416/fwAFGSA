import {DODAJUKORPU,VRATIPORUKU,ISPRAZNIKORPU,VRATIBROJKORPA,FILTRIRANJEKORPE,KOLICINA, RACUN, CENA_TIP} from './types'


export function racunanje(korpa){
    var racun=0;
    for(let i=0;i<korpa.length;i++)
    {
        var a = JSON.stringify(korpa[i].proizvod.Cena)
        var d = a.replace('.','')
        var s = JSON.parse(d)
        var izracunaj = parseInt(s)*parseInt(korpa[i].kolicina)
        racun+=izracunaj
    }
    var s = racun.toLocaleString()
    return s;
}

export const racunaj = (korpa)=>dispatch=>{
    console.log("POZVANO???")
    var racun = 0;
    console.log(korpa)
    // for(let i=0;i<korpa.length;i++)
    // {
    //     var a = JSON.stringify(korpa[i].proizvod.cena)
    //     var d = a.replace('.','')
    //     var s = JSON.parse(d)
    //     var izracunaj = parseInt(s)*parseInt(korpa[i].kolicina)
    //     racun+=izracunaj
    // }
    // var s = racun.toLocaleString()
    // console.log(s)
    var t = racunanje(korpa)
    console.log(t)
    dispatch({
        type:RACUN,
        c:t
    })

}
export const kolicinaputacena=(id,kolicina,niz)=>dispatch=>{
    console.log("KOLICINAPUTACENA???")
    var ukupno=0;
    for(let i=0;i<niz.length;i++)
  
    {
        console.log(niz[i].proizvod.IdDesktop);
       if(niz[i].proizvod.IdDesktop===id)
       {
        console.log("NADJENO???")
        niz[i].kolicina = kolicina;
        console.log(niz[i].kolicina)
       }
    }
    var n = racunanje(niz);
    //     var a = JSON.stringify(niz[i].proizvod.cena)
    //     var d = a.replace('.','')
    //     var s = JSON.parse(d)
    //     var izracunaj = parseInt(s)*parseInt(kolicina)
    //     ukupno+=izracunaj
    //    }
    //    else
    //    {
    //     var a = JSON.stringify(niz[i].cena)
    //     var d = a.replace('.','')
    //     var s = JSON.parse(d)
    //     ukupno+=parseInt(s)
    //    }
    // }
    // console.log(ukupno)
    // var n = ukupno.toLocaleString()
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
export const filtriraj=(niz,element)=>dispatch=>{
    var niz2 = niz.filter(n=>n.proizvod!==element)
    // var a = JSON.stringify(staraCena)
    // var d = a.replace('.','')
    // var s = JSON.parse(d)
    // var nova = parseInt(s)-parseInt(novac)
    // var t = nova.toLocaleString()
    var t = racunanje(niz2)
    console.log("NAKON BRISANJA CENA", t)
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
export const dodajUKorpu=(proizvod,postojeciniz,kolicina=1)=>dispatch=>{
    var br=0;
    for(let i=0;i<postojeciniz.length;i++)
    {
      if(postojeciniz[i].Naziv===proizvod.Naziv)
      {
        br=1;
        dispatch({
            type:VRATIPORUKU,
            payload:"Proizvod je vec dodat u Vau korpu!"
       })
      }
    }
    if(br===0)
    {
        var niz = postojeciniz
        niz.push({proizvod,kolicina})
        var ukupno=0
        for(let i=0;i<niz.length;i++)
        {
            var a = JSON.stringify(niz[i].proizvod.Cena)
            var d = a.replace('.','')
            var s = JSON.parse(d)
            var izracunaj = parseInt(s)*parseInt(niz[i].kolicina)
           ukupno+=izracunaj
        }
        var n = ukupno.toLocaleString()
        dispatch({
            type:DODAJUKORPU,
            payload:niz,
            c:n
       })
    }    
}