const router = require('express').Router();
const db = require('../services/db');

router.get('/', async (req, res) => {
	const articles = await db.select().from('news').orderBy('idnews');
	res.json(articles);
});

router.get('/:idnews', async (req, res) => {
	const article = await db.select().from('news').where({ idnews: req.params.idnews });
	res.json(article);
});

router.post('/', async (req, res) => {
	await db.insert(req.body).into('news');
	res.send('Created news!');
});

router.put('/:idnews', async (req, res) => {
	await db
		.select()
		.from('news')
		.where({ idnews: req.params.idnews })
		.update(req.body);
	res.send('News updated!');
});

router.delete('/:idnews', async (req, res) => {
	await db.select().from('news').where({ idnews: req.params.idnews }).del();
	res.send('News deleted!');
});

module.exports = router;