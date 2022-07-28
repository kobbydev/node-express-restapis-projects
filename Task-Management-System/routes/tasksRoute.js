import { Router } from 'express';
import { createTask, getTasks } from '../controllers/tasksController.js';
import { checkIfTaskExists } from '../middlewares/index.js';

const router = Router();

// CREATE A TASK
router.post('/tasks', createTask);

// FETCH ALL TASKS
router.get('/tasks', getTasks);

export default router;
