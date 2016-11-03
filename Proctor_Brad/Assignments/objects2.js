function VehicleConstructor(name,num_wheels,num_passengers,speed){
    this.name = name;
    this.num_wheels = num_wheels;
    this.num_passengers = num_passengers;
    this.speed = speed;
    this.makeNoise = function(){
        console.log('Vroom Vroom');
    }

    var distance_travelled = 0;
    var updateDistanceTravelled = function(){
        distance_travelled += speed;
    }

    this.move = function(){
        updateDistanceTravelled();
        this.makeNoise();
    }
    this.checkMiles = function(){
        console.log(distance_travelled);
    }
}

var Bike = new VehicleConstructor('bike',2,1);
Bike.makeNoise();

var Sedan = new VehicleConstructor('sedan',4,5);
Sedan.makeNoise = function(){
    console.log('Honk Honk');
}
Sedan.makeNoise();

var Bus = new VehicleConstructor('bus',4,1000,50);
Bus.passenger = function(pass){
    Bus.num_passengers += pass;
    console.log(Bus.num_passengers);
}
Bus.passenger(3);
Bus.move();
Bus.checkMiles();
