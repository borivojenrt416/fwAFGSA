import {SORTIRAJ_TIP} from './types'


export const sortirajTip=(nesto,vrsta)=>dispatch=>{
    console.log(vrsta)

    var niz = nesto;
    for(let i=0;i<niz.length-1;i++)
    {
      var a = JSON.stringify(niz[i].cena).replace('.','')
      var b = parseInt(JSON.parse(a))
      for(let j=i+1;j<niz.length;j++)
      {
        var c = JSON.stringify(niz[j].cena).replace('.','')
        var d = parseInt(JSON.parse(c))
        if(vrsta==="rast")
        {
            if(b>d)
            {
              var temp = niz[i]
              niz[i]=niz[j]
              niz[j]=temp
            }
        }
        if(vrsta==="opad")
        {
          if(b<d)
          {
            var temp = niz[i]
            niz[i]=niz[j]
            niz[j]=temp
          }
        }
      }
    }

    dispatch({
        type:SORTIRAJ_TIP,
        payload:niz
   })
}
