const express = require('express');
const bodyParser = require('body-parser');
// const cors = require('cors');

// const config = require('./services/config');
const usersRoutes = require('./routes/users');
const articlesRoutes = require('./routes/articles');
const commentsRoutes = require('./routes/comments');
const likesRoutes = require('./routes/likes');

const app = express();

require('dotenv').config();
// const {host} = config;
// const {port} = config;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
// app.use(cors());

app.use("/users", usersRoutes);
app.use("/articles", articlesRoutes);
app.use("/comments", commentsRoutes);
app.use("/likes", likesRoutes);

app.get("/", (req, res) => {
  res.send("Hello world1!");
});

app.listen(process.env.PORT, () => {
	console.log(
		`Example app listening at http://${process.env.HOST}:${process.env.PORT}`
	);

});
