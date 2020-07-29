const express = require('express')
const app = express()

const path = require('path')
const port = process.env.PORT || 3000


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) =>  {
    res.render('home')
})

app.get('/home', (req, res) =>  {
    res.render('home')
})

app.use(express.static('public'))

app.listen(port, () => {
    console.log(`Server online: http://localhost:${port}`)})