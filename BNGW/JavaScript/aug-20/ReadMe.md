# if else if else — Questions and Answers

Below are the extracted questions and their solutions. Click "Show answer" to reveal each solution.

### Question 1
Write a program that checks if a number is positive, negative, or zero.

<details>
<summary>Show answer</summary>

```javascript
let num = prompt('Enter The Number Here!');

if (num > 0) {
  alert('Number is Positive');
} else if (num < 0) {
  alert('Number is Negative');
} else {
  alert('The Number is Zero');
}
```

</details>

### Question 2
Write a program to check if a student has passed or failed. The passing marks is 40, distinction is 75 and above.

<details>
<summary>Show answer</summary>

```javascript
let marks = prompt('Enter Your Marks');

if (marks >= 75) {
  alert('Distinction!');
} else if (marks >= 40) {
  alert('Passed!');
} else {
  alert('Failed');
}
```

</details>

### Question 3
Write a program that checks if a person is a child (0-12 years), a teenager (13-19 years), an adult (20-59 years), or a senior (60 and above).

<details>
<summary>Show answer</summary>

```javascript
let age = prompt('Enter Your Age');

if (age >= 0 & age <= 12) {
  alert('Child!');
} else if (age >= 13 & age <= 19) {
  alert('Teenager!');
} else if (age >= 20 & age <= 59) {
  alert('Adult!');
} else if (age >= 60) {
  alert('Senior Citizen');
}
```

</details>

### Question 4
Write a program to check if a given year is a leap year or not.

<details>
<summary>Show answer</summary>

```javascript
let year = prompt('Enter Year');

if (year % 4 === 0) {
  alert('Leap year');
} else {
  alert('Not a Leap year');
}
```

</details>

### Question 5
Write a program that checks if a number is divisible by 2, 3, or both.

<details>
<summary>Show answer</summary>

```javascript
let num = prompt('Enter The Number');

if (num % 2 === 0 && num % 3 === 0) {
  alert('Divisile by both 2 & 3');
} else if (num % 2 === 0) {
  alert('Divisible by 2');
} else if (num % 3 === 0) {
  alert('Divisible by 3');
} else {
  alert('Not Divisible 2 or 3');
}
```

</details>

### Question 6
Write a program that checks if a given character is a vowel or a consonant.

<details>
<summary>Show answer</summary>

```javascript
let character = prompt('Enter Alphabetic Character ');

if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u") {
  alert('Vowel');
} else {
  alert('Consonant');
}
```

</details>

### Question 7
Write a program that checks if a number is even or odd, and also checks if it's a multiple of 5.

<details>
<summary>Show answer</summary>

```javascript
let number = prompt('Enter The Number');

if (number % 2 === 0 && number % 5 === 0) {
  alert('Even and Multiple of 5');
} else if (number % 2 === 0) {
  alert('Even but Not Multiple of 5');
} else if (number % 5 === 0) {
  alert('Odd and multiple of 5')
} else {
  alert("Odd but Not Multiple of 5")
}
```

</details>

### Question 8
Write a program that takes a score as input and displays a grade:
A: 90 and above, B: 80-89, C: 70-79, D: 60-69, F: Below 60

<details>
<summary>Show answer</summary>

```javascript
let score = prompt('Enter Your marks');

if (score >= 90) {
  alert('A');
} else if (score >= 80 & score <= 89) {
  alert('B');
} else if (score >= 70 & score <= 79) {
  alert('C');
} else if (score >= 60 & score <= 69) {
  alert('D');
} else if (score < 60) {
  alert('F');
}
```

</details>

### Question 9
Write a program that checks whether the given day of the week is a weekday or weekend.

<details>
<summary>Show answer</summary>

```javascript
let day = prompt('Enter The Day Name');

if (day === "saturday" || day === "sunday") {
  alert("Weekend");
} else if (day === "monday" || day === "tuesday" || day === "wednesday" || day === "thuRsday" || day === "friday") {
  alert('Weekday');
} else {
  alert("Invalid day");
}
```

