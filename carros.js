const fs = require('fs')
const data = require('./data.json')
// create
exports.post = function(req , res) {

    const keys = Object.keys(req.body)
    for(key of keys) {
     if   (req.body[key] == "")
     return res.send("preencha todos os campos!")
    }

    let {avatar_url, model, year, fuel, optional, id} = req.body

    const idd = Number(data.carros.length + 1)

    data.carros.push ({
        id,
        avatar_url,
        model,
        year,
        fuel,
        optional
    })


    fs.writeFile("data.json", JSON.stringify(data,  null, 2), function(err) {
        if (err) return res.send("write file error!")

        return res.redirect("/carros")
    })
  }