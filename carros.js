const fs = require('fs')
const data = require('./data.json')
// create
exports.post = function(req , res) {

    const keys = Object.keys(req.body)
    for(key of keys) {
     if   (req.body[key] == "")
     return res.send("preencha todos os campos!")
    }

    data.carros.push(req.body)

    fs.writeFile("data.json", JSON.stringify(data,  null, 2), function(err) {
        if (err) return res.send("write file error!")

        return res.redirect("/carros")
    })
  }