const router = require('express').Router();
const articleService = require('../services/store/articles.service');
const asyncErrorHandler = require('../middleware/asyncErrorHandler');
const fileMiddleware = require('../middleware/file');
const authMiddleware = require('../middleware/authMiddleware')


router.get('/',
		asyncErrorHandler(async (req, res) => {
	const limit = req.query.limit || 10;
	const page = req.query.page || 1;
	const offset = (page - 1) * limit;

	const article = await articleService.getAllArticles(limit, offset);
		if (article && Object.keys(article).length) {
			res.status(200).send(article);
		} else {
			res.status(404).send('Not found article');
		}
	})
);

router.get('/:idnews',
		   asyncErrorHandler(async (req, res) => {
	const idnews = req.params.idnews;
	
	const article = await articleService.getArticleById(idnews);
		if (article && Object.keys(article).length) {
			res.status(200).send(article);
		} else {
			res.status(404).send('Not found article');
		} 
	})
);

router.get('/:whatcommented/comments',
		   asyncErrorHandler(async (req, res) => {
	const whatcommented = req.params.whatcommented;
	const limit = req.query.limit || 10;
	const page = req.query.page || 1;
	const offset = (page - 1) * limit;
	
	const articleComments = await articleService.getArticleComments(whatcommented, limit, offset);
		if (articleComments && Object.keys(articleComments).length) {
			res.status(200).send(articleComments);
		} else {
			res.status(404).send('Not found comments');
		} 
	})
);

router.get('/:idliked/likes',
		   asyncErrorHandler(async (req, res) => {
	const idliked = req.params.idliked;

	const articleLikes = await articleService.getArticleLikes(idliked);
		if (articleLikes && Object.keys(articleLikes).length) {
			res.status(200).send(articleLikes);
		} else {
			res.status(404).send('Not found likes');
		} 
	})
);

router.post('/',
authMiddleware,
fileMiddleware.single('image'), 
asyncErrorHandler(async (req, res) => {
	const textnews = req.body;
	const picture = req.file.path;
	const userid = req.auth.id;
	
	const addArticle = await articleService.addArticle(textnews, picture, userid);
		if (addArticle && Object.keys(addArticle).length) {
			res.status(201).send('New article!');
		} else {
			res.status(404).send('Not found');
		} 
	})
);

router.post('/:idnews/image',
			authMiddleware,
			fileMiddleware.single('image'),
			asyncErrorHandler(async (req, res) => {
				const idnews = req.params.idnews;
				const image = req.file.path;
				const addImage = await articleService.addArticleImage(idnews, image);
				if (addImage) {
						res.status(200).send('Image download!');
				} else {
						res.status(404).send('Image NOT download!');
				}
			})
);

router.put('/:idnews',
		   authMiddleware,
		   fileMiddleware.single('image'),
		   asyncErrorHandler(async (req, res) => {
	const idnews = req.params.idnews;
	// const picture = req.file.path;
	const textnews = req.body;
	
	const editArticle = await articleService.editArticle(idnews, textnews, 
		// picture
		);
		if (editArticle) {
			res.status(200).send('Article was update!');
		} else {
			res.status(404).send('Not found');
		}
	})
);

router.delete('/:idnews',
			   authMiddleware,
			   asyncErrorHandler(async (req, res) => {
	const idnews = req.params.idnews;
	
	const deleteArticle = await articleService.deleteArticle(idnews);
		if (deleteArticle) {
			res.status(200).send('Article was deleted!');
		} else {
			res.status(404).send('Not found');
		}
	})
);

module.exports = router;