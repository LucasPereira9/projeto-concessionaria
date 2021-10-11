const fs = require('fs')
const data = require('./data.json')
// show 
exports.show = function(req, res) {
    const { id } = req.params

    const foundcar = data.carros.find (function(car){
        return car.id == id
    })
    if (!foundcar) return res.send("Car Not Found!")

    const car = {
        ...foundcar,
        optional: foundcar.optional.split(",")
    }
    
    return res.render("carros/show", { car })
}

// create
exports.post = function(req , res) {

    const keys = Object.keys(req.body)
    for(key of keys) {
     if   (req.body[key] == "")
     return res.send("preencha todos os campos!")
    }

    let {avatar_url, year, optional, model, fuel} = req.body

    const id = Number(data.carros.length + 1)

    data.carros.push({
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