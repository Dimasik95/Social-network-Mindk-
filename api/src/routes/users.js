const router = require('express').Router();
const userService = require('../services/store/users.service');
const fileMiddleware = require('../middleware/file');
const path = require('path');

router.get('/:iduser/avatar', async (req, res) => {
		const iduser = req.params.iduser;
		const avatar = await userService.getUserAvatar(iduser);
		const avatarphoto = avatar.map((x) => x.avatar);
		
		res.status(200).sendFile(`${avatarphoto}`, {
			root: path.dirname('../'),
		});
});

router.post('/:iduser/avatar', fileMiddleware.single('avatar'), async (req, res) => {
		const iduser = req.params.iduser;
		const avatarphoto = req.file.path;
		const addAvatar = await userService.addUserAvatar(iduser, avatarphoto);
		if(addAvatar) {
			res.status(200).send('Avatar loaded!');
		} else {
		res.status(404).send('Avatar is not loaded');
	}
});

router.get('/', async (req, res) => {
	const limit = req.query.limit || 10;
	const page = req.query.page || 1;
	const offset = (page - 1) * limit;

	try {
		const users = await userService.getAllUsers(limit, offset);
		if (users && Object.keys(users).length) {
			res.status(200).send(users);
		} else {
			res.status(404).send('Not found users');
		}
	} catch (e) {
		res.status(500).send('Error getting users');
	}
});

router.get('/:iduser', async (req, res) => {
	const iduser = req.params.iduser;
	try {
		const user = await userService.getUserById(iduser);
		if (user && Object.keys(user).length) {
			res.status(200).send(user);
		} else {
			res.status(404).send('Not found user');
		} 
	} catch (e) {
		res.status(500).send('Error getting user')
	}
});

router.post('/', async (req, res) => {
	const userProfile = req.body;
	try {
		const addUser = await userService.addUser(userProfile);
		if (addUser && Object.keys(addUser).length) {
			res.status(201).send('New users!');
		} else {
			res.status(404).send('Not found');
		} 
	} catch (e) {
		res.status(500).send('Whoops, user not added')
	}
});

router.put('/:iduser', async (req, res) => {
	const iduser = req.params.iduser;
	const userProfile = req.body;
	try {
		const editUser = await userService.editUser(iduser, userProfile);
		if (editUser) {
			res.status(200).send('User was update!');
		} else {
			res.status(404).send('Not found');
		}
	} catch (e) {
		res.status(500).send('User not update');
	}
});

router.delete('/:iduser', async (req, res) => {
	const iduser = req.params.iduser;
	try {
		const deleteUser = await userService.deleteUser(iduser);
		if (deleteUser) {
			res.status(200).send('User was deleted!');
		} else {
			res.status(404).send('Not found');
		}
	} catch (e) {
		res.status(500).send('User was not deleted');
	}
});

module.exports = router;