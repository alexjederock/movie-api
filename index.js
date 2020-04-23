const express = require('express')

const app = express()
const movies = require('./movies.js')
const parser = require('body-parser')
app.use(parser.json())

app.get('/movies/:search', (request, response) =>
{
  let search = request.params.search.toLowerCase()
  let filtered = movies.filter((movie) =>
  {
    return movie.title.toLowerCase().includes(search) || movie.directors.filter(director => director.toLowerCase().includes(search)).length
  })
  response.send(filtered)
})
app.get('/movies', (request, response) =>
{
  response.send(movies)
})
app.post('/movies', (request, response) =>
{
  let newMovie = request.body
  movies.push(newMovie)
  response.send(newMovie)
})
app.listen(1221, () =>
{
  console.log('Listening on port 1221...') // eslint-disable-line no-console
})
