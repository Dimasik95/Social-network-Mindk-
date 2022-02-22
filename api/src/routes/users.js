const router = require('express').Router();
const path = require('path');
const userService = require('../services/store/users.service');
const fileMiddleware = require('../middleware/file');
const asyncErrorHandler = require('../middleware/asyncErrorHandler');

router.get('/:iduser/avatar',
	 	   asyncErrorHandler(async (req, res) => {
		const iduser = req.params.iduser;
		const avatar = await userService.getUserAvatar(iduser);
		const avatarphoto = avatar.map((x) => x.avatar);
		
		res.status(200).sendFile(`${avatarphoto}`, {
			root: path.dirname('../'),
		});
	})
);

router.post('/:iduser/avatar', 
			fileMiddleware.single('avatar'),
			asyncErrorHandler(async (req, res) => {
		const iduser = req.params.iduser;
		const avatar = req.file.path;
		
		const addAvatar = await userService.addUserAvatar(iduser, avatar);
		if(addAvatar) {
			res.status(200).send('Avatar loaded!');
		} else {
		res.status(404).send('Avatar is not loaded');
		}
	})
);

router.get('/', 
		   asyncErrorHandler(async (req, res) => {
	const limit = req.query.limit || 10;
	const page = req.query.page || 1;
	const offset = (page - 1) * limit;

	const users = await userService.getAllUsers(limit, offset);
		if (users && Object.keys(users).length) {
			res.status(200).send(users);
		} else {
			res.status(404).send('Not found users');
		}
	})
);

router.get('/:iduser', 
		   asyncErrorHandler(async (req, res) => {
	const iduser = req.params.iduser;

	const user = await userService.getUserById(iduser);
		if (user && Object.keys(user).length) {
			res.status(200).send(user);
		} else {
			res.status(404).send('Not found user');
		} 
	})
);

router.post('/',
			asyncErrorHandler(async (req, res) => {
	const userProfile = req.body;
	
	const addUser = await userService.addUser(userProfile);
		if (addUser && Object.keys(addUser).length) {
			res.status(201).send('New users!');
		} else {
			res.status(404).send('Not found');
		} 
	})
);

router.put('/:iduser',
		   asyncErrorHandler(async (req, res) => {
	const iduser = req.params.iduser;
	const userProfile = req.body;

	const editUser = await userService.editUser(iduser, userProfile);
		if (editUser) {
			res.status(200).send('User was update!');
		} else {
			res.status(404).send('Not found');
		}
	})
);

router.delete('/:iduser',
			   asyncErrorHandler(async (req, res) => {
	const iduser = req.params.iduser;

	const deleteUser = await userService.deleteUser(iduser);
		if (deleteUser) {
			res.status(200).send('User was deleted!');
		} else {
			res.status(404).send('Not found');
		}
	})
);

module.exports = router;