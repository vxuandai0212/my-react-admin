const express = require("express")
const cors = require('cors')
const morgan = require('morgan')
const app = express()
const bodyParser = require("body-parser")
const port = process.env.PORT || 3300

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

let routes = require("./route")
routes(app)

app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + " not found" })
})

app.listen(port)

console.log("RESTful API server started on: " + port)
