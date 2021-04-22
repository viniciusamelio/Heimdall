import express from 'express';
import userRoutes from './routes/user/';
import authRoutes from './routes/auth/';

const app = express();


app.use(express.json());
app.use(userRoutes);
app.use(authRoutes);
app.listen(3000);