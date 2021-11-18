const express = require('express');


const garageController = require('../controller/garageController');

const router = express.Router();

router.get('/search', garageController.getSearch);


  router.post('/search',garageController.PostSearch );

  router.get('/license/:number', garageController.getVehicleById);
  router.post('/inflact', garageController.postInflact);
  router.post('/add-energy', garageController.postFuel);
  router.get('/', garageController.getAllVehicle);
  


  
  module.exports = router;