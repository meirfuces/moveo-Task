const ElecticCar = require('../models/ElectricCar');
const ElectricMoto = require('../models/ElectricMoto');
const Regcar = require('../models/Regcar');
const RegMotocycle = require('../models/RegMotocycle');
const Truck = require('../models/Truck');

const vehicles = [];

exports.getAddVehicle = (req, res, next) => {
    res.render('add-vehicle', {
       
       
      });


    
    console.log(vehicles);
  }


  exports.postAddVehicle =(req, res, next) => {
    // if(req.body.)
    let vehicle = req.body;
    let modelName =  vehicle.title;
    let electic = vehicle.electic;
    let typeCar = vehicle.typeCar;
    let Newvehicle;
    console.log(typeof vehicle.typeCar);
    if (typeCar === 'MotoCycle'){
    if (electic === 'on'){
    newVehicle = new ElectricMoto(modelName,vehicle.licenceNumber);
    
    }
    else{
        newVehicle = new RegMotocycle(modelName,vehicle.licenceNumber);
    }

    }

    else if (typeCar === 'Car'){
        if (electic === 'on')
        newVehicle = new ElecticCar(modelName,vehicle.licenceNumber);
        else{
            newVehicle = new Regcar(modelName,vehicle.licenceNumber);
        }

    }
    else{
        newVehicle = new Truck(modelName,vehicle.licenceNumber);

    }


   
    vehicles.push(newVehicle);
    res.redirect('/');
  }


  exports.vehicles = vehicles;