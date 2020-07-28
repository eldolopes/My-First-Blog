const express = require('express')
const app = express()

const path = require('path')
const port = process.env.PORT || 3000

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) =>  {
    res.render('home')
})

app.listen(port, () => {
    console.log(`Server online: http://localhost:${port}`)})