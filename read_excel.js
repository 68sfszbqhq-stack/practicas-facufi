const xlsx = require('xlsx');
const workbook = xlsx.readFile('/Users/josemendoza/.gemini/antigravity/scratch/Territorio-de-campeones/Lista y Promedio Practicas II.xlsx');
const sheet = workbook.Sheets['Listado por Seccion'];
const data = xlsx.utils.sheet_to_json(sheet);
console.log(JSON.stringify(data.slice(0, 10), null, 2));





