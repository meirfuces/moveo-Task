const Vehicle = require('./vehicle');

module.exports = class RegMotocycle extends Vehicle {
    constructor(modelName, licenseNumber) {
        super(modelName, licenseNumber);
        this.electric =false;
        this.wheels =2;
        console.log("model Moto");
      }
      

}