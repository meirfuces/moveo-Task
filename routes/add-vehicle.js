const express = require('express');
const addController = require('../controller/add-controller');


const router = express.Router();


router.get('/add-vehicle', addController.getAddVehicle);
  

router.post('/add-vehicle', addController.postAddVehicle);
  
  exports.routes = router;
