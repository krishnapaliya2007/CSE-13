
function getGrade(average) {
  if (average >= 90) return 'A+';
  if (average >= 80) return 'A';
  if (average >= 70) return 'B+';
  if (average >= 60) return 'B';
  if (average >= 50) return 'C';
  if (average >= 40) return 'D';
  return 'F';
}

function getGradeClass(grade) {
  const classes = {
    'A+': 'grade-Aplus',
    'A' : 'grade-A',
    'B+': 'grade-Bplus',
    'B' : 'grade-B',
    'C' : 'grade-C',
    'D' : 'grade-D',
    'F' : 'grade-F'
  };
  return classes[grade] || '';
}

function calculate() {

  // Get every marks input on the page
  const inputs = document.querySelectorAll('.mark-input');

  let total      = 0;
  let validCount = 0;   // How many fields the user actually filled

  for (let i = 0; i < inputs.length; i++) {
    const val = inputs[i].value.trim();

    // Skip empty fields — user may leave some blank
    if (val === '') continue;

    const num = Number(val);

    // Validate: must be a number between 0 and 100
    if (isNaN(num) || num < 0 || num > 100) {
      alert('Subject ' + (i + 1) + ': please enter a value between 0 and 100.');
      return;
    }

    total += num;
    validCount++;
  }

  // At least one field must be filled
  if (validCount === 0) {
    alert('Please enter marks for at least one subject.');
    return;
  }

  // Average rounded to 2 decimal places
  const average = (total / validCount).toFixed(2);

  // Grade based on average
  const grade = getGrade(Number(average));

  // ---- Display results ----
  document.getElementById('total').textContent   = total + ' / ' + (validCount * 100);
  document.getElementById('average').textContent = average + ' / 100';

  const gradeEl = document.getElementById('grade');
  gradeEl.textContent = grade;
  gradeEl.className   = 'value grade-badge ' + getGradeClass(grade);

  // Show the result box
  document.getElementById('result-box').classList.remove('hidden');
}
