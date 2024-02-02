const fs = require('fs');

async function countStudents(path) {
  try {
    // Leer el archivo CSV de forma síncrona
    const data = await fs.promises.readFile(path, 'utf8');

    // Dividir el archivo en líneas
    const lines = data.trim().split('\n');

    // Crear un objeto para almacenar el recuento de estudiantes en cada campo
    const fieldCounts = {};

    // Loop a través de cada línea en el archivo CSV, comenzando desde la segunda línea (índice 1)
    for (let i = 1; i < lines.length; i += 1) {
      const line = lines[i];
      const [firstName, lastName, age, field] = line.split(',');

      // Verificar si la línea contiene datos válidos
      if (firstName && lastName && age && field) {
        // Contar el número de estudiantes en cada campo
        if (fieldCounts[field]) {
          fieldCounts[field] += 1;
        } else {
          fieldCounts[field] = 1;
        }
      }
    }

    // Calcular el número total de estudiantes
    const totalStudents = Object.values(fieldCounts).reduce((acc, count) => acc + count, 0);
    console.log(`Number of students: ${totalStudents}`);
/* eslint-disable */
    // Registrar el número de estudiantes en cada campo
    for (const field in fieldCounts) {
      console.log(`Number of students in ${field}: ${fieldCounts[field]}. List: ${lines.filter((line) => line.endsWith(field)).map((line) => line.split(',')[0]).join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;