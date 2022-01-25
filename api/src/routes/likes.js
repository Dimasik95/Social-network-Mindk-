const router = require('express').Router();
const db = require('../services/db');

router.get('/', async (req, res) => {
	const likes = await db.select().from('liked').orderBy('idliked');
	res.json(likes);
});

router.get('/:idliked', async (req, res) => {
	const like = await db.select().from('liked').where({ idliked: req.params.idliked });
	res.json(like);
});

router.post('/', async (req, res) => {
	await db.insert(req.body).into('liked');
	res.send('New like!');
});

router.delete('/:idliked', async (req, res) => {
	await db.select().from('liked').where({ idliked: req.params.idliked }).del();
	res.send('Like was deleted!');
});

module.exports = router;