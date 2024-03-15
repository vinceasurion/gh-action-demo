import express, { Request, Response } from 'express';
import books from '../../data.json';

const route = express.Router();

route.get('/', (req: Request, res: Response) => {
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
