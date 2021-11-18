module.exports = class Vehicle {
     constructor(modelName, licenseNumber){
        this.modelName = modelName;
        this.licenseNumber = licenseNumber;
        this.fuel = 0;
        this.tirePressure = 0;

     }
      //method
     InflantTire () {
        console.log('model InflantTire');    
        this.tirePressure= 100;
    }
    //method
  addEnergy() {
        this.fuel = 100;
        console.log('model add energy');    
        }


}