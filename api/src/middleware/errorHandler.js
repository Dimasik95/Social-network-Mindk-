const UnathorizedException = require('../errors/UnauthorizedException');
const ForbiddenException = require('../errors/ForbiddenExeption');

module.exports = (err, req, res, next) => {
	console.log(err);
	if (err instanceof UnathorizedException) {
			res.status(401).send('Unauthorized');
	} else if (err instanceof ForbiddenException) {
			res.status(403).send('Forbidden');
	}
	res.status(500).send('Sorry but something went wrong...');
	next();
};
