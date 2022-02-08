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
        db.select()
        .from('commentary')
        .where({ whatcommented })
            .limit(limit)
            .offset(offset),
    
    getArticleLikes: async (idliked) =>
        db.select()
        .from('liked')
        .where({ idliked }),
    
    addArticle: async (textnews) => 
        db.insert(textnews)
            .into('news'),
    
    editArticle: async (idnews, textnews) =>
        db.select().from('news')
        .where({ idnews })
        .update(textnews),

    deleteArticle: async (idnews) =>
        db.select()
        .from('news')
        .where({ idnews })
        .del()
    };