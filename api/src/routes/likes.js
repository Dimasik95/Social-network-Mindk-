const router = require('express').Router();
const likeService = require('../services/store/likes.service');
const asyncErrorHandler = require('../middleware/asyncErrorHandler');

router.get('/',
		   asyncErrorHandler(async (req, res) => {
	const limit = req.query.limit || 10;
	const page = req.query.page || 1;
	const offset = (page - 1) * limit;

	const likes = await likeService.getAllLikes(limit, offset);
		if (likes && Object.keys(likes).length) {
			res.status(200).send(likes);
		} else {
			res.status(404).send('Not found likes');
		}
	})
);

router.get('/:idliked',
		   asyncErrorHandler(async (req, res) => {
	const idliked = req.params.idliked;

	const like = await likeService.getLikeById(idliked);
		if (like && Object.keys(like).length) {
			res.status(200).send(like);
		} else {
			res.status(404).send('Not found like');
		} 
	})
);

router.post('/', 
			asyncErrorHandler(async (req, res) => {
	const like = req.body;
	
	const addLike = await likeService.addLike(like);
		if (addLike && Object.keys(addLike).length) {
			res.status(201).send('New like!');
		} else {
			res.status(404).send('Not found');
		} 
	})
);

router.delete('/:idliked',
			  asyncErrorHandler(async (req, res) => {
	const idliked = req.params.idliked;
	
	const deleteLike = await likeService.deleteLike(idliked);
		if (deleteLike) {
			res.status(200).send('Like was deleted!');
		} else {
			res.status(404).send('Not found');
		}
	})
);

module.exports = router;