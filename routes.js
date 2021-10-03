const express = require('express')
const routes = express.Router()

routes.get('/', function (req, res) {
   return res.redirect("carros")
})

routes.get('/carros', function (req, res) {
    return res.render("carros/index")
 })
 routes.get('/carros/create', function(req, res) {
    return res.render("carros/create")
 })
 
 routes.post('/carros', function(req , res) {

   
    return res.send(req.body)
 })
 
routes.get('/vendedores', function (req, res) {
    return res.send('msdasdembers')
 })

module.exports = routes