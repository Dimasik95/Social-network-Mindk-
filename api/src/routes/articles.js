const router = require('express').Router();
const db = require('../services/db');

router.get('/', async (req, res) => {
	const articles = await db.select().from('news').orderBy('idnews');
	res.json(articles);
});

router.get('/:id', async (req, res) => {
	const article = await db
		.select()
		.from('news')
		.where({ id: req.params.idnews });
	res.json(article);
});

router.post('/', async (req, res) => {
	await db.insert(req.body).into('news');
	res.send('Created news!');
});

router.put('/:id', async (req, res) => {
	await db
		.select()
		.from('news')
		.where({ id: req.params.idnews })
		.update(req.body);
	res.send('News updated!');
});

router.delete('/:id', async (req, res) => {
	await db.select().from('news').where({ id: req.params.idnews }).del();
	res.send('News deleted!');
});

module.exports = router;