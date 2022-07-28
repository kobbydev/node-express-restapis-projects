import { Router } from 'express';
import userRoute from './userRoutes.js';
import tasksRoute from './tasksRoute.js';

const router = Router();

router.use('/api/taskmanager', userRoute);
router.use('/api/taskmanager', tasksRoute);

export default router;
