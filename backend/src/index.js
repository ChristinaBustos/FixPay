const express = require('express')
require('dotenv').config()
const router = require('./services/openai')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

const port = process.env.PORT || 5000

app.use('/api', router)



app.listen(port, () => console.log(`Server running at http://localhost:${port}`))