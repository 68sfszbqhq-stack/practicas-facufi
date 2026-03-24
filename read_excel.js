const xlsx = require('xlsx');
const path = require('path');

const filePath = '/Users/josemendoza/.gemini/antigravity/scratch/Territorio-de-campeones/Citas_Practicas_II_9_a_12.xlsx';
const workbook = xlsx.readFile(filePath);
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];
const data = xlsx.utils.sheet_to_json(sheet);

console.log(JSON.stringify(data.slice(0, 10), null, 2));
console.log('Total rows:', data.length);
