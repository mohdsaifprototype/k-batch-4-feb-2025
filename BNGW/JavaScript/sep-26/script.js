class Student {
  constructor(
    id,
    name,
    phone,
    email,
    dob,
    address,
    gender,
    courseName,
    courseDuration,
    courseEnrollmentDate
  ) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.dob = dob;
    this.address = address;
    this.gender = gender;
    this.courseName = courseName;
    this.courseDuration = courseDuration;
    this.courseEnrollmentDate = courseEnrollmentDate;
    this.courseRemainingDuration = function () {
      return Math.floor(
        this.courseDuration -
          (new Date() - new Date(this.courseEnrollmentDate)) /
            1000 /
            60 /
            60 /
            24
      );
    };
    this.age = function () {
      return Math.floor(
        (new Date() - new Date(this.dob)) / 1000 / 60 / 60 / 24 / 365.25
      );
    };
  }

  updateGender(updatedName) {
    console.log("Gender updated!...")
    this.gender = updatedName;
  }
}

const student1 = new Student(
  1,
  "Ankush",
  "9912341234",
  "ankush@gmail",
  "08-27-2000",
  "Mumbai",
  "Male",
  "GWDD",
  400,
  "10-12-2024"
);

const student2 = new Student(
  2,
  "Punit kumar",
  "9420420420",
  "punni@gmail.com",
  "01-01-2004",
  "Unknown",
  "Female",
  "All",
  "420",
  "20-04-2020"
);

console.log(student1);

console.log(student1.age());

console.log(student2);
console.log(student2.name);
console.log(student2.email);
console.log(student2.gender);
student2.updateGender("Male");
console.log(student2.gender);

/* 
  Area of a circle if r is given
*/

let r = 7;

let area = Math.round(Math.PI * r * r);

console.log(area);

const header = document.querySelector("header");
const footer = document.querySelector("footer");
const main = document.querySelector("main");

main.style.minHeight = `calc(100vh - ${header.offsetHeight}px - ${footer.offsetHeight}px)`;