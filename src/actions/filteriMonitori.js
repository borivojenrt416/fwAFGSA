import {FILTERI} from "./types";

export function filtrirajProizvodjaca(proizvodjacFilteri, niz) {
    var noviNiz = [];
    console.log(proizvodjacFilteri,niz)
    for (let f = 0; f < proizvodjacFilteri.length; f++) {
      for (let i = 0; i < niz.length; i++) {
        if (niz[i].Proizvodjac === proizvodjacFilteri[f]) {
          noviNiz.push(niz[i]);
        }
      }
    }
    console.log(noviNiz);
    return noviNiz;
  }
  
  export function filtrirajPoCeni(vrednost,niz)
  {
    var noviNiz=[]
    for (
      let indeksProizvoda = 0;indeksProizvoda < niz.length;indeksProizvoda++)
       {
      // console.log(niz[indeksProizvoda]);
      var a = JSON.stringify(niz[indeksProizvoda].Cena).replace(".", "");
      var b = parseInt(JSON.parse(a));
      if (vrednost === "ddo25") {
        if (b <= 25000) noviNiz.push(niz[indeksProizvoda]);
      }
      if (vrednost === "ddo50") {
        if (b <= 50000) noviNiz.push(niz[indeksProizvoda]);
      }
      if (vrednost === "ddo100") {
        if (b <= 100000)noviNiz.push(niz[indeksProizvoda]);
      }
      if (vrednost === "dpreko100") {
        if (b > 100000) noviNiz.push(niz[indeksProizvoda]);
      }
      if (vrednost === "dsvi") {
        noviNiz = niz;
      }
    }
    return noviNiz;
  }
  
  export function filtrirajPoDijagonali(dijagonalaFilteri, niz) {
    var noviNiz = [];
    for (let f = 0; f < dijagonalaFilteri.length; f++) {
      for (let i = 0; i < niz.length; i++) {
        if (niz[i].Dijagonala === dijagonalaFilteri[f]) {
          noviNiz.push(niz[i]);
        }
      }
    }
    console.log(noviNiz);
    return noviNiz;
  }
  
  export function filtrirajPoPanelu(paneliFilteri, niz) {
    var noviNiz = [];
    for (let f = 0; f < paneliFilteri.length; f++) {
      for (let i = 0; i < niz.length; i++) {
        if (niz[i].Tip_panela === paneliFilteri[f]) {
          noviNiz.push(niz[i]);
        }
      }
    }
    console.log(noviNiz);
    return noviNiz;
  }
  
  export function filtrirajPoRezoluciji(rezolucijaFilteri, niz) {
    var noviNiz = [];
    for (let f = 0; f < rezolucijaFilteri.length; f++) {
      for (let i = 0; i < niz.length; i++) {
        if (niz[i].Rezolucija === rezolucijaFilteri[f]) {
          noviNiz.push(niz[i]);
        }
      }
    }
    console.log(noviNiz);
    return noviNiz;
  }
  
  export function filtrirajPoTS(TSFilteri, niz) {
    var noviNiz = [];
    for (let f = 0; f < TSFilteri.length; f++) {
      for (let i = 0; i < niz.length; i++) {
        if (niz[i].Touch_screen === TSFilteri[f]) {
          noviNiz.push(niz[i]);
        }
      }
    }
    console.log(noviNiz);
    return noviNiz;
  }
  
  export function filtrirajPoOdzivu(odzivFilteri, niz) {
    var noviNiz = [];
    for (let f = 0; f < odzivFilteri.length; f++) {
      for (let i = 0; i < niz.length; i++) {
        if (niz[i].Odziv === odzivFilteri[f]) {
          noviNiz.push(niz[i]);
        }
      }
    }
    console.log(noviNiz);
    return noviNiz;
  }
  export function sortirajMonitore(vrednost,niz3){
  
    for (let i = 0; i < niz3.length; i++) {
      for (let j = 0; j < niz3.length - i - 1; j++) {
        var a = JSON.stringify(niz3[j].Cena).replace(".", "");
        var b = parseInt(JSON.parse(a));
        var c = JSON.stringify(niz3[j + 1].Cena).replace(".", "");
        var d = parseInt(JSON.parse(c));
        if (vrednost === "Scrast") {
          if (b > d) {
            var temp = niz3[j];
            niz3[j] = niz3[j + 1];
            niz3[j + 1] = temp;
          }
        }
        if (vrednost === "Scopad") {
          if (b < d) {
            var temp = niz3[j];
            niz3[j] = niz3[j + 1];
            niz3[j + 1] = temp;
          }
        }
        if (vrednost === "Snrast") {
          if (niz3[j].Naziv > niz3[j + 1].Naziv) {
            var temp = niz3[j];
            niz3[j] = niz3[j + 1];
            niz3[j + 1] = temp;
          }
        }
        if(vrednost === "Snopad") {
          if (niz3[j].Naziv < niz3[j + 1].Naziv) {
            var temp = niz3[j];
            niz3[j] = niz3[j + 1];
            niz3[j + 1] = temp;
          }
        }
      }
    }
    console.log(niz3)
    return niz3;
  }
  
  export const filteriMonitora = (filteri, t) => dispatch => {
    var cenaFilter = "";
    var imaSort = "";
    var proizvodjacMonitoraFilter = false;
    var dijagonala = false;
    var tipPanela = false;
    fetch(`http://localhost:4000/korisnici/${t}`)
      .then(response => response.json())
      .then(niz => {
        for (let i = 0; i < niz.data.length; i++) {
          console.log(niz.data[i]);
        }
        //Nalazenje da li ima u nizu filtera filter za proizvodjacMonitora
        var niz2 = [];
        var proizvodjacFilteri = [];
        for (let filterIndex = 0; filterIndex < filteri.length; filterIndex++) {
          if (filteri[filterIndex] === "ASUS") {
            proizvodjacMonitoraFilter = true;
            proizvodjacFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "DELL") {
            console.log("DELL nadjen")
            proizvodjacMonitoraFilter = true;
            proizvodjacFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "PHILIPS") {
            proizvodjacMonitoraFilter = true;
            proizvodjacFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "ESAMSUNG") {
            console.log(filteri[filterIndex])
            proizvodjacMonitoraFilter = true;
            proizvodjacFilteri.push("SAMSUNG");
          }
        }
        if (proizvodjacMonitoraFilter)
          niz2 = filtrirajProizvodjaca(proizvodjacFilteri, niz.data);
        if (!proizvodjacMonitoraFilter) niz2 = niz.data;
        console.log(niz2)
        //Nalazenje da li ima u nizu filtera filter za dijagonalu?
        var nizDijagonala=[]
        var dijagonalaFilteri=[]
        for (let filterIndex = 0; filterIndex < filteri.length; filterIndex++) {
          if (filteri[filterIndex] === "21\"") {
            dijagonala = true;
            dijagonalaFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "23\"") {
            dijagonala = true;
            dijagonalaFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "24\"") {
            dijagonala = true;
            dijagonalaFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "27\"") {
            dijagonala = true;
            dijagonalaFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "42\"") {
            dijagonala = true;
            dijagonalaFilteri.push(filteri[filterIndex]);
          }
        }
        console.log("Nadjena dijagonala?",dijagonala)
        if (dijagonala)
        nizDijagonala = filtrirajPoDijagonali(dijagonalaFilteri, niz2);
        if (!dijagonala) nizDijagonala = niz2;
  
        //Nalazenje da li ima u nizu filtera filter za tip panela
        var nizPanela=[]
        var PaneliFilteri=[]
        for (let filterIndex = 0; filterIndex < filteri.length; filterIndex++) {
          if (filteri[filterIndex] === "IPS") {
            tipPanela = true;
            PaneliFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "TN") {
            tipPanela = true;
            PaneliFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "VA") {
            tipPanela = true;
            PaneliFilteri.push(filteri[filterIndex]);
          }
        }
        if (tipPanela)
        nizPanela = filtrirajPoPanelu(PaneliFilteri, nizDijagonala);
        if (!tipPanela)   nizPanela = nizDijagonala;
        //Nalazenje da li ima u nizu filtera filter za rezoluciju
        var nizRezolucija=[]
        var RezolucijaFilteri=[]
        var tipRezolucija=false;
        for (let filterIndex = 0; filterIndex < filteri.length; filterIndex++) {
          if (filteri[filterIndex] === "1920 x 1080 Full HD") {
            tipRezolucija = true;
            RezolucijaFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "3840 x 2160 4K UHD") {
            tipRezolucija = true;
            RezolucijaFilteri.push(filteri[filterIndex]);
          }
        }
        if (tipRezolucija)
        nizRezolucija = filtrirajPoRezoluciji(RezolucijaFilteri, nizPanela);
        if (!tipRezolucija)  nizRezolucija = nizPanela;
        //Nalazenje da li ima u nizu filtera filter za touch screen
        var nizTS=[]
        var TSFilteri=[]
        var tipTS=false;
        for (let filterIndex = 0; filterIndex < filteri.length; filterIndex++) {
          if (filteri[filterIndex] === "Da") {
            tipTS = true;
            TSFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "Ne") {
            tipTS = true;
            TSFilteri.push(filteri[filterIndex]);
          }
        }
        if (tipTS)
        nizTS = filtrirajPoTS(TSFilteri, nizRezolucija);
        if (!tipTS)  nizTS = nizRezolucija;
  
        //Nalazenje da li ima u nizu filtera filter za odziv
        var nizOdziv=[]
        var odzivFilteri=[]
        var tipOdziv=false;
        for (let filterIndex = 0; filterIndex < filteri.length; filterIndex++) {
          if (filteri[filterIndex] === "1ms") {
            tipOdziv = true;
            odzivFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "2ms") {
            tipOdziv = true;
            odzivFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "3ms") {
            tipOdziv = true;
            odzivFilteri.push(filteri[filterIndex]);
          }
        }
        if (tipOdziv)
        nizOdziv = filtrirajPoOdzivu(odzivFilteri, nizTS);
        if (!tipOdziv)  nizOdziv = nizTS;
       
        //Nalazenje da li ima u nizu filtera filter za opseg cene
  
        var niz3 = [];
        for (let filterIndex = 0; filterIndex < filteri.length; filterIndex++) {
          if (filteri[filterIndex][0] === "d") cenaFilter = filteri[filterIndex];
        }
        console.log("Pronadjen filter za cenu?", cenaFilter);
        //Ako ima radi se filtriranje za opseg cene
        if (cenaFilter !== "") {
          console.log("USAO U FILTRIRANJE");
          niz3 = filtrirajPoCeni(cenaFilter,nizOdziv)
        } 
        else {
          niz3 = nizOdziv;
          console.log(niz3);
        }
             //Sortiranje?
        for (let filterIndex = 0; filterIndex < filteri.length; filterIndex++) {
          if (filteri[filterIndex][0] === "S") imaSort = filteri[filterIndex];
        }
        console.log("Pronadjeno sortiranje?", imaSort);
        if (imaSort !== "") {
          console.log("USAO U SORTIRANJE");
          niz3 = sortirajMonitore(imaSort,niz3)
        }
        console.log(niz3);
        dispatch({
          type: FILTERI,
          payload: niz3
        });
      });
  };