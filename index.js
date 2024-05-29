const express = require('express')
const exphbs = require('express-handlebars')

const app = express()
app.use(express.urlencoded({extended: true}))
app.use(express.json())
const hbs = exphbs.create({extname: 'hbs'})
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.use(express.static('public'))

app.get('/cart', (req, res) => {
    res.status(200).render('cart')
})

app.get('/products', (req, res) => {
    res.status(200).render('products')
})

app.get('/', (req, res) => {
    res.status(200).render('home')
})

app.listen(3000)