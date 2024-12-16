const express = require('express');
const app = express();
const cors = require("cors");
const { blogsRouter } = require("./routes/blogRouter.js");

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`run on ${PORT}`);
});

app.use(cors());
app.use("/", express.static(__dirname + "/public"));

// form data
app.use(express.urlencoded({ extended: true }));

// parse application/json
app.use(express.json());

app.use(blogsRouter);


