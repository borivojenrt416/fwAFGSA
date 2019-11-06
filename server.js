const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const app = express()

app.use(cors())

const SELECTALL = 'SELECT * FROM table1'
const SVIPROIZVODI='SELECT * FROM proizvodi'
const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"korisnici"
})
connection.connect(err=>{
    if(err) return err})


    console.log(connection)
app.get("/",(req,res)=>{
   res.send("RADI")
})

app.get("/korisnici/sviproizvodi",(req,res)=>{
    console.log(req.body)
    connection.query(SVIPROIZVODI,(err,result)=>{
        if(err){
            return res.send(err)
        }
        else{
            return res.json({
                data:result
            })
        }
    })
})

// app.get("/korisnici/nasumicni",(req,res)=>{

//     const NASUMICNO="SELECT * FROM proizvodi WHERE zaproizvode=1"


//     connection.query(NASUMICNO,(err,result)=>{
//         if(err){
//             return res.send(err)
//         }
//         else{
//             return res.json({
//                 data:result
//             })
//         }
//     })
// })

app.get("/korisnici/dodaj",(req,res)=>{
    const {ime,prezime,datumRodjenja,email,sifra,telefon} = req.query;
    console.log(ime,prezime);
    const DODAJKORISNIKA =`INSERT INTO table1 (ime,prezime,datumRodjenja,email,sifra,telefon) VALUES('${ime}','${prezime}','${datumRodjenja}','${email}','${sifra}','${telefon}')`
    connection.query(DODAJKORISNIKA,(err)=>{
        if(err)
        {   return res.send(err)}
        else{
            return res.send("Uspesno dodat korisnik!")
        }
    })
    
})



app.get("/korisnici/azuriraj",(req,res)=>{
    const {ime,prezime,datumRodjenja,email,sifra,telefon} = req.query;
    console.log(ime,prezime);
    const AZURIRAJKORISNIKA=`UPDATE table1 SET ime='${ime}',
    prezime='${prezime}',
    sifra='${sifra}'  WHERE email='${email}'`
    connection.query(AZURIRAJKORISNIKA,(err)=>{
        if(err)
        {   return res.send(err)}
        else{
            return res.send("Uspesno azuriran korisnik!")
        }
    })
    
})


app.get("/korisnik/uplati",(req,res)=>{
    const {novac,email} = req.query;
    const UPLATINOVAC=`UPDATE table1 SET novac='${novac}' WHERE email='${email}'`
    connection.query(UPLATINOVAC,(err)=>{
        if(err)
        {   return res.send(err)}
        else{
            return res.send("Uspesno uplacen novac!")
        }
    })
    
})

app.get("/korisnici/uzmiProizvode",(req,res)=>{
    const {id} = req.query;
    const UZMIPROIZVODE =`SELECT * FROM kupljeniproizvodi WHERE id='${id}'`
    connection.query(UZMIPROIZVODE,(err,result)=>{
        if(err)
        {   return res.send(err)
        }
        else{
            return res.json({
                data:result
            })
        }
    })
    
})

//GET ISPOD JE ZA STRANICU PROIZVODI
app.get("/korisnici/:tip",(req,res)=>{
    connection.query(`SELECT * FROM proizvodi WHERE tip=?`,[req.params.tip],(err,result)=>{
        if(err)
        {   return res.send(err)
        }
        else{
            return res.json({
                data:result
            })
        }
    })

    
})

app.get("/korisnici/dodajProizvod",(req,res)=>{
    const {id,idpr,nazivPr,opisPr,kolicina,cena,ukupnaCena,datumKupovine,img} = req.query;
    const DODAJPROIZVOD =`INSERT INTO kupljeniproizvodi (id,idpr,nazivPr,opisPr,kolicina,cena,ukupnaCena,datumKupovine,img) VALUES('${id}','${idpr}','${nazivPr}','${opisPr}','${kolicina}','${cena}','${ukupnaCena}','${datumKupovine}','${img}')`
    connection.query(DODAJPROIZVOD,(err)=>{
        if(err)
        {   return res.send(err)}
        else{
            return res.send("Uspesno dodat proizvod!")
        }
    })
    
})
app.get("/korisnici",(req,res)=>{
    connection.query(SELECTALL,(err,result)=>{
        if(err){
            return res.send(err)
        }
        else{
            return res.json({
                data:result
            })
        }
    })
})

app.listen(4000,()=>{
    console.log("Port 4000")
})