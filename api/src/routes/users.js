const router = require('express').Router();
const db = require('../services/db');

router.get('/', async (req, res) => {
	const users = await db.select().from('userdata').orderBy('iduser');
	res.json(users);
});

router.get('/:id', async (req, res) => {
	const user = await db.select().from('userdata').where({ id: req.params.iduser });
	res.json(user);
});

router.post('/', async (req, res) => {
	await db.insert(req.body).into('userdata');
	res.send('Create user!');
});

router.put('/:id', async (req, res) => {
	await db
		.select()
		.from('userdata')
		.where({ id: req.params.iduser })
		.update(req.body);
	res.send('Updated user!');
});

router.delete('/:id', async (req, res) => {
	await db.select().from('userdata').where({ id: req.params.iduser }).del();
	res.send('Deleted user!');
});

module.exports = router;