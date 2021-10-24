const express = require('express')
const routes = express.Router()
const carros = require("./carros")


routes.get('/', function (req, res) {
   return res.redirect("carros")
})

routes.get('/carros', function (req, res) {
    return res.render("carros/index")
 })
 routes.get('/carros/create', function(req, res) {
    return res.render("carros/create")
 })

 routes.get('/carros/:id', carros.show)

 routes.get('/carros/:id/edit', carros.edit)

 routes.post('/carros', carros.post )
 
 routes.get('/vendedores', function (req, res) {
    return res.send('MANUTENÇÃO')
 })

module.exports = routes