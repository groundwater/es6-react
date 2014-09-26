import express from 'express'
import http    from 'http'
import path    from 'path'
import {name}  from './lib/demo'

var app = express()

app.use('/bower_components',express.static(path.join(__dirname, 'bower_components')))
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'app')))

var PORT = process.env.PORT || 8080
var HOST = process.env.HOST || 'localhost'

app.listen(PORT, HOST, function(){
  console.log('Server listening on http://%s:%s/', HOST, PORT)
})
