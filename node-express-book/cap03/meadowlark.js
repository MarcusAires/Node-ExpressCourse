const express = require('express')
const expressHandlebars = require('express-handlebars')
const app = express()


app.use(express.static(__dirname + '/public'))

// configura o view engine Handlebars
const hbs = expressHandlebars.create({
  defaultLayout: 'main',
})
app.engine('handlebars', hbs.engine)  // Agora, passamos o engine diretamente
app.set('view engine', 'handlebars')

const port = 3000 // Defina a variável 'port'

// Definindo as rotas
app.get('/', (req, res) => res.render('home'))
app.get('/about', (req, res) => res.render('about'))

// página 404 personalizada
app.use((req, res) => {
  res.status(404)
  res.render('404')
})

// página 500 personalizada
app.use((err, req, res, next) => {
  console.error(err.message)
  res.status(500)
  res.render('500')
})

// Iniciando o servidor na porta 3000
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})
