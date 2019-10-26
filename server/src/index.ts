import express from 'express'

const app = express()
const PORT = 4000

app.get('/', (req, res) => {
  res.send('hi')
})

app.post('/api/login', (req, res) => {
  console.log(req)
  res.send('hello')
})

app.listen(PORT, () => {
  console.log(`Express app is Running on port ${PORT}`)
})
