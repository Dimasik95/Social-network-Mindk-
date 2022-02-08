const router = require('express').Router();
const commentService = require('../services/store/comments.service');

router.get('/', async (req, res) => {
	const limit = req.query.limit || 10;
	const page = req.query.page || 1;
	const offset = (page - 1) * limit;

	try {
		const comment = await commentService.getAllComments(limit, offset);
		if (comment && Object.keys(comment).length) {
			res.status(200).send(comment);
		} else {
			res.status(404).send('Not found');
		}
	} catch (e) {
		res.status(500).send('Error getting comment');
	}
});

router.get('/:idcomment', async (req, res) => {
	const idcomment = req.params.idcomment;
	try {
		const comment = await commentService.getCommentById(idcomment);
		if (comment && Object.keys(comment).length) {
			res.status(200).send(comment);
		} else {
			res.status(404).send('Not found');
		} 
	} catch (e) {
		res.status(500).send('Error getting comment')
	}
});

router.post('/', async (req, res) => {
	const commenttext = req.body;
	try {
		const addComment = await commentService.addComment(commenttext);
		if (addComment && Object.keys(addComment).length) {
			res.status(201).send('New comment!');
		} else {
			res.status(404).send('Not found');
		} 
	} catch (e) {
		res.status(500).send('Whoops, comment not added')
	}
});

router.put('/:idcomment', async (req, res) => {
	const idcomment = req.params.idcomment;
	const commenttext = req.body;
	try {
		const editComment = await commentService.editComment(idcomment, commenttext);
		if (editComment) {
			res.status(200).send('Comment was update!');
		} else {
			res.status(404).send('Not found');
		}
	} catch (e) {
		res.status(500).send('Comment not update');
	}
});

router.delete('/:idcomment', async (req, res) => {
	const idcomment = req.params.idcomment;
	try {
		const deleteComment = await commentService.deleteComment(idcomment);
		if (deleteComment) {
			res.status(200).send('Comment was deleted!');
		} else {
			res.status(404).send('Not found');
		}
	} catch (e) {
		res.status(500).send('Comment was not deleted');
	}
});

module.exports = router;