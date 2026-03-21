// =============================================
// GOOGLE APPS SCRIPT – Subida de PDFs a Drive
// Facultad de Cultura Física – Prácticas NMS
// =============================================
//
// INSTRUCCIONES DE INSTALACIÓN:
// 1. Ve a https://script.google.com
// 2. Crea un nuevo proyecto y pega TODO este código
// 3. Cambia FOLDER_ID abajo por el ID de tu carpeta de Drive
// 4. Menú "Implementar" → "Nueva implementación"
//    - Tipo: "Aplicación web"
//    - Ejecutar como: "Yo"
//    - Quién tiene acceso: "Cualquier usuario"
// 5. Autoriza los permisos cuando se solicite
// 6. Copia la URL que aparece (termina en /exec)
// 7. Pégala en perfil-alumno.html donde dice APPS_SCRIPT_URL
// =============================================

// ⚠️ REEMPLAZA CON EL ID DE TU CARPETA DE DRIVE
// (la parte larga de la URL: drive.google.com/drive/folders/ESTE_ID)
const FOLDER_ID = 'TU_FOLDER_ID_AQUI';

function doPost(e) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };

  try {
    const data = JSON.parse(e.postData.contents);
    const { matricula, nombre, nrc, fileName, fileData } = data;

    if (!fileData || !fileName || !matricula) {
      return ContentService.createTextOutput(
        JSON.stringify({ error: 'Datos incompletos' })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    // Decodificar base64
    const bytes = Utilities.base64Decode(fileData);
    const blob = Utilities.newBlob(bytes, 'application/pdf', fileName);

    // Obtener carpeta
    const folder = DriveApp.getFolderById(FOLDER_ID);

    // Buscar si ya existe un archivo de este alumno y eliminarlo
    const existing = folder.getFilesByName(fileName);
    while (existing.hasNext()) {
      existing.next().setTrashed(true);
    }

    // Crear nuevo archivo
    const file = folder.createFile(blob);
    file.setName(fileName);
    file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);

    const url = 'https://drive.google.com/file/d/' + file.getId() + '/view';

    // Log en hoja de cálculo (opcional)
    try {
      logUpload(matricula, nombre, nrc, fileName, url);
    } catch(logErr) { /* No interrumpir si el log falla */ }

    return ContentService.createTextOutput(
      JSON.stringify({ success: true, url: url, fileId: file.getId() })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ error: err.message })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  // Para verificar que el script está activo
  return ContentService.createTextOutput(
    JSON.stringify({ status: 'ok', message: 'Apps Script activo - FCF Prácticas NMS' })
  ).setMimeType(ContentService.MimeType.JSON);
}

// Registrar subidas en una hoja de Google Sheets (opcional)
function logUpload(matricula, nombre, nrc, fileName, url) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  if (!ss) return;
  let sheet = ss.getSheetByName('Registro PDFs');
  if (!sheet) {
    sheet = ss.insertSheet('Registro PDFs');
    sheet.appendRow(['Fecha', 'Matrícula', 'Nombre', 'NRC', 'Archivo', 'URL Drive']);
  }
  sheet.appendRow([
    new Date().toLocaleString('es-MX'),
    matricula, nombre, nrc, fileName, url
  ]);
}
