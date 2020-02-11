import {UZMI_TIP,SORTIRAJ_TIP,CENA_TIP,FILTERI} from './types';

export const filteri=(filteri,t)=>dispatch=>{
  var niz2=[]
  var cenaFilter="";
  var imaSort="";
  fetch(`http://localhost:4000/korisnici/${t}`)
  .then(response=>response.json())
  .then(niz=>{
    for(let i=0;i<niz.data.length;i++)
    {
      console.log(niz.data[i])
    }
    for(let filterIndex=0;filterIndex<filteri.length;filterIndex++)
    {
      if(filteri[filterIndex][0]==="D")
      cenaFilter=filteri[filterIndex]
    }
    console.log("Pronadjen filter za cenu?",cenaFilter)
    if(cenaFilter!==""){
    console.log("USAO U FILTRIRANJE")
      for(let indeksProizvoda=0;indeksProizvoda<niz.data.length;indeksProizvoda++)
      {
       

        console.log(niz.data[indeksProizvoda])
               var a = JSON.stringify(niz.data[indeksProizvoda].Cena).replace('.','')
               var b = parseInt(JSON.parse(a))
      if(cenaFilter==="Ddo50")
      {
        if(b<=50000)
            niz2.push(niz.data[indeksProizvoda])
      }
      if(cenaFilter==="Ddo100")
      {
        if(b<=100000)
            niz2.push(niz.data[indeksProizvoda])
      }
      if(cenaFilter==="Ddo200")
      {
        if(b<=200000)
        niz2.push(niz.data[indeksProizvoda])
      }
      if(cenaFilter==="Dpreko200")
      {
        if(b>200000)
        niz2.push(niz.data[indeksProizvoda])
      }
     if(cenaFilter==="Dsvi"){
        niz2 = niz.data
      }
    }
  }
  else
  {
    niz2 = niz.data
    console.log(niz2)
  }
    for(let filterIndex=0;filterIndex<filteri.length;filterIndex++)
    {
      if(filteri[filterIndex][0]==="S")
      imaSort=filteri[filterIndex];
    }
    console.log("Pronadjeno sortiranje?",imaSort)
    if(imaSort!=="")
    {
      console.log("USAO U SORTIRANJE")
      for(let i=0;i<niz2.length;i++)
     {

       for(let j=0;j<niz2.length-i-1;j++)
       {
        var a = JSON.stringify(niz2[j].Cena).replace('.','')
        var b = parseInt(JSON.parse(a))
         var c = JSON.stringify(niz2[j+1].Cena).replace('.','')
         var d = parseInt(JSON.parse(c))
         if(imaSort==="Scrast")
         {
         if(b>d)
           {
             var temp = niz2[j]
             niz2[j]=niz2[j+1]
             niz2[j+1]=temp
           }
          }
         if(imaSort==="Scopad")
         {
           if(b<d)
           {
            var temp = niz2[j]
            niz2[j]=niz2[j+1]
            niz2[j+1]=temp
           }
         }
         if(imaSort==="Snrast")
         {
           if(niz2[j].Naziv>niz2[j+1].Naziv)
           {
            var temp = niz2[j]
             niz2[j]=niz2[j+1]
             niz2[j+1]=temp
           }
         }
         if(imaSort==="Snopad")
         {
           if(niz2[j].Naziv<niz2[j+1].Naziv)
           {
            var temp = niz2[j]
            niz2[j]=niz2[j+1]
            niz2[j+1]=temp
           }
          }
         }
    }
  }

    // for(let i=0;i<niz.data.length;i++)
    // {

 
    //     if(vrsta==="do50")
    //     {
    //     if(b<=50000)
    //      niz2.push(niz.data[i])
    //      }
    //     if(vrsta==="do100")
    //     {
    //       if(b<=100000)
    //       niz2.push(niz.data[i])
    //     }
    //     if(vrsta==="do200")
    //     {
    //      if(b<=200000)
    //       niz2.push(niz.data[i])
    //     }
    //     if(vrsta==="preko200")
    //     {
    //      if(b>200000)
    //      niz2.push(niz.data[i])
    //     }
    
    //  }
     console.log(niz2)
     dispatch({
      type:FILTERI,
      payload:niz2
  })
  })
}
export const cenaTipDo=(vrsta,t)=>dispatch=>{

  var niz2=[]
  fetch(`http://localhost:4000/korisnici/${t}`)
  .then(response=>response.json())
  .then(niz=>{
    console.log(niz.data)
    for(let i=0;i<niz.data.length;i++)
    {
 
     console.log(niz.data[i])
       var a = JSON.stringify(niz.data[i].Cena).replace('.','')
       var b = parseInt(JSON.parse(a))
 
        if(vrsta==="do50")
        {
        if(b<=50000)
         niz2.push(niz.data[i])
         }
        if(vrsta==="do100")
        {
          if(b<=100000)
          niz2.push(niz.data[i])
        }
        if(vrsta==="do200")
        {
         if(b<=200000)
          niz2.push(niz.data[i])
        }
        if(vrsta==="preko200")
        {
         if(b>200000)
         niz2.push(niz.data[i])
        }
    
     }
     console.log(niz2)
     dispatch({
      type:CENA_TIP,
      payload:niz2
  })
  })
     

}

export const sortirajTip=(prosledjeniProizvodi,vrsta)=>dispatch=>{
    var niz = prosledjeniProizvodi;
     for(let i=0;i<niz.length;i++)
     {

       for(let j=0;j<niz.length-i-1;j++)
       {
        var a = JSON.stringify(niz[j].Cena).replace('.','')
        var b = parseInt(JSON.parse(a))
         var c = JSON.stringify(niz[j+1].Cena).replace('.','')
         var d = parseInt(JSON.parse(c))
         if(vrsta==="crast")
         {
         if(b>d)
           {
             var temp = niz[j]
             niz[j]=niz[j+1]
             niz[j+1]=temp
           }
          }
         if(vrsta==="copad")
         {
           if(b<d)
           {
            var temp = niz[j]
            niz[j]=niz[j+1]
            niz[j+1]=temp
           }
         }
         if(vrsta==="nrast")
         {
           if(niz[j].Naziv>niz[j+1].Naziv)
           {
            var temp = niz[j]
            niz[j]=niz[j+1]
            niz[j+1]=temp
           }
         }
         if(vrsta==="nopad")
         {
           if(niz[j].Naziv<niz[j+1].Naziv)
           {
            var temp = niz[j]
            niz[j]=niz[j+1]
            niz[j+1]=temp
           }
         }
       }
      }
     dispatch({
         type:SORTIRAJ_TIP,
         payload:niz
    })
 }
 

export const uzmiTip=(t)=>dispatch=>{
    fetch(`http://localhost:4000/korisnici/${t}`)
    .then(response=>response.json())
   .then(tip=>dispatch({
        type:UZMI_TIP,
        payload:tip.data
   }))
}

export const nista=()=>dispatch=>{
  dispatch({
    type:UZMI_TIP,
    payload:null
  })
}