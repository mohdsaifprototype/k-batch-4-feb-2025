// let usrName = "Punni";

// for (let char of usrName) {
//   console.log(char);
// }

// immutable
// usrName[4] = "a";
// console.log(usrName[4]);

// usrName = "Punna";
// console.log(usrName);

// usrName = usrName.replace("i", "a");
// console.log(usrName);

let student = {
  id: 1,
  name: "Ankush",
};

console.table(student);

student.phone = "9199923231";
console.table(student);

delete student.phone;

console.table(student);

// Object.freeze(student);
Object.seal(student);

student.name = "Punit";
student.email = "punit@punni.lal";
console.table(student);
