import { Router } from 'express';
import { users } from '../data/users.js';
import {
	createUser,
	deleteUser,
	getSingleUser,
	getUsers,
	updateUser,
} from '../controllers/userController.js';
import { checkIfUserExists } from '../middlewares/index.js';

const router = Router();

// CREATE A USER
router.post('/users', createUser);

// GET ALL USERS
router.get('/users', getUsers);

// GET SINGLE USER
router.get('/user/:userId', checkIfUserExists, getSingleUser);

// UPDATA A USER
router.put('/user/:userId', checkIfUserExists, updateUser);

// DELETE A USER
router.delete('/user/:userId', checkIfUserExists, deleteUser);

export default router;
