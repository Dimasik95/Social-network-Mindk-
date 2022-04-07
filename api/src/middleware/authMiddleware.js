const jwt = require('jsonwebtoken');
const config = require('../services/config');
const UnauthorizedException = require('../errors/UnauthorizedException');


// eslint-disable-next-line consistent-return
module.exports = async (req, res, next) => {
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(' ')[1];
        let decoded;
        try {
            decoded = await new Promise( (resolve, reject) => {
                // eslint-disable-next-line consistent-return
                jwt.verify(token, config.appKey, (err, result) => {
                    if (err) {
                        return reject(err);
                    }
                    resolve(result);
                });
            });
        } catch (e) {
            console.log(e);
        }
        if (decoded) {
            // eslint-disable-next-line no-param-reassign
            res.auth = decoded;
            return next();
        }
    }
    next(new UnauthorizedException());
};
