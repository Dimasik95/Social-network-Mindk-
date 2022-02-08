const router = require('express').Router();
const articleService = require('../services/store/articles.service');


router.get('/', async (req, res) => {
	const limit = req.query.limit || 10;
	const page = req.query.page || 1;
	const offset = (page - 1) * limit;

	try {
		const article = await articleService.getAllArticles(limit, offset);
		if (article && Object.keys(article).length) {
			res.status(200).send(article);
		} else {
			res.status(404).send('Not found article');
		}
	} catch (e) {
		res.status(500).send('Error getting article');
	}
});

router.get('/:idnews', async (req, res) => {
	const idnews = req.params.idnews;
	try {
		const article = await articleService.getArticleById(idnews);
		if (article && Object.keys(article).length) {
			res.status(200).send(article);
		} else {
			res.status(404).send('Not found article');
		} 
	} catch (e) {
		res.status(500).send('Error getting article')
	}
});

router.get('/:whatcommented/comments', async (req, res) => {
	const whatcommented = req.params.whatcommented;
	const limit = req.query.limit || 10;
	const page = req.query.page || 1;
	const offset = (page - 1) * limit;
	try {
		const articleComments = await articleService.getArticleComments(whatcommented, limit, offset);
		if (articleComments && Object.keys(articleComments).length) {
			res.status(200).send(articleComments);
		} else {
			res.status(404).send('Not found comments');
		} 
	} catch (e) {
		res.status(500).send('Error getting comments')
	}
});

router.get('/:idliked/likes', async (req, res) => {
	const idliked = req.params.idliked;
	try {
		const articleLikes = await articleService.getArticleLikes(idliked);
		if (articleLikes && Object.keys(articleLikes).length) {
			res.status(200).send(articleLikes);
		} else {
			res.status(404).send('Not found likes');
		} 
	} catch (e) {
		res.status(500).send('Error getting likes')
	}
});

router.post('/', async (req, res) => {
	const textnews = req.body;
	try {
		const addArticle = await articleService.addArticle(textnews);
		if (addArticle && Object.keys(addArticle).length) {
			res.status(201).send('New article!');
		} else {
			res.status(404).send('Not found');
		} 
	} catch (e) {
		res.status(500).send('Whoops, article not added')
	}
});

router.put('/:idnews', async (req, res) => {
	const idnews = req.params.idnews;
	const textnews = req.body;
	try {
		const editArticle = await articleService.editArticle(idnews, textnews);
		if (editArticle) {
			res.status(200).send('Article was update!');
		} else {
			res.status(404).send('Not found');
		}
	} catch (e) {
		res.status(500).send('Article not update');
	}
});

router.delete('/:idnews', async (req, res) => {
	const idnews = req.params.idnews;
	try {
		const deleteArticle = await articleService.deleteArticle(idnews);
		if (deleteArticle) {
			res.status(200).send('Article was deleted!');
		} else {
			res.status(404).send('Not found');
		}
	} catch (e) {
		res.status(500).send('Article was not deleted');
	}
});

module.exports = router;