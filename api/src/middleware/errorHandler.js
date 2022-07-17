const UnathorizedException = require('../errors/UnauthorizedException');
const ForbiddenException = require('../errors/ForbiddenExeption');
const UnprocessableEnityException = require('../errors/UnprocessableEnityException')

module.exports = (err, req, res, next) => {
	console.log(err);
	if (err instanceof UnathorizedException) {
			res.status(401).send('Unauthorized');
	} else if (err instanceof ForbiddenException) {
			res.status(403).send('Forbidden');
	} else if (err instanceof UnprocessableEnityException) {
		res.status(422).send({ errors: err.errors});
	}
	res.status(500).send('Sorry but something went wrong...');
	next();
};
