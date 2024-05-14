import express, { NextFunction, Request, Response } from 'express';
import books from '../../data.json';
import logger from '../utils/logger';

const route = express.Router();

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
    msg: "Successfully published event to common event stream {\n  commonEvent: {\n    type: 'HomeVisitAttributesUpserted',\n    subType: 'integration-test-session',\n    partner: 'monitor',\n    tags: [ 'atlas', 'IntegrationTestAttributeType' ],\n    identities: {\n      IntegrationTestAttributeType_0: '273f70b0-8adf-47e6-accPHONE_NUMBERfc',\n      aeSessionId: '3e234bb3-1cf4-489e-81c8-c0b9c7fbed98'\n    },\n    dateTime: '2024-04-02T20:57:02.528Z',\n    metadata: { redactableProperties: [Array] }\n  }\n}",
    time: '2024-04-02T20:57:02.588Z',
    src: {},
    v: 0,
  });
  // logger.info({
  //   name: '[REDACTED]',
  //   serviceName: 'hv-session',
  //   context: {
  //     callbackWaitsForEmptyEventLoop: true,
  //     functionVersion: '$LATEST',
  //     functionName: 'pss-ae-api-hv-session-qa-upsertAttributes',
  //     memoryLimitInMB: '1536',
  //     logGroupName: '/aws/lambda/pss-ae-api-hv-session-qa-upsertAttributes',
  //     logStreamName: '2024/04/02/[$LATEST]161d2c37b1364c6d880a8fe04cbea115',
  //     invokedFunctionArn:
  //       'arn:aws:lambda:us-east-1:PHONE_NUMBER:function:pss-ae-api-hv-session-qa-upsertAttributes',
  //     awsRequestId: 'd609bec9-8eea-4bed-af00-98598bc65182',
  //     invocationCount: 4,
  //     teamName: 'Shared',
  //     handlerType: 'APIGateway',
  //     authorizer: {},
  //     correlationId: 'f651400b-4de9-447a-9eb9-e0387f90b881',
  //   },
  //   hostname: 'IP_ADDRESS',
  //   pid: 8,
  //   level: 30,
  //   msg: "Successfully published event to common event stream {\n  commonEvent: {\n    source: 'hv-session',\n    type: 'HomeVisitAttributesUpserted',\n    subType: 'integration-test-session',\n    partner: 'monitor',\n    tags: [ 'atlas', 'IntegrationTestAttributeType' ],\n    identities: undefined,\n    dateTime: '2024-04-02T20:57:02.528Z',\n    metadata: undefined\n  }\n}",
  //   time: '2024-04-02T20:57:02.588Z',
  //   src: {},
  //   v: 0,
  // });
  // console.log(
  //   'Successfully published event to common event stream { ' +
  //     'commonEvent: { ' +
  //     " source: 'hv-session', " +
  //     " type: 'HomeVisitAttributesUpserted', " +
  //     " subType: 'new-device', " +
  //     " partner: 'att', " +
  //     " tags: [ 'atlas', 'AttPa1Eligibility' ], " +
  //     ' identities: { ' +
  //     "   JobVisitStatus_0: '3ca21062-8c12-4306-accf-b5bfbddd4d8b', " +
  //     "   AttPa4Eligibility_0: '3ca21062-8c12-4306-accf-b5bfbddd4d8b', " +
  //     "   CustomerTechPropensity_0: '3ca21062-8c12-4306-accf-b5bfbddd4d8b', " +
  //     "   AttPa1Eligibility_0: '3ca21062-8c12-4306-accf-b5bfbddd4d8b', " +
  //     "   ServiceBenchKit_0: '98db525bed124a9fbbf1b2afa5925168', " +
  //     "   ArrivalTimeWindow_0: '3ca21062-8c12-4306-accf-b5bfbddd4d8b', " +
  //     "   AssignedExpert_0: '3ca21062-8c12-4306-accf-b5bfbddd4d8b', " +
  //     "   ExpertId_0: 'a90c5a93-7224-49ad-b43e-736bf633f73b', " +
  //     "   AttHomeTechProtectionEligibility_0: '3ca21062-8c12-4306-accf-b5bfbddd4d8b', " +
  //     "   ServiceBenchDetails_0: '98db525bed124a9fbbf1b2afa5925168', " +
  //     "   DeliveryTimeWindow_0: '3ca21062-8c12-4306-accf-b5bfbddd4d8b', " +
  //     "   HomeVisitCustomer_0: '8b113a5b-2aca-4431-9ba6-fc53a0347370', " +
  //     "   CustomerType_0: '3ca21062-8c12-4306-accf-b5bfbddd4d8b', " +
  //     "   SourceSystem_0: '3ca21062-8c12-4306-accf-b5bfbddd4d8b', " +
  //     "   Device_0: '3ca21062-8c12-4306-accf-b5bfbddd4d8b', " +
  //     "   CommunicationPreferences_0: '3ca21062-8c12-4306-accf-b5bfbddd4d8b', " +
  //     "   VirtualBadge_0: '3ca21062-8c12-4306-accf-b5bfbddd4d8b', " +
  //     "   PortalLeadId_0: '3ca21062-8c12-4306-accf-b5bfbddd4d8b', " +
  //     "   PortalLeadUrl_0: '3ca21062-8c12-4306-accf-b5bfbddd4d8b', " +
  //     "   PortalServiceOrderId_0: '3ca21062-8c12-4306-accf-b5bfbddd4d8b', " +
  //     "   ProofOfPurchaseRequired_0: '3ca21062-8c12-4306-accf-b5bfbddd4d8b', " +
  //     "   SalesCatalogUrl_0: '3ca21062-8c12-4306-accf-b5bfbddd4d8b', " +
  //     "   SameDay_0: '3ca21062-8c12-4306-accf-b5bfbddd4d8b', " +
  //     "   CustomerPortalSignature_0: '3ca21062-8c12-4306-accf-b5bfbddd4d8b', " +
  //     "   AttHtpEligibility_0: '3ca21062-8c12-4306-accf-b5bfbddd4d8b', " +
  //     "   Location_0: '3ca21062-8c12-4306-accf-b5bfbddd4d8b', " +
  //     "   AttFiberEligibility_0: '3ca21062-8c12-4306-accf-b5bfbddd4d8b', " +
  //     "   aeSessionId: '3ca21062-8c12-4306-accf-b5bfbddd4d8b' " +
  //     '  }, ' +
  //     "  dateTime: '2024-04-03T05:41:30.844Z', " +
  //     '  metadata: { redactableProperties: [Array] } ' +
  //     ' } ' +
  //     ' }'
  // );

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
    };

    books.push(book);

    logger.log({
      level: 'info',
      message: 'HTTP request',
      http_method: 'POST',
      http_status: 201,
      path: '/api/v1/book',
    });

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
    logger.log({
      level: 'info',
      message: 'HTTP request',
      http_method: 'GET',
      http_status: 404,
      path: `/api/v1/book/${id}`,
    });
    return res.status(404).json({ message: 'Book not found' });
  }

  logger.log({
    level: 'info',
    message: 'HTTP request',
    http_method: 'POST',
    http_status: 200,
    path: `/api/v1/book/${id}`,
  });
  res.status(200).json(book);
});

