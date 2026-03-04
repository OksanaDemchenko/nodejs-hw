import express from 'express';
import { celebrate, Segments } from 'celebrate';
import { registerUser, loginUser, logoutUser, refreshUserSession } from '../controllers/authController.js';
import { registerUserSchema, loginUserSchema } from '../validations/authValidation.js';

const router = express.Router();

router.post(
  '/auth/register',
  celebrate({ [Segments.BODY]: registerUserSchema }),
  registerUser
);

router.post(
  '/auth/login',
  celebrate({ [Segments.BODY]: loginUserSchema }),
  loginUser
);

router.post('/auth/logout', logoutUser);
router.post('/auth/refresh', refreshUserSession);

export default router;
