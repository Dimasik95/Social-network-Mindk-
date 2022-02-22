module.exports = (err, req, res, next) => {
	console.log(err);
	res.status(500).send('Sorry but something went wrong...');
	next();
};
