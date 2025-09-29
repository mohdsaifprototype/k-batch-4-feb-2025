// let usrName = "John Doe";

// usrName.includes("John"); // true
// usrName.startsWith("John"); // true
// usrName.endsWith("Doe"); // true

// let usr = {
//   name: "John Doe",
//   age: 25,
//   city: "New York",
// }

// let usr = {};
// usr["name"] = "John Doe";
// usr["age"] = 25;
// usr["city"] = "New York";

// let usr = new Object();
// usr.name = "John Doe";
// usr.age = 25;
// usr.city = "New York";

// console.table(usr);

// function usr (name, age, city) {
//   this.name = name;
//   this.age = age;
//   this.city = city;
// }

// let user1 = new usr("John Doe", 25, "New York");
// let user2 = new usr("Jane Smith", 30, "Los Angeles");

// console.table(user1);
// console.table(user2);


let student = {
  name: "Alice Johnson",
  age: 22,
  city: "Chicago",
  courses: ["Math", "Science", "History"],
  greet: function() {
    console.log(`Hello, my name is ${this.name}.`);
  }
};

console.log(student.name);

student.name = "Bob Smith";

console.log(student.name);