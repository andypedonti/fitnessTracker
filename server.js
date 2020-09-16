const express = require("express");
const mongoose = require("mongoose");
const htmlRoutes = require("./routes/htmlRoutes.js")
const path = require("path");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false
});
app.use(require("./routes/apiRoutes.js"));
htmlRoutes(app, path);

app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`);
});

