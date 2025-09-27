/* 
Student:
name
id,
phone,
email,
dob,
address,
gender,
courseName,
courseDuration,
courseEnrollmentDate,
courseRemainingDuration
*/

const student = {
  name: "Ankush",
  id: 1,
  phone: 9912341234,
  email: "ankush@gmail",
  dob: "08-27-2000",
  address: "Mumbai",
  gender: "Male",
  "course Name": "GWDD",
  courseDuration: 400,
  courseEnrollmentDate: "10-12-2024",
  courseRemainingDuration: function () {
    return Math.floor(this.courseDuration - ((new Date() - new Date(this.courseEnrollmentDate)) / 1000 / 60 / 60 / 24));
  },
  age: function () {
    return Math.floor((new Date() - new Date(this.dob)) / 1000 / 60 / 60 / 24 / 365.25);
  }
};

// console.log(student.courseRemainingDuration());
// console.log(student.age());

const tableBody = document.querySelector("tbody");

let row = `
<tr>
  <td>${student.name}</td>
  <td>${student.age()}</td>
  <td>${student["course Name"]}</td>
  <td>${student.courseDuration}</td>
  <td>${student.phone}</td>
  <td>${student.email}</td>
  <td>${student.address}</td>
  <td>${student.gender}</td>
  <td>${student.courseEnrollmentDate}</td>
  <td>${student.courseRemainingDuration() + (student.courseRemainingDuration() == 1 ? " day" : " days")}</td>
</tr>
`

tableBody.innerHTML = row;