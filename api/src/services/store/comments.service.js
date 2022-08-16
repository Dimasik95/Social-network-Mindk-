const db = require('../db');

module.exports = {
    getAllComments: async (limit, offset) => 
    db('commentary as com')
        .select('com.idcomment',
                'com.commenttext',
                'com.dateandtime',
                'com.whatcommented',
                'com.whocommented',
                'com.commentoncomment',
                'u.firstname as user',
                'u.iduser as userId',
                'u.avatarphoto'
        )
        .join('userdata as u', 'com.whocommented', '=', 'u.iduser')
            .limit(limit)
            .offset(offset)
            .orderBy('dateandtime', 'desc'),

    getCommentById: async (idcomment) => 
    db('commentary as com')
        .select('com.idcomment',
                'com.commenttext',
                'com.dateandtime',
                'com.whatcommented',
                'com.whocommented',
                'com.commentoncomment',
                'u.firstname as user',
        )
        .join('userdata as u', 'com.whocommented', '=', 'u.iduser')
            .where('com.idcomment', idcomment)
            .orderBy('com.idcomment'),
    
    addComment: async (commentData, iduser) => 
        db.insert({
            commenttexte: commentData.commenttext,
            iduser,
            dateandtime: commentData.dateandtime,
            whatcommented: commentData.whatcommented,
            commentoncomment: commentData.commentoncomment,
        })
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