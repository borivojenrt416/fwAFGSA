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
app.get("/korisnici/pretraga/:naziv",(req,res)=>{
    var rec = req.params.naziv.toLowerCase()
    connection.query(`SELECT * FROM proizvodi WHERE lower(naziv) LIKE ?`,'%' + rec + '%',(err,result)=>{
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

app.get("/korisnici/proizvod/:idpr",(req,res)=>{
    console.log(req.params.idpr)
    connection.query(`SELECT * FROM proizvodi WHERE idpr=?`,[req.params.idpr],(err,result)=>{
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

app.get("/korisnici/pretrazi/:email",(req,res)=>{
    console.log(req.params.email)
    connection.query(`SELECT * FROM table1 WHERE email=?`,[req.params.email],(err,result)=>{
        if(err)
        {   return res.send(err)
        }
        else{
            return res.json({
                data:result.length
            })
        }
    })
    
})

app.get("/korisnici/dodaj/:ime/:prezime/:datumRodjenja/:email/:sifra/:telefon",(req,res)=>{
    console.log(req.params.email,req.params.ime,req.params.sifra)
    connection.query(`INSERT INTO table1 (ime,prezime,datumRodjenja,email,sifra,telefon) VALUES(?,?,?,?,?,?)`,[req.params.ime,req.params.prezime,req.params.datumRodjenja,req.params.email,req.params.sifra,req.params.telefon],(err)=>{
        if(err)
        {   return res.send(err)}
        else{
            return res.send("Uspesno")
        }
    })
    
})
app.get("/korisnik/uplati/:novac/:email",(req,res)=>{
    connection.query(`UPDATE table1 SET novac=? WHERE email=?`,[req.params.novac,req.params.email],(err)=>{
        if(err)
        {   return res.send(err)}
        else{
            return res.send("Uspesno uplacen novac!")
        }
    })
    
})
app.get("/korisnici/uzmiProizvode/:id",(req,res)=>{
    connection.query(`SELECT * FROM kupljeniproizvodi WHERE id=?`,[parseInt(req.params.id)],(err,result)=>{
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
app.get("/korisnici/:tip",(req,res)=>{
    console.log(req.params.tip)
    connection.query(`SELECT * FROM ${req.params.tip}`,(err,result)=>{
        if(err)
        {   
            console.log(err)
            return res.send(err)
        }
        else{
            return res.json({
                data:result
            })
            
        }
    })
// }
})
    
    

app.get("/korisnici/:email/:lozinka",(req,res)=>{
    console.log(req.params.email,req.params.lozinka)
    connection.query(`SELECT * FROM table1 WHERE email=? AND sifra=?`,[req.params.email,req.params.lozinka],(err,korisnik)=>{
        console.log(res)
        if(err)
        {   return res.send(err)
        }
        else{
            return res.json({
                data:korisnik
            })
        }
    })

    
})
app.get("/korisnici/:ime/:prezime/:email/:sifra/:telefon",(req,res)=>{
    connection.query(`UPDATE table1 SET ime = ?,
    prezime=?,
    sifra=?,
    telefon=? WHERE email=?`,[req.params.ime,req.params.prezime,req.params.sifra,req.params.telefon,req.params.email],(korisnik,err)=>{
        if(err)
        {
            return res.send(err)
        }
        else
        {
            return res.json({
                data:korisnik
            })
        }
    })
})

app.get("/korisnici/dodajProizvod/:id/:idpr/:nazivPr/:kolicina/:cena/:ukupnaCena/:datumKupovine/:img",(req,res)=>{
   var s = JSON.stringify(req.params.img)
    var k = s.split('_').join('/')
    var n = k.split('"').join('')
    var q = n.split('\\').join('')
    console.log(k)
    console.log(n)
    console.log(q)
  
    connection.query(`INSERT INTO kupljeniproizvodi (id,idpr,nazivPr,kolicina,cena,ukupnaCena,datumKupovine,img) VALUES(?,?,?,?,?,?,?,?)`,[req.params.id,req.params.idpr,req.params.nazivPr,req.params.kolicina,req.params.cena,req.params.ukupnaCena,req.params.datumKupovine,q],(err)=>{
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