import { HttpError } from 'http-errors';

export const errorHandler = (err, req, res, next) => {
  if (err instanceof HttpError) {
    res.status(err.statusCode || 500).json({
      message: err.message || err.name,
    });
  } else {
    res.status(500).json({
      message: err.message || err.name || 'Internal Server Error',
    });
  }
};