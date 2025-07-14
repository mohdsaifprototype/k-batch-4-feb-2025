/* Objective to store details of a car */
let car = {
  // Properties
  name: "Ferrari",
  color: "red",
  price: "$1M",
  noOfSeats: 2,
  isRunning: false,
  noOfWheels: 4,
  airBagPresent: true,
  noOfAirbag: 2,
  maxSpeed: 404,
  "my-variable": "value",

  // Methods aka Functions
  engineStart: function () {
    this.isRunning = true;
    console.log("Car has been started!");
  },
  engineStop: function () {
    this.isRunning = false;
    console.log("Car has been stopped");
  },
};

// Dot notation to access properties and method of an object.
console.log("Car name", car.name);
console.log("Car color", car.color);
console.log("Car price", car.price);

console.log("Car running status", car.isRunning);
car.engineStart();
console.log("Car running status", car.isRunning);

// Square Bracket notation
console.log(car["my-variable"]);