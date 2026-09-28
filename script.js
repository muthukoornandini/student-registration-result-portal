document.getElementById("studentForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const course = document.getElementById("course").value;
  const marks = Array.from(document.querySelectorAll(".subject-mark")).map(input => parseInt(input.value));

  // Validation
  if (!name || !course || marks.some(m => isNaN(m) || m < 0 || m > 100)) {
    alert("Please enter valid details and marks between 0-100.");
    return;
  }

  const total = marks.reduce((a, b) => a + b, 0);
  const percentage = (total / (marks.length * 100)) * 100;
  const status = percentage >= 40 ? "Pass" : "Fail";

  const resultRow = `
    <tr>
      <td>${name}</td>
      <td>${course}</td>
      <td>${total}</td>
      <td>${percentage.toFixed(2)}%</td>
      <td class="${status === 'Pass' ? 'text-success' : 'text-danger'}">${status}</td>
    </tr>
  `;

  document.getElementById("resultTable").innerHTML = resultRow;
  document.getElementById("resultSection").style.display = "block";
});
