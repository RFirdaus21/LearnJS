const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.get('/', (req, res) => {
    res.status(200)
    // res.sendFile('./src/index.html',{root: __dirname})
    res.render('index',{nama: "King" , title:"Home Page"})
})


app.get('/about', (req, res) => {
    res.status(200)
    res.render('about')
    // res.sendFile('./src/about.html',{root: __dirname})
})


app.get('/contact', (req, res) => {
    res.status(200)
    // res.sendFile('./src/contact.html',{root: __dirname})
    res.render('contact',)
})

app.get('/product/:id', (req,res) => {
    res.send('Product ID: '+req.params.id)
})

app.get('/product/:id/category/:idCat', (req,res) => {
    res.send(`Product ID: ${req.params.id} and Category ID: ${req.params.idCat}`)
});


app.get('/product', (req,res) => {
    res.send(`Label Product: ${req.query.label}`)
})


app.use('/', (req, res) => {
    res.status(404)
    res.send('<h1>Halaman tidak ditemukan!</h1>')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




