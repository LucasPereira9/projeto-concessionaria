const fs = require('fs')

// create
exports.post = function(req , res) {

    const keys = Object.keys(req.body)
    for(key of keys) {
     if   (req.body[key] == "")
     return res.send("preencha todos os campos!")
    }

    fs.writeFile("data.json", JSON.stringify(req.body), function(err) {
        if (err) return res.send("write file error!")

        return res.redirect("/carros")
    })
  }