let arr = [
  {
    question: "What is the intended use of an array?",
    options: [
      "To write less code",
      "To store more data",
      "Both a & b",
      "None of the above",
    ],
    correctAnswer: "Both a & b",
  },
];

let questionTemplate = `
<div class="question">
  <h3>${arr[0].question}</h3>
  <label><input type="radio" name="q1" value="${arr[0].options[0]}" /> ${arr[0].options[0]}</label>
  <label><input type="radio" name="q1" value="${arr[0].options[1]}" /> ${arr[0].options[1]}</label>
  <label><input type="radio" name="q1" value="${arr[0].options[2]}" /> ${arr[0].options[2]}</label>
  <label><input type="radio" name="q1" value="${arr[0].options[3]}" /> ${arr[0].options[3]}</label>
</div>
`;

$(document).ready(function () {
  $("form").append(questionTemplate);
});
