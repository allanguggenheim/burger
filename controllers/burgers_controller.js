var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(request, response){
    burger.selectAll(function(data){
        var handlebarsObject = {
            burgers: data
        };
        response.render("index", handlebarsObject)
    });
});
