const db = require('../db');

module.exports = {
    getAllArticles: async (limit, offset) => 
            db.select()
            .from('news')
                .limit(limit)
                .offset(offset)
            .orderBy('idnews'),

    getArticleById: async (idnews) => 
        db.select()
            .from('news')
            .where({ idnews })
            .orderBy('idnews'),

    getArticleComments: async (whatcommented, limit, offset) =>
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
            .where({ whatcommented })
                .limit(limit)
                .offset(offset)
                .orderBy('dateandtime', 'desc'),
    
    getArticleLikes: async (idliked) =>
        db.select()
        .from('liked')
        .where({ idliked }),
    
    addArticle: async (article, userid, picture) => 
        db.insert({
                    textnews: article.textnews,
                    userid,
                    dateandtime: article.dateandtime,
                    visibility: article.visibility,
                    image: picture,
        })
            .into('news'),

    addArticleImage: async (idnews, image) =>
            db.update({ image }).from('news').where({ idnews }),
    
    editArticle: async (idnews, article, picture) =>
        db.select().from('news').where({ idnews })
        .update({
            textnews: article.textnews,
            visibility:article.visibility,
            image: picture,
        }),

    deleteArticle: async (idnews) =>
        db.select()
        .from('news')
        .where({ idnews })
        .del()
    };