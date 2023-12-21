module.exports = app => {
    var router = require("express").Router();
    const controller = require("../controllers/controllers.js");

    router.get("/", controller.helloWorld)
      
    // base endpoint
    app.use("/api/example", router);
}