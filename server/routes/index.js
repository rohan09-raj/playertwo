import Express from 'express';

import healthRoutes from './health.js';
import userRoutes from './user.js';

const app = Express();

app.use('/', healthRoutes);
app.use('/user', userRoutes);

export default app;
