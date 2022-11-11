import express from 'express';
import users from '../controllers/users.js';

const router = express.Router();

router.post('/', users.createUser);

export default router;
