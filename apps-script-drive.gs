// =============================================
// GOOGLE APPS SCRIPT – Subida de PDFs a Drive
// Facultad de Cultura Física – Prácticas NMS
// Versión actualizada: Marzo 2026
// =============================================
//
// INSTRUCCIONES DE INSTALACIÓN:
// 1. Ve a https://script.google.com
// 2. Crea un nuevo proyecto y pega TODO este código
// 3. En la línea FOLDER_ID, reemplaza el ID de tu carpeta de Drive
//    → Abre tu carpeta en Drive → la URL termina en /folders/ESTE_ID
// 4. Menú "Implementar" → "Nueva implementación"
//    - Tipo: Aplicación web
//    - Ejecutar como: Yo (ya tienes la cuenta de gmail)
//    - Quién tiene acceso: Cualquier usuario
// 5. Autoriza los permisos cuando Google te los pida
// 6. Copia la URL generada (termina en /exec)
// 7. Pégala en perfil-alumno.html donde dice window._APPS_SCRIPT_URL
// =============================================

// ⚠️ REEMPLAZA CON EL ID DE TU CARPETA DE DRIVE
// (la parte larga de la URL: drive.google.com/drive/folders/ESTE_ID)
const FOLDER_ID = '1IfPdQ6KQ3p3hd4UOzC43ZUTlPLA_HVX5';

// Tipos de documento válidos (coinciden con los nombres usados en perfil-alumno.html)
const DOC_TYPES = ['INE', 'CARTA_ACEPTA', 'OFICIO_ASIGNA', 'ACUERDOS', 'BITACORA', 'DESEMPENO', 'LIBERACION'];

// ── MANEJADOR PRINCIPAL POST ──────────────────────────────────────────────
function doPost(e) {
  // Respuesta con CORS habilitado
  const json = (obj) =>
    ContentService.createTextOutput(JSON.stringify(obj))
      .setMimeType(ContentService.MimeType.JSON);

  try {
    // Parsear payload
    const raw = e.postData ? e.postData.contents : null;
    if (!raw) return json({ error: 'Sin datos en el body del request' });

    const data = JSON.parse(raw);
    const {
      matricula,
      nombre,
      nrc,
      docenteName = 'SIN DOCENTE',
      fileName,
      fileData
    } = data;

    // Validar campos obligatorios
    if (!fileData)    return json({ error: 'Falta fileData (Base64 del PDF)' });
    if (!fileName)    return json({ error: 'Falta fileName' });
    if (!matricula)   return json({ error: 'Falta matricula' });

    // Decodificar Base64 → Blob PDF
    const bytes = Utilities.base64Decode(fileData);
    const blob  = Utilities.newBlob(bytes, 'application/pdf', fileName);

    // ── ESTRUCTURA DE CARPETAS ─────────────────────────────
    // Drive/[Carpeta Base]/[Nombre Docente]/[Matricula - Nombre Alumno]/archivo.pdf
    const baseFolder = DriveApp.getFolderById(FOLDER_ID);

    // Carpeta del DOCENTE
    const docenteFolder = getOrCreateFolder(baseFolder, docenteName);

    // Carpeta del ALUMNO  (matrícula + nombre para fácil búsqueda)
    const alumnoFolderName   = matricula + ' - ' + nombre;
    const alumnoFolder       = getOrCreateFolder(docenteFolder, alumnoFolderName);

    // Se ha desactivado la eliminación de archivos previos por solicitud del usuario
    // para mantener un historial de lo cargado y evitar borrados accidentales.
    /*
    const existing = alumnoFolder.getFilesByName(fileName);
    while (existing.hasNext()) {
      existing.next().setTrashed(true);
    }
    */

    // Crear el archivo dentro de la carpeta del alumno
    const file = alumnoFolder.createFile(blob);
    file.setName(fileName);

    // Compartir con enlace (solo lectura) → para que el maestro lo pueda ver desde Firestore
    file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);

    const url = 'https://drive.google.com/file/d/' + file.getId() + '/view';

    // Log en hoja de cálculo (no interrumpe si falla)
    try {
      logUpload(matricula, nombre, nrc, docenteName, fileName, url);
    } catch (logErr) { /* ignorar errores de log */ }

    return json({ success: true, url: url, fileId: file.getId() });

  } catch (err) {
    // Devolver el error completo para facilitar depuración
    return json({ error: err.message, stack: err.stack });
  }
}

// ── CORS pre-flight (OPTIONS) ─────────────────────────────────────────────
function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({
      status: 'ok',
      message: 'Apps Script activo – FCF Prácticas NMS Primavera 2026',
      docTypes: DOC_TYPES,
      timestamp: new Date().toISOString()
    })
  ).setMimeType(ContentService.MimeType.JSON);
}

// ── UTILIDAD: Obtener o crear subcarpeta ──────────────────────────────────
function getOrCreateFolder(parent, name) {
  const iter = parent.getFoldersByName(name);
  if (iter.hasNext()) return iter.next();
  return parent.createFolder(name);
}

// ── LOG OPCIONAL en Google Sheets ─────────────────────────────────────────
// Si el script está vinculado a una hoja de cálculo, lleva registro de cada subida.
function logUpload(matricula, nombre, nrc, docente, fileName, url) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  if (!ss) return; // No hay hoja vinculada → saltar silenciosamente

  let sheet = ss.getSheetByName('Registro PDFs');
  if (!sheet) {
    sheet = ss.insertSheet('Registro PDFs');
    sheet.appendRow(['Fecha y Hora', 'Matrícula', 'Nombre Alumno', 'NRC', 'Docente', 'Archivo', 'URL Drive']);
    // Congelar la fila del encabezado
    sheet.setFrozenRows(1);
  }

  sheet.appendRow([
    new Date().toLocaleString('es-MX', { timeZone: 'America/Mexico_City' }),
    matricula,
    nombre,
    nrc,
    docente,
    fileName,
    url
  ]);
}
