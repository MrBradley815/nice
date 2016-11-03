function VehicleConstructor(name,num_wheels,num_passengers){
    var car = {};

    car.name = name;
    car.num_wheels = num_wheels;
    car.num_passengers = num_passengers;
    car.makeNoise = function(){
        console.log('Vroom Vroom');
    }

    return car;
}

var Bike = VehicleConstructor('bike',2,1);
Bike.makeNoise();

var Sedan = VehicleConstructor('sedan',4,5);
Sedan.makeNoise = function(){
    console.log('Honk Honk');
}
Sedan.makeNoise();

var Bus = VehicleConstructor('bus',4,1000);
Bus.passenger = function(pass){
    Bus.num_passengers += pass;
    console.log(Bus.num_passengers);
}
Bus.passenger(3);
