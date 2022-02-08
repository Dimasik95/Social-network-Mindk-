const db = require('../db');

module.exports = {
    getAllLikes: async (limit, offset) => 
            db.select()
            .from('liked')
                .limit(limit)
                .offset(offset)
            .orderBy('idliked'),

    getLikeById: async (idliked) => 
        db.select()
            .from('liked')
            .where({ idliked })
            .orderBy('idliked'),
    
    addLike: async (like) => 
        db.insert(like)
            .into('liked'),

    deleteLike: async (idliked) =>
        db.select()
        .from('liked')
        .where({ idliked })
        .del()
    };