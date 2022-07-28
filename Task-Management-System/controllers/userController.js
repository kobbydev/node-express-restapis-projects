import { users } from '../data/users.js';

export const createUser = (req, res) => {
	const { fullName, userName, password } = req.body;
	const userId = Math.floor(Math.random(1, 100));
	users.push({
		id: userId,
		fullName,
		userName,
		password,
		tasks: [],
	});
	res.status(201).send({
		message: 'User created successfully',
		data: userId,
	});
};

export const getUsers = (req, res) => {
	res.status(200).send({
		message: 'User fetched successfully',
		data: users,
	});
};

export const getSingleUser = (req, res) => {
	res.status(200).send({
		message: 'User fetched successfully',
		data: req.user,
	});
};

export const updateUser = (req, res) => {
	const { user } = req;
	const data = req.body;

	if (data.fullName) {
		user.fullName = data.fullName;
	}
	return res.status(200).send({
		message: 'User updated successfully',
		data: user,
	});
};

export const deleteUser = (req, res) => {
	const newUsers = users.filter((user) => user.id !== req.user.id);
	return res.status(200).send({
		message: 'User deleted successfully',
		data: newUsers,
	});
};
