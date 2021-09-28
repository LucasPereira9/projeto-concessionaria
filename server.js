const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")

server.use(express.static ('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server
})


server.get("/", function(req,res) {

    const about = { 
        avatar_url: "https://upload.wikimedia.org/wikipedia/pt/thumb/4/43/FCBarcelona.svg/1200px-FCBarcelona.svg.png",
        name: "FC BARCELONA",
        role: "Time de futebol",
        description: "A maior equipe de futebol do século",
        links: [
            { name: "instagram", url:"https://www.instagram.com/fcbarcelona/" },
            { name: "facebook", url:"https://www.facebook.com/fcbarcelona/" },
            { name: "twitter", url:"https://twitter.com/fcbarcelona/" }
        ]
    }


    return res.render("about", { about })
})

server.get("/portfolio", function(req,res) {
    
    return res.render("portfolio", { items: videos })
})


server.listen(5000, function() {
    console.log("server is running")

})