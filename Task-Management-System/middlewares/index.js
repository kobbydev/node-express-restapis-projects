// import data from "../data.js";
import { tasks } from '../data/tasks.js';
import { users } from '../data/users.js';

export const checkIfUserExists = (req, res, next) => {
	const user = users.find((user) => user.id == req.params.id);
	if (!user) {
		res.status(404).send({
			message: 'User not found',
			data: null,
		});
	}
	req.user = user;
	next();
};

export const checkIfTaskExists = (req, res, next) => {
	const task = tasks.find((task) => task.tasks.id == req.params.id);
	if (!task) {
		res.status(400).send({
			message: ' Task not found',
			data: null,
		});
	}
	req.task = task;
	next();
};
