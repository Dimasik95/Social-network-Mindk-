const db = require('../db');

module.exports = {
    getAllUsers: async (limit, offset) => 
            db.select()
            .from('userdata')
                .limit(limit)
                .offset(offset)
            .orderBy('iduser'),

    getUserById: async (iduser) => 
        db.select()
            .from('userdata')
            .where({ iduser })
            .orderBy('iduser'),

    getUserAvatar: async (iduser) =>
        db.select('avatarphoto')
            .from('userdata')
            .where({ iduser }),

    addUserAvatar: async (iduser, avatar) => 
        db.update({avatarphoto: avatar })
            .from('userdata')
            .where({ iduser }),
    
    addUser: async (userProfile) => 
        db.insert(userProfile)
            .into('userdata'),
    
    editUser: async (iduser, userProfile) =>
        db.select().from('userdata')
        .where({ iduser })
        .update(userProfile),

    deleteUser: async (iduser) =>
        db.select()
        .from('userdata')
        .where({ iduser })
        .del()
    };