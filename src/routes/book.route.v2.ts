import express, { Request, Response } from 'express';
import dataSourceBooks from '../../data.json';
import logger from '../utils/logger';

const route = express.Router();

const books = dataSourceBooks.map(item => ({
  ...item,
  totalPages: 300,
}));

route.get('/', (req: Request, res: Response) => {
  logger.info({
    name: '[REDACTED]',
    serviceName: 'hv-session',
    context: {
      callbackWaitsForEmptyEventLoop: true,
      functionVersion: '$LATEST',
      functionName: 'pss-ae-api-hv-session-qa-upsertAttributes',
      memoryLimitInMB: '1536',
      logGroupName: '/aws/lambda/pss-ae-api-hv-session-qa-upsertAttributes',
      logStreamName: '2024/04/02/[$LATEST]161d2c37b1364c6d880a8fe04cbea115',
      invokedFunctionArn:
        'arn:aws:lambda:us-east-1:PHONE_NUMBER:function:pss-ae-api-hv-session-qa-upsertAttributes',
      awsRequestId: 'd609bec9-8eea-4bed-af00-98598bc65182',
      invocationCount: 4,
      teamName: 'Shared',
      handlerType: 'APIGateway',
      authorizer: {},
      correlationId: 'f651400b-4de9-447a-9eb9-e0387f90b881',
    },
    hostname: 'IP_ADDRESS',
    pid: 8,
    level: 30,
    msg: "Successfully published event to common event stream {\n  commonEvent: {\n    source: 'hv-session',\n    type: 'HomeVisitAttributesUpserted',\n    subType: 'integration-test-session',\n    partner: 'monitor',\n    tags: [ 'atlas', 'IntegrationTestAttributeType' ],\n    identities: {\n      IntegrationTestAttributeType_0: '273f70b0-8adf-47e6-accPHONE_NUMBERfc',\n      aeSessionId: '3e234bb3-1cf4-489e-81c8-c0b9c7fbed98'\n      correlationId: '1234567'\n    },\n    dateTime: '2024-04-02T20:57:02.528Z',\n    metadata: undefined\n  }\n}",
    time: '2024-04-02T20:57:02.588Z',
    src: {},
    v: 0,
  });
  res.status(200).json(books);
});

route.post('/', (req: Request, res: Response) => {
  try {
    // Of course you can also add validation like if the title is empty, we could return a 400 means Bad Request.
    const { title, author, isbn, rating, category } = req.body;
    if (title === '' || author === '' || isbn === '' || rating === '' || category === '') {
      return res.status(400).json({ message: 'Invalid request.' });
    }

    const book = {
      id: books.length + 1,
      title,
      author,
      isbn,
      rating,
      category,
      totalPages: 300,
    };

    books.push(book);

    res.status(201).json(book);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
});

route.get('/:bookId', (req: Request, res: Response) => {
  const id = parseInt(req.params.bookId, 10);

  const book = books.find(item => item.id === id);
  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }

  res.status(200).json(book);
});

route.put('/:bookId', (req: Request, res: Response) => {
  const id = parseInt(req.params.bookId, 10);
  const { title, author, isbn, rating, category } = req.body;
  const book = books.find(item => item.id === id);
  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }

  book.title = title;
  book.author = author;
  book.isbn = isbn;
  book.rating = rating;
  book.category = category;

  res.status(200).json(book);
});

route.delete('/:bookId', (req: Request, res: Response) => {
  const id = parseInt(req.params.bookId, 10);

  const index = books.findIndex(item => item.id === id);
  if (index < 0) {
    return res.status(404).json({ message: 'Book not found' });
  }

  // Removes an element in the array
  books.splice(index, 1);

  res.status(200).json(books);
});

export default route;
