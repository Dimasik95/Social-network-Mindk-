const router = require('express').Router();
const likeService = require('../services/store/likes.service');

router.get('/', async (req, res) => {
	const limit = req.query.limit || 10;
	const page = req.query.page || 1;
	const offset = (page - 1) * limit;

	try {
		const likes = await likeService.getAllLikes(limit, offset);
		if (likes && Object.keys(likes).length) {
			res.status(200).send(likes);
		} else {
			res.status(404).send('Not found likes');
		}
	} catch (e) {
		res.status(500).send('Error getting likes');
	}
});

router.get('/:idliked', async (req, res) => {
	const idliked = req.params.idliked;
	try {
		const like = await likeService.getLikeById(idliked);
		if (like && Object.keys(like).length) {
			res.status(200).send(like);
		} else {
			res.status(404).send('Not found like');
		} 
	} catch (e) {
		res.status(500).send('Error getting like')
	}
});

router.post('/', async (req, res) => {
	const like = req.body;
	try {
		const addLike = await likeService.addLike(like);
		if (addLike && Object.keys(addLike).length) {
			res.status(201).send('New like!');
		} else {
			res.status(404).send('Not found');
		} 
	} catch (e) {
		res.status(500).send('Whoops, like not added')
	}
});

router.delete('/:idliked', async (req, res) => {
	const idliked = req.params.idliked;
	try {
		const deleteLike = await likeService.deleteLike(idliked);
		if (deleteLike) {
			res.status(200).send('Like was deleted!');
		} else {
			res.status(404).send('Not found');
		}
	} catch (e) {
		res.status(500).send('Like was not deleted');
	}
});

module.exports = router;