const addVehicleData = require('./add-controller');
const vehicles = addVehicleData.vehicles;

exports.postFuel = (req, res, next) => {
  console.log('fuel');
  const licenseNumber = req.body.energy;
  console.log(licenseNumber);
  const index = vehicles.findIndex(v => {
    return v.licenseNumber === licenseNumber;


  })
  console.log(index);
  addVehicleData.vehicles[index].addEnergy()

  res.redirect('/')
};



exports.postInflact = (req, res, next) => {

  const licenseNumber = req.body.inflact;
  const index = vehicles.findIndex(v => {
    return v.licenseNumber === licenseNumber;
  })

  addVehicleData.vehicles[index].InflantTire()
  res.redirect('/')
};

exports.getSearch = (req, res, next) => {
  res.render('home', { vehicles: vehicles });

};


exports.PostSearch = (req, res, next) => {

  const licenseNumber = req.body.licenseNumber;
  const vehicle = vehicles.filter(v => {
    return v.licenseNumber === licenseNumber;


  });
  console.log("filter", vehicle);
  res.render('home', {
    vehicles: vehicle


  });

}

exports.getVehicleById = (req, res, next) => {

  const num = req.params.number;
  const vehicle = vehicles.filter(v => {
    return v.licenseNumber === num;

  });
  res.render('home', {
    vehicles: vehicle
  });
}
exports.getAllVehicle = (req, res, next) => {
  res.render('home', {
    vehicles: vehicles
  });

}