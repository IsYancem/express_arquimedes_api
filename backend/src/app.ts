import express, { Express } from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes"; 
import roleRoutes from "./routes/roleRoutes"; 
import temaRoutes from './routes/temaRoutes'; 

const app: Express = express();
app.use(cors());
app.use(express.json());

app.use('/api', temaRoutes);
app.use('/api', roleRoutes);
app.use('/api', userRoutes);

export default app;