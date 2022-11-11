import Express from 'express';

import healthRoutes from './health.js';
import userRoutes from './users.js';
import messageRoutes from './message.js';

const app = Express();

app.use('/health', healthRoutes);
app.use('/user', userRoutes);
app.use('/otp', messageRoutes);

export default app;
