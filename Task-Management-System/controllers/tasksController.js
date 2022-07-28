import { tasks } from '../data/tasks.js';
import { users } from '../data/users.js';

export const createTask = (req, res) => {
	const {
		userId,
		tasks: { description },
	} = req.body;
	const taskId = Math.floor(Math.random(1, 100));
	// check if user creating task is in db
	const user = users.find((user) => user.id == userId);
	// if user is not available, respond with 404
	if (!user) {
		res.status(400).send({
			message: 'Cannot create task for anonyous user',
			data: null,
		});
	}
	// if user is available, add task to task db.
	tasks.push({
		userId,
		tasks: {
			id: taskId,
			description,
		},
	});
	req.user = user;
	// add task to users task in users db.
	user.tasks.push(description);
	res.status(201).send({
		message: 'Task created successfully',
		data: taskId,
	});
};

export const getTasks = (req, res) => {
	res.status(200).send({
		message: 'Tasks fetched successfully',
		data: tasks,
	});
};
