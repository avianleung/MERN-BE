const express = require("express");
const cors = require("cors");
const helmet = require('helmet')
const path = require("path");

/* const db = require("./models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  }); */

const app = express();

/* app.use(express.static(path.join(__dirname, 'client/build'))); */
app.use(cors({
  credentials: true,
  origin: ['http://localhost:3000']
}))
app.use(express.json())
app.use(helmet())
/* app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
}); */

require("./routes/example.route")(app);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});