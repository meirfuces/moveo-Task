const Vehicle = require('./vehicle');

module.exports = class ElectricMoto extends Vehicle {
    constructor(modelName, licenseNumber) {
        super(modelName, licenseNumber);
        this.electric =true;
        this.wheels =2;
      }
      

}