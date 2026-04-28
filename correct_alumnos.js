const fs = require('fs');
const xlsx = require('xlsx');

const excelPath = '/Users/josemendoza/.gemini/antigravity/scratch/Territorio-de-campeones/Lista y Promedio Practicas II.xlsx';
const dataJsPath = '/Users/josemendoza/.gemini/antigravity/scratch/Territorio-de-campeones/data.js';

const workbook = xlsx.readFile(excelPath);
const sheet = workbook.Sheets['Listado por Seccion'];

// Using json object: { range: 4 } skips first 4 lines (headers)
let alumnosRaw = xlsx.utils.sheet_to_json(sheet, { range: 4, header: 1 });

// Filter out empty rows or rows that are not actually students
alumnosRaw = alumnosRaw.filter(row => row.length >= 2 && !isNaN(Number(row[0])));


const alumnos = alumnosRaw.map((row, index) => {
    // Generate horarioCita: 09:00 + index minutes
    const totalMinutes = index;
    const hours = 9 + Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    const hh = String(hours).padStart(2, '0');
    const mm = String(minutes).padStart(2, '0');
    
    // row structure based on xlsx.utils.sheet_to_json(sheet, { range: 3, header: 1 })
    // [0] Promedio, [1] Matricula, [2] Nombre, [3] Plan, [4] Periodo, [5] NRC, [6] Docente
    return {
        promedio: Number(row[0]),
        matricula: String(row[1]).trim(),
        nombre: String(row[2]).trim(),
        plan: String(row[3]).trim(),
        periodo: String(row[4]).trim(),
        nrc: Number(row[5]),
        docente: String(row[6]).trim(),
        horarioCita: `${hh}:${mm}`
    };
});

// Update data.js
const fileContent = fs.readFileSync(dataJsPath, 'utf8');
const arrayRegex = /const ALUMNOS = (\[[\s\S]*?\]);/;
const newAlumnosStr = "const ALUMNOS = " + JSON.stringify(alumnos, null, 2) + ";";

if (fileContent.match(arrayRegex)) {
    const newFileContent = fileContent.replace(arrayRegex, newAlumnosStr);
    fs.writeFileSync(dataJsPath, newFileContent, 'utf8');
    console.log(`Successfully regenerated ${alumnos.length} students in data.js`);
} else {
    console.error('Could not find ALUMNOS array in data.js');
}

// Verification for explicit cases
const gael = alumnos.find(a => a.nombre.includes('GAEL'));
console.log('Gael row found:', gael);
const matCheck = alumnos.find(a => a.matricula === '202331025' || a.matricula === '202326986');
console.log('Matricula check (202331025/202326986):', matCheck);
