import { Router } from 'express';
import { login, create } from '../Controllers/candidateController';
const routes = Router();

routes
    .route('/')
    .get()
    .post(create);

routes
    .route('/:id')
    .get()
    .put()
    .delete();

routes.route('/login').post(login);

export default routes;
