import { Router } from 'express';
import { loginController } from './../controllers/login.controllers';
import { validBodyMiddleware } from '../middlewares/validBody.Middleware';
import { loginSchema } from '../schemas/login.schema';

const loginRoutes: Router = Router()

loginRoutes.post('', validBodyMiddleware(loginSchema), loginController)

export default loginRoutes