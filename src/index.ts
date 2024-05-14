import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import swaggerUI from 'swagger-ui-express';
import swaggerSpec from '../swagger.json';
import logger from './utils/logger';
import bookRoute from './routes/book.route';
import bookRouteV2 from './routes/book.route.v2';
import { injectLog } from './middlewares/logger';

const app = express();

const { PORT = 8083 } = process.env;

const wrapLog = (func: any) => (req: Request, res: Response, next: NextFunction) =>
  func(req, res, next, logger);

app.use(express.json());
app.use(cors());
app.use(wrapLog(injectLog));
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
app.use('/api/v1/books', bookRoute);
app.use('/api/v2/books', wrapLog(bookRouteV2));
app.get('/', (req: Request, res: Response) => res.send('REST API is running 🚀'));

app.listen(PORT, () => console.log(`App is listening on http://localhost:${PORT}`));
