import createHttpError from 'http-errors';
import { Session } from '../models/session.js';
import { User } from '../models/user.js';

export const authenticate = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) throw createHttpError(401, 'Missing Authorization header');

    const token = authHeader.split(' ')[1];
    const session = await Session.findOne({ accessToken: token });
    if (!session) throw createHttpError(401, 'Session not found');
    if (session.accessTokenValidUntil < new Date()) throw createHttpError(401, 'Access token expired');

    const user = await User.findById(session.userId);
    if (!user) throw createHttpError(401);

    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};