const router = require('express').Router();
const db = require('../services/db');

router.get('/', async (req, res) => {
	const users = await db.select().from('userdata').orderBy('iduser');
	res.json(users);
});

router.get('/:iduser', async (req, res) => {
	const user = await db.select().from('userdata').where({ iduser: req.params.iduser });
	res.json(user);
});

router.post('/', async (req, res) => {
	await db.insert(req.body).into('userdata');
	res.send('Create user!');
});

router.put('/:iduser', async (req, res) => {
	await db
		.select()
		.from('userdata')
		.where({ iduser: req.params.iduser })
		.update(req.body);
	res.send('Updated user!');
});

router.delete('/:iduser', async (req, res) => {
	await db.select().from('userdata').where({ iduser: req.params.iduser }).del();
	res.send('Deleted user!');
});

module.exports = router;