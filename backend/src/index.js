const express = require('express')
require('dotenv').config()
const router = require('./services/openai')

const app = express()

app.use(express.json())

const port = process.env.PORT || 5000

app.use('/api', router)



app.listen(port, () => console.log(`Server running at http://localhost:${port}`))