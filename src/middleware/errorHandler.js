import createHttpError from 'http-errors';

export const errorHandler = (err, req, res, next) => {
    const status = createHttpError.isHttpError(err) ? err.status : 500;
    const message = createHttpError.isHttpError(err) ? err.message : 'Internal Server Error';
    res.status(status).json({ message });
};
