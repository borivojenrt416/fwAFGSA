import {UZMI_TIP,SORTIRAJ_TIP} from './types';

export const sortirajTip=(nesto,vrsta)=>dispatch=>{
     console.log(vrsta)
     console.log(nesto)
    var niz = nesto;
     for(let i=0;i<niz.length;i++)
     {

       for(let j=0;j<niz.length-i-1;j++)
       {
        var a = JSON.stringify(niz[j].cena).replace('.','')
        var b = parseInt(JSON.parse(a))
         var c = JSON.stringify(niz[j+1].cena).replace('.','')
         var d = parseInt(JSON.parse(c))
         if(vrsta==="rast")
         {
         if(b>d)
           {
            console.log(b,d)
             var temp = niz[j]
             niz[j]=niz[j+1]
             niz[j+1]=temp
           }
          }
         if(vrsta==="opad")
         {
           if(b<d)
           {
            console.log(b,d)
            var temp = niz[j]
            niz[j]=niz[j+1]
            niz[j+1]=temp
           }
         }
       }
      }
      console.log(niz)
     dispatch({
         type:SORTIRAJ_TIP,
         payload:niz
    })
 }
 

export const uzmiTip=(t)=>dispatch=>{
    console.log('tip')
    fetch(`http://localhost:4000/korisnici/${t}`)
    .then(response=>response.json())
   .then(tip=>dispatch({
        type:UZMI_TIP,
        payload:tip.data
   }))
}
