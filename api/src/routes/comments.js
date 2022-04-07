const router = require('express').Router();
const commentService = require('../services/store/comments.service');
const asyncErrorHandler = require('../middleware/asyncErrorHandler');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', 
		   asyncErrorHandler(async (req, res) => {
	const limit = req.query.limit || 10;
	const page = req.query.page || 1;
	const offset = (page - 1) * limit;

	const comment = await commentService.getAllComments(limit, offset);
		if (comment && Object.keys(comment).length) {
			res.status(200).send(comment);
		} else {
			res.status(404).send('Not found');
		}
	})
);

router.get('/:idcomment', 
			asyncErrorHandler(async (req, res) => {
	const idcomment = req.params.idcomment;
	
	const comment = await commentService.getCommentById(idcomment);
		if (comment && Object.keys(comment).length) {
			res.status(200).send(comment);
		} else {
			res.status(404).send('Not found');
		} 
	})
);

router.post('/',
		authMiddleware,
		asyncErrorHandler(async (req, res) => {
			const addComment = await commentService.addComment({
					...req.body,
					userid: req.auth.id
			});
			if (addComment && Object.keys(addComment).length) {
					res.status(201).send('New comment!');
			} else {
					res.status(404).send('Not found');
			}
		})
);

router.put('/:idcomment',
		   authMiddleware,
		   asyncErrorHandler(async (req, res) => {
	const idcomment = req.params.idcomment;
	const commenttext = req.body;
	
	const editComment = await commentService.editComment(idcomment, commenttext);
		if (editComment) {
			res.status(200).send('Comment was update!');
		} else {
			res.status(404).send('Not found');
		}
	})
);

router.delete('/:idcomment',
		authMiddleware,
		asyncErrorHandler(async (req, res) => {
				const idcomment = req.params.idcomment;

				const deleteComment = await commentService.deleteComment(idcomment);
				if (deleteComment) {
						res.status(200).send('Comment was deleted!');
				} else {
						res.status(404).send('Not found');
				}
		})
);

module.exports = router;