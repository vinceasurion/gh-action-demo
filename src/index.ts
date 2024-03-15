import express, { Request, Response } from 'express';
import cors from 'cors';
import swaggerUI from 'swagger-ui-express';
import morgan from 'morgan';
import swaggerSpec from '../swagger.json';
import bookRoute from './routes/book.route';
import bookRouteV2 from './routes/book.route.v2';

const app = express();

const { PORT = 8081 } = process.env;

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
app.use('/api/books', bookRoute);
app.use('/api/v2/books', bookRouteV2);
app.get('/', (req: Request, res: Response) => res.send('REST API is running 🚀'));

app.listen(PORT, () => console.log(`App is listening on http://localhost:${PORT}`));
