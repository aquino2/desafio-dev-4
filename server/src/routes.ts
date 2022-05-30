import express from 'express';
import RestauranteController from '@controllers/RestauranteController'

const routes = express.Router();
const restauranteController = new RestauranteController();

routes.post('/restaurante', restauranteController.create);
routes.get('/restaurante', restauranteController.get);
routes.delete('/restaurante/:id', restauranteController.delete);
routes.put('/restaurante/:id', restauranteController.update);


export default routes;