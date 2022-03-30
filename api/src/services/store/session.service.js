const db = require('../db');

module.exports = {
        create: (session) => db('session').inser(session),
        getByToken: (token) =>
                db.select().first().where({ token }).from('session'),
        deleteByToken: (token) => db('session').where({ token }).del(),
        deleteAllTokens: (userid) => db('session').where({ userid }).del(),
};