import express from 'express';
import { registerUser } from '../controllers/authController.js';
import { registerUserSchema } from '../validations/authValidation.js';
import { loginUser } from '../controllers/authController.js';
import { loginUserSchema } from '../validations/authValidation.js';
import { celebrate, Segments } from 'celebrate';

const router = express.Router();

router.post(
  '/register',
  celebrate({ [Segments.BODY]: registerUserSchema }),
  registerUser
);
router.post(
  '/login',
  celebrate({ [Segments.BODY]: loginUserSchema }),
  loginUser
);

export default router;