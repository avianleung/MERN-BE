const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
require("dotenv").config();

const db = {};
db.mongoose = mongoose;
db.url = "mongodb://127.0.0.1:27017/mern-db";
db.user = require("./user.model.js")(mongoose);

module.exports = db;