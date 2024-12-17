const express = require("express");
const cors = require("cors");
const { usersRouter } = require("./routes/usersRouter.js");
const{getVersion} = require("./config/data.js")

const app = express();

app.use(cors());
// app.use("/", express.static(__dirname + "/public"));

const PORT = 3003;
app.listen(PORT, () => {
  console.log(`run on ${PORT}`);
});

// form data
app.use(express.urlencoded({ extended: true }));

// parse application/json
app.use(express.json());


app.use( usersRouter);
// getVersion();