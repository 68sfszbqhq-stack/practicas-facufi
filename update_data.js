const fs = require('fs');
const xlsx = require('xlsx');

// Read existing data.js
const fileContent = fs.readFileSync('/Users/josemendoza/.gemini/antigravity/scratch/Territorio-de-campeones/data.js', 'utf8');

// Read Excel
const workbook = xlsx.readFile('/Users/josemendoza/.gemini/antigravity/scratch/Territorio-de-campeones/Citas_Practicas_II_9_a_12.xlsx');
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const excelData = xlsx.utils.sheet_to_json(sheet);

const excelMap = {};
excelData.forEach(row => {
    // Sometimes matricula can be number or string
    const mat = String(row.Matricula).trim();
    excelMap[mat] = row['Horario de Cita'];
});

// extract ALUMNOS array from data.js
const arrayRegex = /const ALUMNOS = (\[[\s\S]*?\]);/;
const match = fileContent.match(arrayRegex);
if(match) {
    let alumnos = JSON.parse(match[1]);
    alumnos = alumnos.map(a => {
        const mat = String(a.matricula).trim();
        if(excelMap[mat]) {
            a.horarioCita = excelMap[mat];
        } else {
            a.horarioCita = "12:00"; // default if not found
        }
        return a;
    });

    const newAlumnosStr = "const ALUMNOS = " + JSON.stringify(alumnos, null, 2) + ";";
    const newFileContent = fileContent.replace(arrayRegex, newAlumnosStr);
    fs.writeFileSync('/Users/josemendoza/.gemini/antigravity/scratch/Territorio-de-campeones/data.js', newFileContent, 'utf8');
    console.log("data.js successfully updated with horarioCita!");
} else {
    console.log("Could not find ALUMNOS array");
}
