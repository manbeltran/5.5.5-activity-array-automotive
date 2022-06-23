//this includes the vehicle class as a module
const VehicleModule = require("./vehicle").Vehicle


class car extends VehicleModule {
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage);
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    checkService(mileage){
        if (this.mileage > 30000) {
            this.scheduleService = true
            return this.scheduleService
        }
    }

    start () {
        if (this.fuel > 0){
            console.log ("Engine Starts!");
            return this.started = true
        } else {
            console.log("No gas")
            return this.started = false;
        }
    }

    loadPassenger(num){
        if(this.passenger < this.maxPassengers){
            if ((num + this.passenger) <= this.maxPassengers){
                this.passenger = num;
                return this.passenger;
            }
        }
    }
    
}

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

v.start()
v.checkService()
v.loadPassenger()
