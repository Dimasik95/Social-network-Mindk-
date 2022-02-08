const db = require('../db');

module.exports = {
    getAllComments: async (limit, offset) => 
            db.select()
            .from('commentary')
                .limit(limit)
                .offset(offset)
            .orderBy('idcomment'),

    getCommentById: async (idcomment) => 
        db.select()
            .from('commentary')
            .where({ idcomment })
            .orderBy('idcomment'),
    
    addComment: async (commenttext) => 
        db.insert(commenttext)
            .into('commentary'),
    
    editComment: async (idcomment, commenttext) =>
        db.select().from('commentary')
        .where({ idcomment })
        .update(commenttext),

    deleteComment: async (idcomment) =>
        db.select()
        .from('commentary')
        .where({ idcomment })
        .del()
    };