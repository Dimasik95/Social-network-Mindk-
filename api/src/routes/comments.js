const router = require('express').Router();
const db = require('../services/db');

router.get('/', async (req, res) => {
	const comments = await db.select().from('commentary').orderBy('idcomment');
	res.json(comments);
});

router.get('/:id', async (req, res) => {
	const comment = await db
		.select()
		.from('commentary')
		.where({ id: req.params.idcomment });
	res.json(comment);
});

router.post('/', async (req, res) => {
	await db.insert(req.body).into('commentary');
	res.send('Created commentary!');
});

router.put('/:id', async (req, res) => {
	await db
		.select()
		.from('commentary')
		.where({ id: req.params.idcomment })
		.update(req.body);
	res.send('Commentary updated!');
});

router.delete('/:id', async (req, res) => {
	await db.select().from('commentary').where({ id: req.params.idcomment }).del();
	res.send('Commentary deleted!');
});

module.exports = router;