const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const router = require('./router')

const log = console.log
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(router)

app.listen(9011, () => log('server is running at: localhost:9011'))