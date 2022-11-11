import Express from 'express';
import message from '../controllers/message.js';

const router = Express.Router();

router.post('/', message.sendOTP);

export default router;
