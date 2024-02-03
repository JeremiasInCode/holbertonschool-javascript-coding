const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.trim().split('\n');
    const fieldCounts = {};

    // loop each line in CSV file
    for (let i = 1; i < lines.length; i += 1) {
      const line = lines[i];
      const [firstName, lastName, age, field] = line.split(',');

      if (firstName && lastName && age && field) {
        if (fieldCounts[field]) {
          fieldCounts[field] += 1;
        } else {
          fieldCounts[field] = 1;
        }
      }
    }
    console.log(fieldCounts);

    const totalStudents = Object.values(fieldCounts).reduce((acc, count) => acc + count, 0);
    console.log(`Number of students: ${totalStudents}`);

    for (const field in fieldCounts) {
      if (fieldCounts.hasOwnProperty(field)) {
        console.log(`Number of students in ${field}: ${fieldCounts[field]}. List: ${lines.filter((line) => line.endsWith(field)).map((line) => line.split(',')[0]).join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
