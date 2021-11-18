const Vehicle = require('./vehicle');

module.exports = class ElectricCar extends Vehicle {
    constructor(modelName, licenseNumber) {
        super(modelName, licenseNumber);
        this.electric =true;
        this.wheels =4;
      }
      

}