route.put('/:bookId', (req: Request, res: Response) => {
  const id = parseInt(req.params.bookId, 10);
  const { title, author, isbn, rating, category } = req.body;
  const book = books.find(item => item.id === id);
  if (!book) {
    logger.log({
      level: 'info',
      message: 'HTTP request',
      http_method: 'PUT',
      http_status: 404,
      path: `/api/v1/book/${id}`,
    });
    return res.status(404).json({ message: 'Book not found' });
  }

  book.title = title;
  book.author = author;
  book.isbn = isbn;
  book.rating = rating;
  book.category = category;

  logger.log({
    level: 'info',
    message: 'HTTP request',
    http_method: 'PUT',
    http_status: 200,
    path: `/api/v1/book/${id}`,
  });
  res.status(200).json(book);
});

route.delete('/:bookId', (req: Request, res: Response) => {
  const id = parseInt(req.params.bookId, 10);

  const index = books.findIndex(item => item.id === id);
  if (index < 0) {
    logger.log({
      level: 'info',
      message: 'Book not found',
      http_method: 'DELETE',
      http_status: 404,
      path: `/api/v1/book/${id}`,
    });
    return res.status(404).json({ message: 'Book not found' });
  }

  // Removes an element in the array
  books.splice(index, 1);

  logger.log({
    level: 'info',
    message: 'HTTP Request',
    http_method: 'DELETE',
    http_status: 200,
    path: `/api/v1/book/${id}`,
  });
  res.status(200).json(books);
});

export default route;
