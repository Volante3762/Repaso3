const express = require('express')
const app = express()  

const cors = require('cors')
app.use(express.json())
app.use(cors())


app.use(express.json())

const jsonRoute = require('./routes/jsonRoute')
const authRoute = require("./routes/authRoute")

app.use('/json', jsonRoute)
app.use("/login", authRoute)

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})

