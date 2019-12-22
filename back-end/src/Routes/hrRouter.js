import { Router } from 'express';
import { getAll, create, login } from '../Controllers/hrController';
const routes = Router();

routes
    .route('/')
    .get(getAll)
    .post(create);

routes
    .route('/:id')
    .get()
    .put()
    .delete();

routes.route('/login').post(login);

export default routes;