</details>

### Question 10
Write a program that checks whether a given triangle is equilateral, isosceles, or scalene based on its side lengths.

<details>
<summary>Show answer</summary>

```javascript
let side1 = parseFloat(prompt('Enter the length of side 1'));
let side2 = parseFloat(prompt('Enter the length of side 2'));
let side3 = parseFloat(prompt('Enter the length of side 3'));

if (side1 === side2 && side2 === side3) {
  alert('Euilateral Triangle');
} else if (side1 === side2 || side2 === side3) {
  alert('Isosceles Triangle');
} else {
  alert('scalene Triangle');
}
```

</details>

### Question 11
Write a program to check if a number is a perfect square.

<details>
<summary>Show answer</summary>

```javascript
let num = prompt("Enter Your Number");

let sqrt = Math.sqrt(num);

if (sqrt === Math.floor(sqrt)) {
  alert('Perfect Square');
} else {
  alert('Not a PeRfect Square');
}
```

</details>

### Question 12
Classify a temperature in Celsius as "Cold" (<10), "Moderate" (10–30), "Hot" (>30).

<details>
<summary>Show answer</summary>

```javascript
let temp = prompt('Enter temperature');

if (temp < 10) {
  alert('Cold');
} else if (temp >= 10 & temp <= 30) {
  alert('Moderate');
} else if (temp > 30) {
  alert('Hot');
}
```

</details>

### Question 13
Determine the season based on month number (1-12).

<details>
<summary>Show answer</summary>

```javascript
let month = parseInt(prompt("Enter a month number (1-12):"));

if (month === 12 || month === 1 || month === 2) {
  alert("Winter");
} else if (month >= 3 && month <= 5) {
  alert("Spring");
} else if (month >= 6 && month <= 8) {
  alert("Summer");
} else if (month >= 9 && month <= 11) {
  alert("Fall");
} else {
  alert("Invalid month");
}
```

</details>

### Question 14
Check whether the sum of two numbers is even or odd.

<details>
<summary>Show answer</summary>

```javascript
let num1 = parseInt(prompt("Enter the first number:"));
let num2 = parseInt(prompt("Enter the second number:"));
let sum = num1 + num2;

if (sum % 2 === 0) {
  alert("Sum is even");
} else {
  alert("Sum is odd");
}
```

</details>

### Question 15
Check whether a given number is prime or not.

<details>
<summary>Show answer</summary>

```javascript
let num = parseInt(prompt("Enter a number:"));
let isPrime = true;

if (num < 2) {
  isPrime = false;
} else {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  alert("prime number");
} else {
  alert("not a prime number");
}
```

</details>

### Question 16
Function evaluateGrade(score) that displays grades A/B/C/D/F or "Invalid score".

<details>
<summary>Show answer</summary>

```javascript
function evaluateGrade(score) {
  if (typeof score !== 'number' || score < 0 || score > 100) {
    alert("Invalid score");
  } else if (score >= 90) {
    alert("A");
  } else if (score >= 80) {
    alert("B");
  } else if (score >= 70) {
    alert("C");
  } else if (score >= 60) {
    alert("D");
  } else {
    alert("F");
  }
}
let userScore = prompt("Enter a score between 0 and 100:");
evaluateGrade(Number(userScore));
```

</details>

### Question 17
Function calculateDiscount(amount) that displays discount tiers or "Invalid amount".

<details>
<summary>Show answer</summary>

```javascript
function calculateDiscount(amount) {
  if (typeof amount !== 'number' || amount <= 0) {
    alert("Invalid amount");
  } else if (amount < 50) {
    alert("No discount");
  } else if (amount <= 100) {
    alert("5% discount");
  } else if (amount <= 200) {
    alert("10% discount");
  } else {
    alert("15% discount");
  }
}
let userAmount = prompt("Enter your purchase amount:");
calculateDiscount(Number(userAmount));
```

</details>
