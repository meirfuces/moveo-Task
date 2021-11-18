const Vehicle = require('./vehicle');

module.exports = class Truck extends Vehicle {
    constructor(modelName, licenseNumber) {
        super(modelName, licenseNumber);
        this.electric =false;
        this.wheels =16;
      }
      

}