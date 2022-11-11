import express from 'express';
import health from '../controllers/health.js';

const router = express.Router();

router.get('/', health.healthCheck);

export default router;
