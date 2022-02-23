const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./services/db')

const usersRoutes = require('./routes/users');
const articlesRoutes = require('./routes/articles');
const commentsRoutes = require('./routes/comments');
const likesRoutes = require('./routes/likes');
const globallMiddleware = require('./middleware/globalMiddleware')
const errorHandler = require('./middleware/errorHandler');

const app = express();

require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use('/avatar', express.static(path.join(__dirname, '../avatar')));

app.use( 
		globallMiddleware({
			logTableName: 'logrec',
			db,
		})
);

app.use("/users", usersRoutes);
app.use("/articles", articlesRoutes);
app.use("/comments", commentsRoutes);
app.use("/likes", likesRoutes);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("Hello world1!");
});

app.listen(process.env.PORT, () => {
	console.log(
		`Example app listening at http://${process.env.HOST}:${process.env.PORT}`
	);

});
