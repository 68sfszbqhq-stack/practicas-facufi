// =============================================
// DATOS DEL SISTEMA DE PRÁCTICAS CURRICULARES
// Facultad de Cultura Física - BUAP
// Primavera 2026
// =============================================

const DOCENTES = [
  {
    id: "100259766",
    nombre: "ARENAS - PEREZ VICTOR",
    nombreFormato: "Victor Arenas Pérez",
    primerApellido: "ARENAS",
    materia: "Pract de la Educ Fis II (NMS)",
    clave: "LEFS 201",
    secciones: [
      { nrc: 61052, seccion: "OO9", dias: "LM", hora: "1700-1859", salon: "1FCF1/210", inscritos: 25 }
    ]
  },
  {
    id: "100347500",
    nombre: "HERNANDEZ - PEREZ JOSE VICTOR",
    nombreFormato: "José Victor Hernández Pérez",
    primerApellido: "HERNANDEZ",
    materia: "Pract de la Educ Fis II (NMS)",
    clave: "LEFS 201",
    secciones: [
      { nrc: 60849, seccion: "OO2", dias: "LM", hora: "1700-1859", salon: "1FCF1/209", inscritos: 52 }
    ]
  },
  {
    id: "100429888",
    nombre: "MARCIANO - MENDOZA ALEJANDRA ADRIANA",
    nombreFormato: "Alejandra Adriana Marciano Mendoza",
    primerApellido: "MARCIANO",
    materia: "Pract de la Educ Fis II (NMS)",
    clave: "LEFS 201",
    secciones: [
      { nrc: 60866, seccion: "OO6", dias: "AJ", hora: "0900-1059", salon: "1FCF1/209", inscritos: 11 }
    ]
  },
  {
    id: "NSS014577",
    nombre: "SALAMANCA - MENDEZ NAYELLI",
    nombreFormato: "Nayelli Salamanca Méndez",
    primerApellido: "SALAMANCA",
    materia: "Pract de la Educ Fis II (NMS)",
    clave: "LEFS 201",
    secciones: [
      { nrc: 60842, seccion: "OO1", dias: "AJ", hora: "1300-1459", salon: "1FCF2/101", inscritos: 2 },
      { nrc: 60875, seccion: "OO8", dias: "LM", hora: "1300-1459", salon: "1FCF5/201A", inscritos: 12 }
    ]
  },
  {
    id: "100301866",
    nombre: "TEJEDA - BARRIENTOS DANIEL DEMETRIO",
    nombreFormato: "Daniel Demetrio Tejeda Barrientos",
    primerApellido: "TEJEDA",
    materia: "Pract de la Educ Fis II (NMS)",
    clave: "LEFS 201",
    secciones: [
      { nrc: 60853, seccion: "OO3", dias: "AJ", hora: "1700-1859", salon: "1FCF1/208", inscritos: 14 },
      { nrc: 60861, seccion: "OO5", dias: "AJ", hora: "1900-2059", salon: "1FCF1/114", inscritos: 27 }
    ]
  },
  {
    id: "100378333",
    nombre: "TORRES - MACHORRO JESUS",
    nombreFormato: "Jesús Torres Machorro",
    primerApellido: "TORRES",
    materia: "Pract de la Educ Fis II (NMS)",
    clave: "LEFS 201",
    secciones: [
      { nrc: 60857, seccion: "OO4", dias: "LM", hora: "1500-1659", salon: "1FCF1/209", inscritos: 31 },
      { nrc: 60871, seccion: "OO7", dias: "AJ", hora: "1300-1459", salon: "1FCF1/114", inscritos: 12 }
    ]
  }
];

const ALUMNOS = [
  {
    "promedio": 9.9,
    "matricula": "202326285",
    "nombre": "FERRERA GONZALEZ ANTONELLA",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60849,
    "docente": "Victor Hernández Pérez",
    "horarioCita": "09:00"
  },
  {
    "promedio": 9.87,
    "matricula": "202353390",
    "nombre": "ROBLEDO MARIN DAEL ANTONIO",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60849,
    "docente": "Victor Hernández Pérez",
    "horarioCita": "09:01"
  },
  {
    "promedio": 9.8,
    "matricula": "202319247",
    "nombre": "ALVARADO MUNOZ YADHIRA IVETTE",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60849,
    "docente": "Victor Hernández Pérez",
    "horarioCita": "09:02"
  },
  {
    "promedio": 9.8,
    "matricula": "202325928",
    "nombre": "DOMINGUEZ ARGUELLO JULIETA ANDREA",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60849,
    "docente": "Victor Hernández Pérez",
    "horarioCita": "09:03"
  },
  {
    "promedio": 9.8,
    "matricula": "202351359",
    "nombre": "PINA GUZMAN GUSTAVO",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60849,
    "docente": "Victor Hernández Pérez",
    "horarioCita": "09:04"
  },
  {
    "promedio": 9.77,
    "matricula": "202324801",
    "nombre": "BARRERA TELLEZ CRISTINA",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60849,
    "docente": "Victor Hernández Pérez",
    "horarioCita": "09:05"
  },
  {
    "promedio": 9.74,
    "matricula": "202322266",
    "nombre": "CALVA LUNA CARLOS IGNACIO",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60849,
    "docente": "Victor Hernández Pérez",
    "horarioCita": "09:06"
  },
  {
    "promedio": 9.74,
    "matricula": "202368029",
    "nombre": "VALERIO GARCIA MAITE",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60849,
    "docente": "Victor Hernández Pérez",
    "horarioCita": "09:07"
  },
  {
    "promedio": 9.7,
    "matricula": "202344638",
    "nombre": "GOMEZ VALENCIA CHRISTIAN ADAN",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60875,
    "docente": "Nayelli Salamanca M",
    "horarioCita": "09:08"
  },
  {
    "promedio": 9.7,
    "matricula": "202325997",
    "nombre": "DORANTES GONZALEZ OSVALDO",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60849,
    "docente": "Victor Hernández Pérez",
    "horarioCita": "09:09"
  },
  {
    "promedio": 9.69,
    "matricula": "202356749",
    "nombre": "SARMIENTO ANDRADE KATHUR",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60861,
    "docente": "Daniel Demetrio Tejeda Barrientos",
    "horarioCita": "09:10"
  },
  {
    "promedio": 9.67,
    "matricula": "202331959",
    "nombre": "HERNANDEZ PAEZ ALEJANDRO",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60849,
    "docente": "Victor Hernández Pérez",
    "horarioCita": "09:11"
  },
  {
    "promedio": 9.67,
    "matricula": "202357352",
    "nombre": "SUAREZ ELIOSA ISAAC",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60849,
    "docente": "Victor Hernández Pérez",
    "horarioCita": "09:12"
  },
  {
    "promedio": 9.66,
    "matricula": "202357391",
    "nombre": "SUASTEGUI VIGUERAS FRANCISCO MIGUEL",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60849,
    "docente": "Victor Hernández Pérez",
    "horarioCita": "09:13"
  },
  {
    "promedio": 9.64,
    "matricula": "202350796",
    "nombre": "PEREZ MADRID ALEJANDRO JAVIER",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60849,
    "docente": "Victor Hernández Pérez",
    "horarioCita": "09:14"
  },
  {
    "promedio": 9.64,
    "matricula": "202351568",
    "nombre": "POSADAS CONTRERAS LESLIE JACQUELINE",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60849,
    "docente": "Victor Hernández Pérez",
    "horarioCita": "09:15"
  },
  {
    "promedio": 9.64,
    "matricula": "202366149",
    "nombre": "RONQUILLO OLVERA DIANA",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60849,
    "docente": "Victor Hernández Pérez",
    "horarioCita": "09:16"
  },
  {
    "promedio": 9.64,
    "matricula": "202357635",
    "nombre": "TELLO XOCHIPA MIGUEL ANGEL",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60849,
    "docente": "Victor Hernández Pérez",
    "horarioCita": "09:17"
  },
  {
    "promedio": 9.64,
    "matricula": "202358940",
    "nombre": "VICTORIA GUERRA JEREMMY JESRAEL",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60849,
    "docente": "Victor Hernández Pérez",
    "horarioCita": "09:18"
  },
  {
    "promedio": 9.64,
    "matricula": "202320944",
    "nombre": "TORRES MENESES JAVIER",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 61052,
    "docente": "Victor Arenas Pérez",
    "horarioCita": "09:19"
  },
  {
    "promedio": 9.63,
    "matricula": "202379491",
    "nombre": "VAZQUEZ RANGEL LUISA FERNANDA",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60849,
    "docente": "Victor Hernández Pérez",
    "horarioCita": "09:20"
  },
  {
    "promedio": 9.61,
    "matricula": "202319608",
    "nombre": "BADILLO ZENTENO YOSEF EMANUEL",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60849,
    "docente": "Victor Hernández Pérez",
    "horarioCita": "09:21"
  },
  {
    "promedio": 9.61,
    "matricula": "202320419",
    "nombre": "CERON MEZA EMILIANO",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60849,
    "docente": "Victor Hernández Pérez",
    "horarioCita": "09:22"
  },
  {
    "promedio": 9.61,
    "matricula": "202353780",
    "nombre": "RODRIGUEZ LUNA JOSE GAUDENCIO",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60861,
    "docente": "Daniel Demetrio Tejeda Barrientos",
    "horarioCita": "09:23"
  },
  {
    "promedio": 9.58,
    "matricula": "202346799",
    "nombre": "MARQUEZ GONZALEZ ADAIR",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60875,
    "docente": "Nayelli Salamanca M",
    "horarioCita": "09:24"
  },
  {
    "promedio": 9.58,
    "matricula": "202319577",
    "nombre": "AVILA SANCHEZ JOSUE JARED",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 61052,
    "docente": "Victor Arenas Pérez",
    "horarioCita": "09:25"
  },
  {
    "promedio": 9.58,
    "matricula": "202351500",
    "nombre": "PORQUILLO MINUTTI MARICRUZ",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60861,
    "docente": "Daniel Demetrio Tejeda Barrientos",
    "horarioCita": "09:26"
  },
  {
    "promedio": 9.54,
    "matricula": "202363691",
    "nombre": "MENESES FLORES AHTZIRY",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60875,
    "docente": "Nayelli Salamanca M",
    "horarioCita": "09:27"
  },
  {
    "promedio": 9.54,
    "matricula": "202358836",
    "nombre": "VELAZQUEZ ANDRADE EMIGDIO",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60866,
    "docente": "Alejandra Marciano Mendoza",
    "horarioCita": "09:28"
  },
  {
    "promedio": 9.54,
    "matricula": "202380511",
    "nombre": "YANEZ SANCHEZ JOSELYN ALINE",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60866,
    "docente": "Alejandra Marciano Mendoza",
    "horarioCita": "09:29"
  },
  {
    "promedio": 9.54,
    "matricula": "202320827",
    "nombre": "CRUZ ROMUALDO SAMUEL DE JESUS",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60849,
    "docente": "Victor Hernández Pérez",
    "horarioCita": "09:30"
  },
  {
    "promedio": 9.54,
    "matricula": "202355080",
    "nombre": "ROSAS SANCHEZ ALVARO",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60849,
    "docente": "Victor Hernández Pérez",
    "horarioCita": "09:31"
  },
  {
    "promedio": 9.54,
    "matricula": "202330302",
    "nombre": "FRANCO COATL DANIEL",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 61052,
    "docente": "Victor Arenas Pérez",
    "horarioCita": "09:32"
  },
  {
    "promedio": 9.54,
    "matricula": "202368060",
    "nombre": "VALLEJO MADRID DANIEL",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60853,
    "docente": "Daniel Demetrio Tejeda Barrientos",
    "horarioCita": "09:33"
  },
  {
    "promedio": 9.51,
    "matricula": "202366550",
    "nombre": "SANCHEZ CORONA RODRIGO",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60866,
    "docente": "Alejandra Marciano Mendoza",
    "horarioCita": "09:34"
  },
  {
    "promedio": 9.51,
    "matricula": "202326138",
    "nombre": "ESPINOZA AYALA DANIELA",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60857,
    "docente": "Jesus Torres Machorro",
    "horarioCita": "09:35"
  },
  {
    "promedio": 9.48,
    "matricula": "202357580",
    "nombre": "TELLEZ CORDERO BRUNO ANDRE",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60866,
    "docente": "Alejandra Marciano Mendoza",
    "horarioCita": "09:36"
  },
  {
    "promedio": 9.48,
    "matricula": "202323854",
    "nombre": "FIGUEROA CASTRO JESSICA ATENEA",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60849,
    "docente": "Victor Hernández Pérez",
    "horarioCita": "09:37"
  },
  {
    "promedio": 9.48,
    "matricula": "202348037",
    "nombre": "MINERO VAZQUEZ DANIEL",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60849,
    "docente": "Victor Hernández Pérez",
    "horarioCita": "09:38"
  },
  {
    "promedio": 9.48,
    "matricula": "202320157",
    "nombre": "CARMONA LEZAMA FERNANDO",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 61052,
    "docente": "Victor Arenas Pérez",
    "horarioCita": "09:39"
  },
  {
    "promedio": 9.45,
    "matricula": "202319354",
    "nombre": "ANGEL HERNANDEZ STEPHANY",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60849,
    "docente": "Victor Hernández Pérez",
    "horarioCita": "09:40"
  },
  {
    "promedio": 9.45,
    "matricula": "202331025",
    "nombre": "GOMEZ SANCHEZ JESUS ANGEL",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60849,
    "docente": "Victor Hernández Pérez",
    "horarioCita": "09:41"
  },
  {
    "promedio": 9.41,
    "matricula": "202318988",
    "nombre": "ABURTO CAMACHO BRANDON",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60849,
    "docente": "Victor Hernández Pérez",
    "horarioCita": "09:42"
  },
  {
    "promedio": 9.41,
    "matricula": "202328414",
    "nombre": "JUVENCIO FELICIANO ANDREA LIZBETH",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60849,
    "docente": "Victor Hernández Pérez",
    "horarioCita": "09:43"
  },
  {
    "promedio": 9.41,
    "matricula": "202349346",
    "nombre": "ORDAZ DE LA ROSA YERALDINE NATALI",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60849,
    "docente": "Victor Hernández Pérez",
    "horarioCita": "09:44"
  },
  {
    "promedio": 9.38,
    "matricula": "202325910",
    "nombre": "DIONICIO CASTRO BRYAN",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60849,
    "docente": "Victor Hernández Pérez",
    "horarioCita": "09:45"
  },
  {
    "promedio": 9.38,
    "matricula": "202326986",
    "nombre": "GARCIA RODRIGUEZ JESUS GAEL",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 61052,
    "docente": "Victor Arenas Pérez",
    "horarioCita": "09:46"
  },
  {
    "promedio": 9.38,
    "matricula": "202334312",
    "nombre": "BLANCAS LOPEZ OASIS",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60857,
    "docente": "Jesus Torres Machorro",
    "horarioCita": "09:47"
  },
  {
    "promedio": 9.35,
    "matricula": "202380380",
    "nombre": "VIVEROS CARLIN MICHELLE",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60866,
    "docente": "Alejandra Marciano Mendoza",
    "horarioCita": "09:48"
  },
  {
    "promedio": 9.35,
    "matricula": "202335654",
    "nombre": "GALINDO GUTIERREZ LEILANY",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60849,
    "docente": "Victor Hernández Pérez",
    "horarioCita": "09:49"
  },
  {
    "promedio": 9.35,
    "matricula": "202380163",
    "nombre": "VICTORIA RODRIGUEZ LILIANA",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 61052,
    "docente": "Victor Arenas Pérez",
    "horarioCita": "09:50"
  },
  {
    "promedio": 9.32,
    "matricula": "202343570",
    "nombre": "DEL POZO GONZALEZ ARTURO",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60875,
    "docente": "Nayelli Salamanca M",
    "horarioCita": "09:51"
  },
  {
    "promedio": 9.32,
    "matricula": "202362102",
    "nombre": "GONZALEZ SANCHEZ BRYAN",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60861,
    "docente": "Daniel Demetrio Tejeda Barrientos",
    "horarioCita": "09:52"
  },
  {
    "promedio": 9.32,
    "matricula": "202332411",
    "nombre": "JIMENEZ CASTELLANOS YAHIR",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60861,
    "docente": "Daniel Demetrio Tejeda Barrientos",
    "horarioCita": "09:53"
  },
  {
    "promedio": 9.32,
    "matricula": "202345286",
    "nombre": "HERNANDEZ OCHOA JOSE EDUARDO",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60857,
    "docente": "Jesus Torres Machorro",
    "horarioCita": "09:54"
  },
  {
    "promedio": 9.31,
    "matricula": "202232192",
    "nombre": "LARA LEONIDES DULCE TERESA",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60857,
    "docente": "Jesus Torres Machorro",
    "horarioCita": "09:55"
  },
  {
    "promedio": 9.3,
    "matricula": "202265348",
    "nombre": "PEREZ CORTES KARLA SOFIA",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60857,
    "docente": "Jesus Torres Machorro",
    "horarioCita": "09:56"
  },
  {
    "promedio": 9.29,
    "matricula": "202321536",
    "nombre": "ANZURES SANTIAGO MARIA NAYDELIN",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60849,
    "docente": "Victor Hernández Pérez",
    "horarioCita": "09:57"
  },
  {
    "promedio": 9.29,
    "matricula": "202367357",
    "nombre": "SOTO RODRIGUEZ ALICIA AMERICA",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 61052,
    "docente": "Victor Arenas Pérez",
    "horarioCita": "09:58"
  },
  {
    "promedio": 9.29,
    "matricula": "202372934",
    "nombre": "JIMENEZ MARTINEZ QUETZALKEN FERNANDO",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60857,
    "docente": "Jesus Torres Machorro",
    "horarioCita": "09:59"
  },
  {
    "promedio": 9.29,
    "matricula": "202351511",
    "nombre": "PORRAS HUERTA MELANNIE ARLENE",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60857,
    "docente": "Jesus Torres Machorro",
    "horarioCita": "10:00"
  },
  {
    "promedio": 9.25,
    "matricula": "202350804",
    "nombre": "PEREZ MARTINEZ CARLOS ALFREDO",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 61052,
    "docente": "Victor Arenas Pérez",
    "horarioCita": "10:01"
  },
  {
    "promedio": 9.25,
    "matricula": "202353587",
    "nombre": "RODRIGUEZ CRUZ EDUARDO GAEL",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 61052,
    "docente": "Victor Arenas Pérez",
    "horarioCita": "10:02"
  },
  {
    "promedio": 9.25,
    "matricula": "202331078",
    "nombre": "GONZALEZ CID AARON",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60861,
    "docente": "Daniel Demetrio Tejeda Barrientos",
    "horarioCita": "10:03"
  },
  {
    "promedio": 9.25,
    "matricula": "202353917",
    "nombre": "RODRIGUEZ RAMOS MIGUEL ANGEL",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60861,
    "docente": "Daniel Demetrio Tejeda Barrientos",
    "horarioCita": "10:04"
  },
  {
    "promedio": 9.24,
    "matricula": "202358395",
    "nombre": "TZILIN GOMEZ TANIA ILIANA",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60861,
    "docente": "Daniel Demetrio Tejeda Barrientos",
    "horarioCita": "10:05"
  },
  {
    "promedio": 9.22,
    "matricula": "202329936",
    "nombre": "DOMINGUEZ ROJANO LEONARDO KEVIN",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 61052,
    "docente": "Victor Arenas Pérez",
    "horarioCita": "10:06"
  },
  {
    "promedio": 9.19,
    "matricula": "202360561",
    "nombre": "BAILON GARCIA YOSELIN GUADALUPE",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60849,
    "docente": "Victor Hernández Pérez",
    "horarioCita": "10:07"
  },
  {
    "promedio": 9.19,
    "matricula": "202326148",
    "nombre": "ESPINOZA JIMENEZ DIEGO IAN",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60849,
    "docente": "Victor Hernández Pérez",
    "horarioCita": "10:08"
  },
  {
    "promedio": 9.19,
    "matricula": "202330963",
    "nombre": "GOMEZ GARCIA HUGO ATILIO",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60849,
    "docente": "Victor Hernández Pérez",
    "horarioCita": "10:09"
  },
  {
    "promedio": 9.19,
    "matricula": "202363010",
    "nombre": "LOPEZ RODRIGUEZ DANIELA",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60849,
    "docente": "Victor Hernández Pérez",
    "horarioCita": "10:10"
  },
  {
    "promedio": 9.19,
    "matricula": "202355700",
    "nombre": "SALMERON ALCAIDE JOSE MANUEL",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60849,
    "docente": "Victor Hernández Pérez",
    "horarioCita": "10:11"
  },
  {
    "promedio": 9.19,
    "matricula": "202353457",
    "nombre": "ROBLES VAZQUEZ AZUANY PAOLA",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60857,
    "docente": "Jesus Torres Machorro",
    "horarioCita": "10:12"
  },
  {
    "promedio": 9.17,
    "matricula": "202353783",
    "nombre": "RODRIGUEZ MACEDA EMMANUEL",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 61052,
    "docente": "Victor Arenas Pérez",
    "horarioCita": "10:13"
  },
  {
    "promedio": 9.16,
    "matricula": "202353443",
    "nombre": "ROBLES ROMERO PEDRO ANGEL",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60866,
    "docente": "Alejandra Marciano Mendoza",
    "horarioCita": "10:14"
  },
  {
    "promedio": 9.16,
    "matricula": "202353122",
    "nombre": "RIOS ESPINOZA DANIEL",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 61052,
    "docente": "Victor Arenas Pérez",
    "horarioCita": "10:15"
  },
  {
    "promedio": 9.16,
    "matricula": "202341050",
    "nombre": "ORTEGA MONTES MIGUEL GABRIEL",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60857,
    "docente": "Jesus Torres Machorro",
    "horarioCita": "10:16"
  },
  {
    "promedio": 9.15,
    "matricula": "202234819",
    "nombre": "OLMEDO LOPEZ EMILIO DE JESUS",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60861,
    "docente": "Daniel Demetrio Tejeda Barrientos",
    "horarioCita": "10:17"
  },
  {
    "promedio": 9.12,
    "matricula": "202345012",
    "nombre": "GUZMAN CANDIA ANA LILIA",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60853,
    "docente": "Daniel Demetrio Tejeda Barrientos",
    "horarioCita": "10:18"
  },
  {
    "promedio": 9.12,
    "matricula": "202380203",
    "nombre": "VIEYRA PALACIOS JOSHUA",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60857,
    "docente": "Jesus Torres Machorro",
    "horarioCita": "10:19"
  },
  {
    "promedio": 9.12,
    "matricula": "202358976",
    "nombre": "VILLAFAN LEZAMA MANUEL",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60871,
    "docente": "Jesus Torres Machorro",
    "horarioCita": "10:20"
  },
  {
    "promedio": 9.1,
    "matricula": "202376024",
    "nombre": "RAMIREZ LOPEZ MIGUEL ANGEL",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60857,
    "docente": "Jesus Torres Machorro",
    "horarioCita": "10:21"
  },
  {
    "promedio": 9.1,
    "matricula": "202160529",
    "nombre": "SANTIAGO GONZALEZ AMERICA FERNANDA",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60857,
    "docente": "Jesus Torres Machorro",
    "horarioCita": "10:22"
  },
  {
    "promedio": 9.09,
    "matricula": "202342962",
    "nombre": "CHAZARI SANCHEZ ANGEL ALEXIS",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60849,
    "docente": "Victor Hernández Pérez",
    "horarioCita": "10:23"
  },
  {
    "promedio": 9.09,
    "matricula": "202328253",
    "nombre": "HERRERA OCHOA GERALDINE",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 61052,
    "docente": "Victor Arenas Pérez",
    "horarioCita": "10:24"
  },
  {
    "promedio": 9.09,
    "matricula": "202366299",
    "nombre": "RUIZ MEZA OSWALDO ANGEL",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60861,
    "docente": "Daniel Demetrio Tejeda Barrientos",
    "horarioCita": "10:25"
  },
  {
    "promedio": 9.06,
    "matricula": "202378631",
    "nombre": "TORRES JIMENEZ ALDO",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60875,
    "docente": "Nayelli Salamanca M",
    "horarioCita": "10:26"
  },
  {
    "promedio": 9.06,
    "matricula": "202322713",
    "nombre": "CASTRO VEGA LUIS MANUEL",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60849,
    "docente": "Victor Hernández Pérez",
    "horarioCita": "10:27"
  },
  {
    "promedio": 9.06,
    "matricula": "202352857",
    "nombre": "REYES LIMON LEONARDO ANDRE",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60849,
    "docente": "Victor Hernández Pérez",
    "horarioCita": "10:28"
  },
  {
    "promedio": 9.06,
    "matricula": "202371132",
    "nombre": "DIAZ BONILLA XIMENA",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 61052,
    "docente": "Victor Arenas Pérez",
    "horarioCita": "10:29"
  },
  {
    "promedio": 9.06,
    "matricula": "202370144",
    "nombre": "BRAVO CUAUTLE CORE AARON",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60861,
    "docente": "Daniel Demetrio Tejeda Barrientos",
    "horarioCita": "10:30"
  },
  {
    "promedio": 9.03,
    "matricula": "202360572",
    "nombre": "BARBERENA LANDERO JONATHAN EDUARDO",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60849,
    "docente": "Victor Hernández Pérez",
    "horarioCita": "10:31"
  },
  {
    "promedio": 8.96,
    "matricula": "202352050",
    "nombre": "RAMIREZ JAVIER ANGEL EDUARDO",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 61052,
    "docente": "Victor Arenas Pérez",
    "horarioCita": "10:32"
  },
  {
    "promedio": 8.96,
    "matricula": "202338409",
    "nombre": "MACIP GARCIA OSWALDO DANIEL",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60853,
    "docente": "Daniel Demetrio Tejeda Barrientos",
    "horarioCita": "10:33"
  },
  {
    "promedio": 8.96,
    "matricula": "202350230",
    "nombre": "PEDRO SANCHEZ ABDIEL",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60853,
    "docente": "Daniel Demetrio Tejeda Barrientos",
    "horarioCita": "10:34"
  },
  {
    "promedio": 8.96,
    "matricula": "202366537",
    "nombre": "SANCHEZ CERVANTES BRUNO",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60853,
    "docente": "Daniel Demetrio Tejeda Barrientos",
    "horarioCita": "10:35"
  },
  {
    "promedio": 8.96,
    "matricula": "202364286",
    "nombre": "OLMOS SANCHEZ DIEGO",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60861,
    "docente": "Daniel Demetrio Tejeda Barrientos",
    "horarioCita": "10:36"
  },
  {
    "promedio": 8.96,
    "matricula": "202329634",
    "nombre": "COTE SOTO MIGUEL ANGEL",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60871,
    "docente": "Jesus Torres Machorro",
    "horarioCita": "10:37"
  },
  {
    "promedio": 8.93,
    "matricula": "202360950",
    "nombre": "CASTILLO RODRIGUEZ LUIS GUSTAVO",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60866,
    "docente": "Alejandra Marciano Mendoza",
    "horarioCita": "10:38"
  },
  {
    "promedio": 8.93,
    "matricula": "202356663",
    "nombre": "SANTIBANEZ LORA AZAEL EMMANUEL",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60849,
    "docente": "Victor Hernández Pérez",
    "horarioCita": "10:39"
  },
  {
    "promedio": 8.93,
    "matricula": "202124211",
    "nombre": "IBARRA MORALES DIEGO",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60853,
    "docente": "Daniel Demetrio Tejeda Barrientos",
    "horarioCita": "10:40"
  },
  {
    "promedio": 8.93,
    "matricula": "202339567",
    "nombre": "MENESES ALONSO ATZIN ALAIN",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60857,
    "docente": "Jesus Torres Machorro",
    "horarioCita": "10:41"
  },
  {
    "promedio": 8.92,
    "matricula": "202345326",
    "nombre": "HERNANDEZ RAMIREZ CARLOS EMANUEL",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60842,
    "docente": "Nayelli Salamanca M",
    "horarioCita": "10:42"
  },
  {
    "promedio": 8.9,
    "matricula": "202365236",
    "nombre": "RAMIREZ LOPEZ ALEJANDRO",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60866,
    "docente": "Alejandra Marciano Mendoza",
    "horarioCita": "10:43"
  },
  {
    "promedio": 8.9,
    "matricula": "202336273",
    "nombre": "GONZALEZ RODRIGUEZ CITLALI MARLEN",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60849,
    "docente": "Victor Hernández Pérez",
    "horarioCita": "10:44"
  },
  {
    "promedio": 8.9,
    "matricula": "202346675",
    "nombre": "MANJARREZ XOXOTLA FRANCISCO ANTONIO",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60861,
    "docente": "Daniel Demetrio Tejeda Barrientos",
    "horarioCita": "10:45"
  },
  {
    "promedio": 8.89,
    "matricula": "202361083",
    "nombre": "CONTRERAS CONTRERAS VALERIA",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 61052,
    "docente": "Victor Arenas Pérez",
    "horarioCita": "10:46"
  },
  {
    "promedio": 8.87,
    "matricula": "202331690",
    "nombre": "HERNANDEZ DE LA FUENTE ALEJANDRO",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60849,
    "docente": "Victor Hernández Pérez",
    "horarioCita": "10:47"
  },
  {
    "promedio": 8.87,
    "matricula": "202338804",
    "nombre": "MARTINEZ GONZALEZ LUIS DANIEL",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60861,
    "docente": "Daniel Demetrio Tejeda Barrientos",
    "horarioCita": "10:48"
  },
  {
    "promedio": 8.86,
    "matricula": "202336829",
    "nombre": "HERNANDEZ SANCHEZ MAURICIO MOISES",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60849,
    "docente": "Victor Hernández Pérez",
    "horarioCita": "10:49"
  },
  {
    "promedio": 8.85,
    "matricula": "202356480",
    "nombre": "SANCHEZ ZARATE ALAN ALDAIR",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 61052,
    "docente": "Victor Arenas Pérez",
    "horarioCita": "10:50"
  },
  {
    "promedio": 8.85,
    "matricula": "202336241",
    "nombre": "GONZALEZ NAVARRO AXEL GERARDO",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60861,
    "docente": "Daniel Demetrio Tejeda Barrientos",
    "horarioCita": "10:51"
  },
  {
    "promedio": 8.82,
    "matricula": "202324848",
    "nombre": "BAUTISTA OLIVEROS DANA VALERIA",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 61052,
    "docente": "Victor Arenas Pérez",
    "horarioCita": "10:52"
  },
  {
    "promedio": 8.8,
    "matricula": "202344047",
    "nombre": "FLORES PEREZ JUAN PABLO",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 61052,
    "docente": "Victor Arenas Pérez",
    "horarioCita": "10:53"
  },
  {
    "promedio": 8.8,
    "matricula": "202361108",
    "nombre": "CORONA ROSADO EDGAR DAVID",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60871,
    "docente": "Jesus Torres Machorro",
    "horarioCita": "10:54"
  },
  {
    "promedio": 8.78,
    "matricula": "202323373",
    "nombre": "DAWE FLORES ARTURO ALEJANDRO",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60866,
    "docente": "Alejandra Marciano Mendoza",
    "horarioCita": "10:55"
  },
  {
    "promedio": 8.77,
    "matricula": "202324145",
    "nombre": "MARTINEZ MENDEZ ANTONIO",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60857,
    "docente": "Jesus Torres Machorro",
    "horarioCita": "10:56"
  },
  {
    "promedio": 8.76,
    "matricula": "202329038",
    "nombre": "BARONA PINEDA ANA KAREN",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60849,
    "docente": "Victor Hernández Pérez",
    "horarioCita": "10:57"
  },
  {
    "promedio": 8.75,
    "matricula": "202224715",
    "nombre": "BAEZ RODRIGUEZ JOSE EDUARDO",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60866,
    "docente": "Alejandra Marciano Mendoza",
    "horarioCita": "10:58"
  },
  {
    "promedio": 8.74,
    "matricula": "202342813",
    "nombre": "CASTILLO MUNOZ CARLOS GABRIEL",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60861,
    "docente": "Daniel Demetrio Tejeda Barrientos",
    "horarioCita": "10:59"
  },
  {
    "promedio": 8.73,
    "matricula": "202130622",
    "nombre": "MARTINEZ VENEGAS GIANCARLO",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60857,
    "docente": "Jesus Torres Machorro",
    "horarioCita": "11:00"
  },
  {
    "promedio": 8.7,
    "matricula": "202367292",
    "nombre": "SORIANO HERNANDEZ ASHLY",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60861,
    "docente": "Daniel Demetrio Tejeda Barrientos",
    "horarioCita": "11:01"
  },
  {
    "promedio": 8.67,
    "matricula": "202321196",
    "nombre": "AGUILAR RIVERA GERARDO ISAIAS",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60849,
    "docente": "Victor Hernández Pérez",
    "horarioCita": "11:02"
  },
  {
    "promedio": 8.67,
    "matricula": "202340582",
    "nombre": "NAVA AMADOR LEONARDO",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60861,
    "docente": "Daniel Demetrio Tejeda Barrientos",
    "horarioCita": "11:03"
  },
  {
    "promedio": 8.67,
    "matricula": "202359114",
    "nombre": "ZAMBRANO MENDOZA ADRIAN",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60861,
    "docente": "Daniel Demetrio Tejeda Barrientos",
    "horarioCita": "11:04"
  },
  {
    "promedio": 8.65,
    "matricula": "202226422",
    "nombre": "GARGANTUA CALIXTO GESSIE AMELLY",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60871,
    "docente": "Jesus Torres Machorro",
    "horarioCita": "11:05"
  },
  {
    "promedio": 8.64,
    "matricula": "202347775",
    "nombre": "MENDOZA BERMUDEZ DIEGO",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 61052,
    "docente": "Victor Arenas Pérez",
    "horarioCita": "11:06"
  },
  {
    "promedio": 8.62,
    "matricula": "202343294",
    "nombre": "CRUZ SANTIAGO AMEYALLI",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60866,
    "docente": "Alejandra Marciano Mendoza",
    "horarioCita": "11:07"
  },
  {
    "promedio": 8.58,
    "matricula": "202326769",
    "nombre": "GARCIA BETANCOURT IVAN YAEL",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60857,
    "docente": "Jesus Torres Machorro",
    "horarioCita": "11:08"
  },
  {
    "promedio": 8.56,
    "matricula": "202349267",
    "nombre": "OLIVARES LOPEZ EMANUEL",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60861,
    "docente": "Daniel Demetrio Tejeda Barrientos",
    "horarioCita": "11:09"
  },
  {
    "promedio": 8.56,
    "matricula": "202321095",
    "nombre": "ACEVEDO NERI ANGEL EDUARDO",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60871,
    "docente": "Jesus Torres Machorro",
    "horarioCita": "11:10"
  },
  {
    "promedio": 8.54,
    "matricula": "202371665",
    "nombre": "GALINDO RENDON URIEL",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60857,
    "docente": "Jesus Torres Machorro",
    "horarioCita": "11:11"
  },
  {
    "promedio": 8.54,
    "matricula": "202128284",
    "nombre": "HERNANDEZ OYARZABAL DANAE",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60857,
    "docente": "Jesus Torres Machorro",
    "horarioCita": "11:12"
  },
  {
    "promedio": 8.54,
    "matricula": "202362692",
    "nombre": "JUAREZ HERNANDEZ JESUS ALEJANDRO",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60857,
    "docente": "Jesus Torres Machorro",
    "horarioCita": "11:13"
  },
  {
    "promedio": 8.54,
    "matricula": "202374921",
    "nombre": "OCHOA MONTES FERNANDO NARCIZO",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60857,
    "docente": "Jesus Torres Machorro",
    "horarioCita": "11:14"
  },
  {
    "promedio": 8.54,
    "matricula": "202321259",
    "nombre": "ALBA MARTINEZ JOSE ALBERTO",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60871,
    "docente": "Jesus Torres Machorro",
    "horarioCita": "11:15"
  },
  {
    "promedio": 8.53,
    "matricula": "202041663",
    "nombre": "HUERTA ZEPEDA HIPOLITO MIGUEL",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60861,
    "docente": "Daniel Demetrio Tejeda Barrientos",
    "horarioCita": "11:16"
  },
  {
    "promedio": 8.53,
    "matricula": "202368609",
    "nombre": "VILLEGAS LOPEZ MIGUEL ANGEL",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60857,
    "docente": "Jesus Torres Machorro",
    "horarioCita": "11:17"
  },
  {
    "promedio": 8.52,
    "matricula": "202136884",
    "nombre": "LOPEZ FLORES IAN SEBASTIAN",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60875,
    "docente": "Nayelli Salamanca M",
    "horarioCita": "11:18"
  },
  {
    "promedio": 8.48,
    "matricula": "202341020",
    "nombre": "ORTEGA CARRILLO ARIEL",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60849,
    "docente": "Victor Hernández Pérez",
    "horarioCita": "11:19"
  },
  {
    "promedio": 8.48,
    "matricula": "202034031",
    "nombre": "DEL VALLE RODRIGUEZ TAIS",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60871,
    "docente": "Jesus Torres Machorro",
    "horarioCita": "11:20"
  },
  {
    "promedio": 8.45,
    "matricula": "202335734",
    "nombre": "GARCIA CASTILLO JESUS ABRAHAM",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60853,
    "docente": "Daniel Demetrio Tejeda Barrientos",
    "horarioCita": "11:21"
  },
  {
    "promedio": 8.45,
    "matricula": "202334654",
    "nombre": "CERON CAMACHO DULCE XIMENA",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60857,
    "docente": "Jesus Torres Machorro",
    "horarioCita": "11:22"
  },
  {
    "promedio": 8.45,
    "matricula": "202326058",
    "nombre": "EQUITERIO OSORIO PABLO JOAQUIN",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60857,
    "docente": "Jesus Torres Machorro",
    "horarioCita": "11:23"
  },
  {
    "promedio": 8.45,
    "matricula": "202345261",
    "nombre": "HERNANDEZ MARTINEZ JESUS DAVID",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60857,
    "docente": "Jesus Torres Machorro",
    "horarioCita": "11:24"
  },
  {
    "promedio": 8.43,
    "matricula": "202347545",
    "nombre": "MELCHOR HERNANDEZ RICARDO",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60849,
    "docente": "Victor Hernández Pérez",
    "horarioCita": "11:25"
  },
  {
    "promedio": 8.41,
    "matricula": "202332829",
    "nombre": "LEON MORENO ALAN",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60849,
    "docente": "Victor Hernández Pérez",
    "horarioCita": "11:26"
  },
  {
    "promedio": 8.4,
    "matricula": "202353090",
    "nombre": "RICHARDI NAJERA DIEGO DE JESUS",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60849,
    "docente": "Victor Hernández Pérez",
    "horarioCita": "11:27"
  },
  {
    "promedio": 8.38,
    "matricula": "202355406",
    "nombre": "SAAVEDRA ARELLANO AXEL",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 61052,
    "docente": "Victor Arenas Pérez",
    "horarioCita": "11:28"
  },
  {
    "promedio": 8.38,
    "matricula": "202274300",
    "nombre": "GUEVARA BERRA GUSTAVO EDUARDO",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60853,
    "docente": "Daniel Demetrio Tejeda Barrientos",
    "horarioCita": "11:29"
  },
  {
    "promedio": 8.38,
    "matricula": "202347698",
    "nombre": "MENDEZ MONTIEL ALEJANDRO",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60853,
    "docente": "Daniel Demetrio Tejeda Barrientos",
    "horarioCita": "11:30"
  },
  {
    "promedio": 8.37,
    "matricula": "202155925",
    "nombre": "RODRIGUEZ CASTILLO PEDRO PABLO",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60853,
    "docente": "Daniel Demetrio Tejeda Barrientos",
    "horarioCita": "11:31"
  },
  {
    "promedio": 8.34,
    "matricula": "201921422",
    "nombre": "RODRIGUEZ RODRIGUEZ EDSON GIOVANNI",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60875,
    "docente": "Nayelli Salamanca M",
    "horarioCita": "11:32"
  },
  {
    "promedio": 8.33,
    "matricula": "202117040",
    "nombre": "ANTONIO MENDEZ ADRIANA",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60875,
    "docente": "Nayelli Salamanca M",
    "horarioCita": "11:33"
  },
  {
    "promedio": 8.31,
    "matricula": "202339424",
    "nombre": "MENDEZ SCHIAVON SANTIAGO",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60875,
    "docente": "Nayelli Salamanca M",
    "horarioCita": "11:34"
  },
  {
    "promedio": 8.31,
    "matricula": "202339088",
    "nombre": "MATA TELLEZ GABRIEL SANTIAGO",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60853,
    "docente": "Daniel Demetrio Tejeda Barrientos",
    "horarioCita": "11:35"
  },
  {
    "promedio": 8.29,
    "matricula": "202215724",
    "nombre": "BORROMEO RODRIGUEZ OVIDIO",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60857,
    "docente": "Jesus Torres Machorro",
    "horarioCita": "11:36"
  },
  {
    "promedio": 8.22,
    "matricula": "202084391",
    "nombre": "HERRERA ESCUDERO LUIS EDUARDO",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60857,
    "docente": "Jesus Torres Machorro",
    "horarioCita": "11:37"
  },
  {
    "promedio": 8.21,
    "matricula": "202329011",
    "nombre": "BALDERAS CASTILLO MARISOL",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60842,
    "docente": "Nayelli Salamanca M",
    "horarioCita": "11:38"
  },
  {
    "promedio": 8.21,
    "matricula": "202361514",
    "nombre": "ESPINOSA ARENAS RODRIGO",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60861,
    "docente": "Daniel Demetrio Tejeda Barrientos",
    "horarioCita": "11:39"
  },
  {
    "promedio": 8.19,
    "matricula": "202333369",
    "nombre": "LUCAS FERNANDEZ ULISES",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 61052,
    "docente": "Victor Arenas Pérez",
    "horarioCita": "11:40"
  },
  {
    "promedio": 8.14,
    "matricula": "201819134",
    "nombre": "GARCIA NAZARIO JESUS ALEJANDRO",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60871,
    "docente": "Jesus Torres Machorro",
    "horarioCita": "11:41"
  },
  {
    "promedio": 8.11,
    "matricula": "202364395",
    "nombre": "ORTIZ ORTIZ ELIAS",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60861,
    "docente": "Daniel Demetrio Tejeda Barrientos",
    "horarioCita": "11:42"
  },
  {
    "promedio": 8.11,
    "matricula": "202274191",
    "nombre": "GONZALEZ LIMA JULIO",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60857,
    "docente": "Jesus Torres Machorro",
    "horarioCita": "11:43"
  },
  {
    "promedio": 8.1,
    "matricula": "202327810",
    "nombre": "HERNANDEZ DE JESUS GIOVANI",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 61052,
    "docente": "Victor Arenas Pérez",
    "horarioCita": "11:44"
  },
  {
    "promedio": 8.04,
    "matricula": "202069572",
    "nombre": "LEON BARRERA ELDRICK ELIHU",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60853,
    "docente": "Daniel Demetrio Tejeda Barrientos",
    "horarioCita": "11:45"
  },
  {
    "promedio": 8,
    "matricula": "202235092",
    "nombre": "OSORIO ROBLES EDSON",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60857,
    "docente": "Jesus Torres Machorro",
    "horarioCita": "11:46"
  },
  {
    "promedio": 7.94,
    "matricula": "202221539",
    "nombre": "CESPEDES SOTO KEREN DEL CARMEN",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60861,
    "docente": "Daniel Demetrio Tejeda Barrientos",
    "horarioCita": "11:47"
  },
  {
    "promedio": 7.94,
    "matricula": "202350635",
    "nombre": "PEREZ GOMEZ JOSE MARCOS",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60861,
    "docente": "Daniel Demetrio Tejeda Barrientos",
    "horarioCita": "11:48"
  },
  {
    "promedio": 7.94,
    "matricula": "202151636",
    "nombre": "PADILLA ALVAREZ MAXIMILIANO",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60857,
    "docente": "Jesus Torres Machorro",
    "horarioCita": "11:49"
  },
  {
    "promedio": 7.93,
    "matricula": "202372805",
    "nombre": "HUERTA PEREZ JOSE ALFREDO",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60875,
    "docente": "Nayelli Salamanca M",
    "horarioCita": "11:50"
  },
  {
    "promedio": 7.93,
    "matricula": "202371527",
    "nombre": "FLORES NAVA ANA ROSA",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60861,
    "docente": "Daniel Demetrio Tejeda Barrientos",
    "horarioCita": "11:51"
  },
  {
    "promedio": 7.91,
    "matricula": "202142906",
    "nombre": "ARAOZ GUZMAN CESAR",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60857,
    "docente": "Jesus Torres Machorro",
    "horarioCita": "11:52"
  },
  {
    "promedio": 7.88,
    "matricula": "202274671",
    "nombre": "HERNANDEZ VARELA PEDRO MANUEL",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60861,
    "docente": "Daniel Demetrio Tejeda Barrientos",
    "horarioCita": "11:53"
  },
  {
    "promedio": 7.85,
    "matricula": "202242751",
    "nombre": "MANJARREZ CASTILLO OMAR",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60866,
    "docente": "Alejandra Marciano Mendoza",
    "horarioCita": "11:54"
  },
  {
    "promedio": 7.84,
    "matricula": "202370300",
    "nombre": "CANO PAJARO JOSE MARIA",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60849,
    "docente": "Victor Hernández Pérez",
    "horarioCita": "11:55"
  },
  {
    "promedio": 7.82,
    "matricula": "202375903",
    "nombre": "QUIROS CANCINO LEONARDO",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60871,
    "docente": "Jesus Torres Machorro",
    "horarioCita": "11:56"
  },
  {
    "promedio": 7.81,
    "matricula": "202032911",
    "nombre": "CRUZ APARICIO SARAHI",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60871,
    "docente": "Jesus Torres Machorro",
    "horarioCita": "11:57"
  },
  {
    "promedio": 7.78,
    "matricula": "202346509",
    "nombre": "LUNA ORTEGA CARLOS",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60871,
    "docente": "Jesus Torres Machorro",
    "horarioCita": "11:58"
  },
  {
    "promedio": 7.77,
    "matricula": "202253363",
    "nombre": "SANCHEZ RUEDA SERGIO KEVIN",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60853,
    "docente": "Daniel Demetrio Tejeda Barrientos",
    "horarioCita": "11:59"
  },
  {
    "promedio": 7.74,
    "matricula": "202279368",
    "nombre": "VALADEZ ALVIZAR CHRISTIAN ADONAY",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60875,
    "docente": "Nayelli Salamanca M",
    "horarioCita": "12:00"
  },
  {
    "promedio": 7.73,
    "matricula": "202055182",
    "nombre": "ROMERO AGUILAR LUIS ANTONIO",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60871,
    "docente": "Jesus Torres Machorro",
    "horarioCita": "12:01"
  },
  {
    "promedio": 7.65,
    "matricula": "202323687",
    "nombre": "ESPINOSA JIMENEZ MARCO DAVID",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 61052,
    "docente": "Victor Arenas Pérez",
    "horarioCita": "12:02"
  },
  {
    "promedio": 7.64,
    "matricula": "202330029",
    "nombre": "ESPINOZA CASTILLO DIEGO ARMANDO",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60857,
    "docente": "Jesus Torres Machorro",
    "horarioCita": "12:03"
  },
  {
    "promedio": 7.61,
    "matricula": "202051822",
    "nombre": "PIMENTEL FERNANDEZ JOSE DE JESUS",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60875,
    "docente": "Nayelli Salamanca M",
    "horarioCita": "12:04"
  },
  {
    "promedio": 7.54,
    "matricula": "202336037",
    "nombre": "GOMEZ CRUZ ERICK JHONATAN",
    "plan": "LEF-2016",
    "periodo": "202625",
    "nrc": 60853,
    "docente": "Daniel Demetrio Tejeda Barrientos",
    "horarioCita": "12:05"
  }
];

// Mapeo de días
const DIAS_MAP = {
  'LM': 'Lunes y Miércoles',
  'AJ': 'Martes y Jueves',
  'LMM': 'Lunes, Martes y Miércoles',
  'V': 'Viernes'
};

// Función para obtener nombre de días
function getNombreDias(codigo) {
  return DIAS_MAP[codigo] || codigo;
}

// Función para formatear hora
function formatHora(hora) {
  if (!hora) return hora;
  const [inicio, fin] = hora.split('-');
  const formatOne = h => {
    const hh = h.substring(0, 2);
    const mm = h.substring(2, 4);
    const hour = parseInt(hh);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const h12 = hour > 12 ? hour - 12 : (hour === 0 ? 12 : hour);
    return `${h12}:${mm} ${ampm}`;
  };
  return `${formatOne(inicio)} - ${formatOne(fin)}`;
}

// Función para construir la contraseña del docente: primerApellido + 2026
function getPasswordDocente(docente) {
  return docente.primerApellido + '2026';
}

// Función para construir la contraseña del alumno: su matrícula
function getPasswordAlumno(alumno) {
  return alumno.matricula;
}

// Función para inicializar iniciales del nombre
function getInitials(nombre) {
  const parts = nombre.trim().split(' ');
  return parts.slice(0, 2).map(p => p[0]).join('').toUpperCase();
}

// Función para formatear nombre en Title Case
function toTitleCase(str) {
  const minors = ['de','la','del','los','las','y','a','en','el'];
  return str.toLowerCase().split(' ').map((word, i) => {
    if (i !== 0 && minors.includes(word)) return word;
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');
}

// Función para calcular el rango/badge del promedio
function getPromedioBadge(prom) {
  if (prom >= 9.5) return { label: 'Excelente', class: 'badge-excelente' };
  if (prom >= 9.0) return { label: 'Muy Bueno', class: 'badge-muy-bueno' };
  if (prom >= 8.0) return { label: 'Bueno', class: 'badge-bueno' };
  if (prom >= 7.0) return { label: 'Regular', class: 'badge-regular' };
  return { label: 'Suficiente', class: 'badge-suficiente' };
}

// =============================================
// CENTROS DE PRÁCTICAS CURRICULARES NMS
// 88 escuelas – Primavera 2026
// =============================================
const ESCUELAS = [
  {
    "id": 1,
    "nombre": "GILBERTO BOSQUES SALDIVAR",
    "cct": "21EBH0127E",
    "zona": "BGE011",
    "tipo": "B.G.E.",
    "direccion": "MATAMOROS 13",
    "localidad": "SANTA MARIA ACUEXCOMAC",
    "municipio": "SAN PEDRO CHOLULA",
    "turno": "MATUTINO"
  },
  {
    "id": 2,
    "nombre": "IGNACIO M. ALTAMIRANO",
    "cct": "21EBH0156Z",
    "zona": "BGE011",
    "tipo": "B.G.E.",
    "direccion": "CHOLULTECAS NORTE NO. 9",
    "localidad": "SANTIAGO MOMOXPAN",
    "municipio": "SAN PEDRO CHOLULA",
    "turno": "MATUTINO"
  },
  {
    "id": 3,
    "nombre": "GUILLERMO GONZALEZ CAMARENA",
    "cct": "21EBH0314Z",
    "zona": "BGE011",
    "tipo": "B.G.E.",
    "direccion": "CALLE FRANCISCO JAVIER MINA #100",
    "localidad": "SAN GREGORIO ATZOMPA",
    "municipio": "SAN GREGORIO ATZOMPA",
    "turno": "MATUTINO"
  },
  {
    "id": 4,
    "nombre": "GILBERTO BOSQUES SALDIVAR",
    "cct": "21EBH0539F",
    "zona": "BGE011",
    "tipo": "B.G.E.",
    "direccion": "ITURBIDE NO. 64",
    "localidad": "SANTA ISABEL CHOLULA",
    "municipio": "SANTA ISABEL CHOLULA",
    "turno": "MATUTINO"
  },
  {
    "id": 5,
    "nombre": "NATALIA SERDAN ALATRISTE",
    "cct": "21EBH0726Z",
    "zona": "BGE011",
    "tipo": "B.G.E.",
    "direccion": "CHOLULTECAS NO 9",
    "localidad": "SANTIAGO MOMOXPAN",
    "municipio": "SAN PEDRO CHOLULA",
    "turno": "VESPERTINO"
  },
  {
    "id": 6,
    "nombre": "VASCO DE QUIROGA",
    "cct": "21EBH0790A",
    "zona": "BGE011",
    "tipo": "B.G.E.",
    "direccion": "VENUSTIANO CARRANZA N° 21",
    "localidad": "SAN MARTIN TLAMAPA",
    "municipio": "SANTA ISABEL CHOLULA",
    "turno": "MATUTINO"
  },
  {
    "id": 7,
    "nombre": "JESUS ROMERO FLORES",
    "cct": "21EBH0128D",
    "zona": "BGE012",
    "tipo": "B.G.E.",
    "direccion": "15 SUR S/N",
    "localidad": "SAN BUENAVENTURA",
    "municipio": "NEALTICAN",
    "turno": "MATUTINO"
  },
  {
    "id": 8,
    "nombre": "BACHILLERATO GENERAL OFICIAL VICENTE SUAREZ",
    "cct": "21EBH0243V",
    "zona": "BGE012",
    "tipo": "B.G.E.",
    "direccion": "AV. INDEPENDENCIA SUR S/N, BARRIO SAN ANTONIO",
    "localidad": "SANTA MARIA CORONANGO",
    "municipio": "CORONANGO",
    "turno": "MATUTINO"
  },
  {
    "id": 9,
    "nombre": "FERNANDO MONTES DE OCA",
    "cct": "21EBH0245T",
    "zona": "BGE012",
    "tipo": "B.G.E.",
    "direccion": "CALLE UNIDAD DEPORTIVA S/N",
    "localidad": "TLALTENANGO",
    "municipio": "TLALTENANGO",
    "turno": "MATUTINO"
  },
  {
    "id": 10,
    "nombre": "EMILIANO ZAPATA",
    "cct": "21EBH0392C",
    "zona": "BGE012",
    "tipo": "B.G.E.",
    "direccion": "C. DOMINGO ARENAS NO. 14",
    "localidad": "DOMINGO ARENAS",
    "municipio": "DOMINGO ARENAS",
    "turno": "MATUTINO"
  },
  {
    "id": 11,
    "nombre": "LAZARO CARDENAS",
    "cct": "21EBH0512Z",
    "zona": "BGE012",
    "tipo": "B.G.E.",
    "direccion": "PRIVADA DIAZ ORDAZ NO.6",
    "localidad": "SAN LORENZO ALMECATLA",
    "municipio": "CUAUTLANCINGO",
    "turno": "MATUTINO"
  },
  {
    "id": 12,
    "nombre": "FORJADORES DE PUEBLA",
    "cct": "21EBH0698U",
    "zona": "BGE012",
    "tipo": "B.G.E.",
    "direccion": "C. CAÑADA S/N LOMAS DE SAN JUAN C.P. 72700",
    "localidad": "CUAUTLANCINGO",
    "municipio": "CUAUTLANCINGO",
    "turno": "MATUTINO"
  },
  {
    "id": 13,
    "nombre": "BACH. GRAL. OFL. EMILIANO ZAPATA",
    "cct": "21EBH0749K",
    "zona": "BGE012",
    "tipo": "B.G.E.",
    "direccion": "AV. INDEPENDENCIA S/N",
    "localidad": "SAN MATEO OZOLCO",
    "municipio": "CALPAN",
    "turno": "MATUTINO"
  },
  {
    "id": 14,
    "nombre": "5 DE MAYO",
    "cct": "21EBH0095C",
    "zona": "BGE013",
    "tipo": "B.G.E.",
    "direccion": "VICENTE GUERRERO NO. 20 COL. LOS OCOTES",
    "localidad": "SAN LORENZO ALMECATLA",
    "municipio": "CUAUTLANCINGO",
    "turno": "MATUTINO"
  },
  {
    "id": 15,
    "nombre": "JOSEFA ORTIZ DE DOMINGUEZ",
    "cct": "21EBH0114A",
    "zona": "BGE013",
    "tipo": "B.G.E.",
    "direccion": "PRIVADA URANGA NÚMERO 4",
    "localidad": "SAN JUAN CUAUTLANCINGO",
    "municipio": "CUAUTLANCINGO",
    "turno": "MATUTINO"
  },
  {
    "id": 16,
    "nombre": "GUILLERMO HARO",
    "cct": "21EBH0434L",
    "zona": "BGE013",
    "tipo": "B.G.E.",
    "direccion": "REFORMA SUR 14",
    "localidad": "SANTA MARIA TONANTZINTLA",
    "municipio": "SAN ANDRÉS CHOLULA",
    "turno": "MATUTINO"
  },
  {
    "id": 17,
    "nombre": "MARIO MOLINA",
    "cct": "21EBH0720F",
    "zona": "BGE013",
    "tipo": "B.G.E.",
    "direccion": "CALLE DE LA CRUZADA S/N",
    "localidad": "SANTA MARIA NEPOPUALCO",
    "municipio": "HUEJOTZINGO",
    "turno": "MATUTINO"
  },
  {
    "id": 18,
    "nombre": "CARLOS CAMACHO ESPIRITU VESPERTINO",
    "cct": "21EBH0026G",
    "zona": "BGE013",
    "tipo": "B.G.E.",
    "direccion": "AV. CIRCUITO DE LAS FLORES SUR S/N MATEO DE REGIL",
    "localidad": "PUEBLA",
    "municipio": "PUEBLA",
    "turno": "VESPERTINO"
  },
  {
    "id": 19,
    "nombre": "JOSEFA ORTIZ DE DOMINGUEZ VESPERTINO",
    "cct": "21EBH0027F",
    "zona": "BGE013",
    "tipo": "B.G.E.",
    "direccion": "PRIV,URANGA. EL CALVARIO",
    "localidad": "CUAUTLANCINGO",
    "municipio": "",
    "turno": "VESPERTINO"
  },
  {
    "id": 20,
    "nombre": "BACHILLERATO GENERAL OFICIAL \"QUETZALCOATL\"",
    "cct": "21EBH0015A",
    "zona": "BGE013",
    "tipo": "B.G.E.",
    "direccion": "PROLONGACION DE LA 14 SUR S/N INFONAVIT SAN JORGE",
    "localidad": "ARTICULO PRIMERO CONSTITUCIONAL",
    "municipio": "PUEBLA",
    "turno": "VESPERTINO"
  },
  {
    "id": 21,
    "nombre": "QUETZALCOATL",
    "cct": "21EBH0494Z",
    "zona": "BGE013",
    "tipo": "BACHILLERATO DIGITAL",
    "direccion": "PROLONGACIÓN 14 SUR S/N, INF. SAN JORGE",
    "localidad": "HEROICA PUEBLA DE ZARAGOZA",
    "municipio": "PUEBLA",
    "turno": "MATUTINO"
  },
  {
    "id": 22,
    "nombre": "GUILLERMO HARO VESPERTINO",
    "cct": "21EBH0036N",
    "zona": "BGE013",
    "tipo": "B.G.E.",
    "direccion": "AV.REFORMA SUR 32 SANN ISIDRO BUENOS AIRES",
    "localidad": "SANTA MARIA TONANZINTLA",
    "municipio": "SAN ANDRES CHOLULA",
    "turno": "MATUTINO"
  },
  {
    "id": 23,
    "nombre": "JUAN DE PALAFOX Y MENDOZA",
    "cct": "21EBH0210D",
    "zona": "BGE014",
    "tipo": "B.G.E.",
    "direccion": "AVENIDA EMILIANO ZAPATA S/N COLONIA LOMAS DE SAN MIGUEL",
    "localidad": "PUEBLA",
    "municipio": "PUEBLA",
    "turno": "MATUTINO"
  },
  {
    "id": 24,
    "nombre": "GABINO BARREDA",
    "cct": "21EBH0648M",
    "zona": "BGE014",
    "tipo": "B.G.E.",
    "direccion": "CALLE 3 SUR NÚMERO 904, COLONIA CENTRO",
    "localidad": "HEROICA PUEBLA DE ZARAGOZA",
    "municipio": "PUEBLA",
    "turno": "MATUTINO"
  },
  {
    "id": 25,
    "nombre": "BENEMERITO INSTITUTO NORMAL DEL ESTADO GENERAL JUAN CRISOSTOMO BONILLA",
    "cct": "21EBH0525C",
    "zona": "BGE016",
    "tipo": "B.G.E.",
    "direccion": "BOULEVARD HERMANOS SERDÁN 203, COLONIA AQUILES SERDÁN",
    "localidad": "PUEBLA",
    "municipio": "PUEBLA",
    "turno": "MATUTINO"
  },
  {
    "id": 26,
    "nombre": "HERMANOS SERDAN",
    "cct": "21EBH0058Z",
    "zona": "BGE016",
    "tipo": "B.G.E.",
    "direccion": "AV. 11 PONIENTE #1302",
    "localidad": "HEROICA PUEBLA DE ZARAGOZA",
    "municipio": "PUEBLA",
    "turno": "VESPERTINO"
  },
  {
    "id": 27,
    "nombre": "MAXIMO SERDAN",
    "cct": "21EBH0056A",
    "zona": "BGE016",
    "tipo": "B.G.E.",
    "direccion": "AV. REFORMA NO. 722 COL. CENTRO",
    "localidad": "PUEBLA",
    "municipio": "PUEBLA",
    "turno": "VESPERTINO"
  },
  {
    "id": 28,
    "nombre": "BACHILLERATO GENERAL OFICIAL VESPERTINO FEDERICA M. BONILLA",
    "cct": "21EBH0080A",
    "zona": "BGE017",
    "tipo": "B.G.E.",
    "direccion": "18 NORTE N°601 LOS REMEDIOS",
    "localidad": "PUEBLA",
    "municipio": "PUEBLA",
    "turno": "VESPERTINO"
  },
  {
    "id": 29,
    "nombre": "JOSE MARIA LA FRAGUA",
    "cct": "21EBH0097A",
    "zona": "BGE017",
    "tipo": "VESPERTINO",
    "direccion": "2 SUR 506 COL. CENTRO CP 72000",
    "localidad": "PUEBLA",
    "municipio": "PUEBLA",
    "turno": "VESPERTINO"
  },
  {
    "id": 30,
    "nombre": "SOR JUANA INES DE LA CRUZ",
    "cct": "21EBH0098Z",
    "zona": "BGE017",
    "tipo": "B.G.E.",
    "direccion": "PRIVADA 5 NORTE 9005. COL. INFONAVIT SAN PEDRO",
    "localidad": "HEROICA PUEBLA DE ZARAGOZA",
    "municipio": "PUEBLA",
    "turno": "MATUTINO"
  },
  {
    "id": 31,
    "nombre": "JOSE MARIA LAFRAGUA",
    "cct": "21EBH0099Z",
    "zona": "BGE017",
    "tipo": "B.G.E.",
    "direccion": "33 PONIENTE 2117 COL. BENITO JUÁREZ",
    "localidad": "HEROICA PUEBLA DE ZARAGOZA",
    "municipio": "PUEBLA",
    "turno": "MATUTINO"
  },
  {
    "id": 32,
    "nombre": "PACHECO Y HENNING",
    "cct": "21EBH0121K",
    "zona": "BGE091",
    "tipo": "B.G.E.",
    "direccion": "5 NORTE 9005 COLONIA VILLA FRONTERA",
    "localidad": "HEROICA PUEBLA DE ZARAGOZA",
    "municipio": "PUEBLA",
    "turno": "VESPERTINO"
  },
  {
    "id": 33,
    "nombre": "BENJAMIN KURIAN",
    "cct": "21EBH0346R",
    "zona": "BGE091",
    "tipo": "B.G.E.",
    "direccion": "CALLE NARANJO NO. EXT. 10 COL. JESUS GONZALEZ ORTEGA, C.P. 72040",
    "localidad": "HEROICA PUEBLA DE ZARAGOZA",
    "municipio": "PUEBLA",
    "turno": "VESPERTINO"
  },
  {
    "id": 34,
    "nombre": "JOSE MARIA LA FRAGUA",
    "cct": "21EBH0394A",
    "zona": "BGE017",
    "tipo": "B.G.E.",
    "direccion": "33 PONIENTE 2117 COL. BENITO JAUREZ",
    "localidad": "PUEBLA",
    "municipio": "PUEBLA",
    "turno": "VESPERTINO"
  },
  {
    "id": 35,
    "nombre": "FEDERICA M. BONILLA",
    "cct": "21EBH0616U",
    "zona": "BGE017",
    "tipo": "B.G.E.",
    "direccion": "18 NORTE NO. 601 COL. LOS REMEDIOS",
    "localidad": "HEROICA PUEBLA DE ZARAGOZA",
    "municipio": "PUEBLA",
    "turno": "MATUTINO"
  },
  {
    "id": 36,
    "nombre": "JOSE LUIS RODRIGUEZ ALCONEDO",
    "cct": "21EBH0852X",
    "zona": "BGE017",
    "tipo": "B.G.E.",
    "direccion": "CALLE GIRASOL #5 COL. JARDINES DE AMALUCAN",
    "localidad": "PUEBLA",
    "municipio": "PUEBLA",
    "turno": "MATUTINO"
  },
  {
    "id": 37,
    "nombre": "ELENA GARRO",
    "cct": "21EBH0729X",
    "zona": "BGE019",
    "tipo": "B.G.E.",
    "direccion": "CARRETERA A SAN PEDRO BENITO JUAREZ S/N LA MAGDALENA AXOCOPAN, ATLIXCO,PUE.",
    "localidad": "AXOCOPAN",
    "municipio": "ATLIXCO",
    "turno": "MATUTINO"
  },
  {
    "id": 38,
    "nombre": "AQUILES SERDAN",
    "cct": "21EBH0889K",
    "zona": "BGE019",
    "tipo": "B.G.E.",
    "direccion": "AV. INDEPENDENCIA NUM 12",
    "localidad": "ATLIXCO",
    "municipio": "ATLIXCO",
    "turno": "MATUTINO"
  },
  {
    "id": 39,
    "nombre": "JOSE VASCONCELOS",
    "cct": "21EBH0178L",
    "zona": "BGE023",
    "tipo": "B.G.E.",
    "direccion": "AVENIDA 16 DE SEPTIEMBRE",
    "localidad": "PUEBLA",
    "municipio": "GENERAL FELIPE ÁNGELES",
    "turno": "MATUTINO"
  },
  {
    "id": 40,
    "nombre": "VICENTE LOMBARDO TOLEDADO",
    "cct": "21EBH0215Z",
    "zona": "BGE029",
    "tipo": "B.G.E.",
    "direccion": "CERRADA CEIBA S/N U. HABITACIONAL AMALUCAN",
    "localidad": "HEROICA PUEBLA DE ZARAGOZA",
    "municipio": "PUEBLA",
    "turno": "MATUTINO"
  },
  {
    "id": 41,
    "nombre": "JEAN PIAGET",
    "cct": "21EBH0263I",
    "zona": "BGE029",
    "tipo": "B.G.E.",
    "direccion": "ALEJANDRINA S/N COLONIA EL PEDREGAL",
    "localidad": "PUEBLA",
    "municipio": "PUEBLA",
    "turno": "MATUTINO"
  },
  {
    "id": 42,
    "nombre": "PROFESOR  ENRIQUE MARTINEZ MARQUEZ",
    "cct": "21EBH0104U",
    "zona": "BGE030",
    "tipo": "B.G.E.",
    "direccion": "AV. GIRASOLES NO. 1, COL. REAL CAMPESTRE, C.P. 72310",
    "localidad": "PUEBLA",
    "municipio": "PUEBLA",
    "turno": "MATUTINO"
  },
  {
    "id": 43,
    "nombre": "EMPERADOR CUAUHTEMOC",
    "cct": "21EBH0110E",
    "zona": "BGE030",
    "tipo": "B.G.E.",
    "direccion": "AV. MEXICO Y PRIVADA MORELOS S/N",
    "localidad": "SAN SEBASTIAN DE APARICIO",
    "municipio": "PUEBLA",
    "turno": "MATUTINO"
  },
  {
    "id": 44,
    "nombre": "BACHILLERATO INSURGENTES",
    "cct": "21EBH0226E",
    "zona": "BGE030",
    "tipo": "B.G.E.",
    "direccion": "CALLE ALTOS DE JALISCO S/N ROSAS DEL TEPEYAC",
    "localidad": "SAN PABLO XOCHIMEHUACAN",
    "municipio": "PUEBLA",
    "turno": "MATUTINO"
  },
  {
    "id": 45,
    "nombre": "RAQUEL FLORES GONZALEZ",
    "cct": "21EBH0247R",
    "zona": "BGE030",
    "tipo": "B.G.E.",
    "direccion": "CALLE 4 NORTE 602 JUNTA AUXILIAR LA LIBERTAD",
    "localidad": "PUEBLA",
    "municipio": "PUEBLA",
    "turno": "MATUTINO"
  },
  {
    "id": 46,
    "nombre": "RAFAEL RAMIREZ",
    "cct": "21EBH0728Y",
    "zona": "BGE030",
    "tipo": "B.G.E.",
    "direccion": "RETORNO RAFAEL MORENO S/N, COL. LA CIENEGA",
    "localidad": "PUEBLA",
    "municipio": "PUEBLA",
    "turno": "MATUTINO"
  },
  {
    "id": 47,
    "nombre": "DAVID ALFARO SIQUEIROS",
    "cct": "21EBH0450C",
    "zona": "BGE031",
    "tipo": "B.G.E.",
    "direccion": "CALZADA CENTRAL ORIENTE #15 UNIDAD HABITACIONAL SAN APARICIO",
    "localidad": "PUEBLA",
    "municipio": "PUEBLA",
    "turno": "MATUTINO"
  },
  {
    "id": 48,
    "nombre": "GREGORIO DE GANTE",
    "cct": "21EBH0592A",
    "zona": "BGE031",
    "tipo": "B.G.E.",
    "direccion": "PRIVADA 143 B PONIENTE S/N COLONIA SAN ISIDRO CASTILLOTLA",
    "localidad": "PUEBLA",
    "municipio": "PUEBLA",
    "turno": "MATUTINO"
  },
  {
    "id": 49,
    "nombre": "YOLOT SI",
    "cct": "21EBH0651Z",
    "zona": "BGE031",
    "tipo": "B.G.E.",
    "direccion": "CALLE ALLENDE #28",
    "localidad": "SAN CRISTOBAL TEPONTLA",
    "municipio": "PUEBLA",
    "turno": "VESPERTINO"
  },
  {
    "id": 50,
    "nombre": "OCTAVIO PAZ",
    "cct": "21EBH0246S",
    "zona": "BGE032",
    "tipo": "B.G.E.",
    "direccion": "LAZARO CARDENAS S/N",
    "localidad": "SAN ANDRES AZUMIATLA",
    "municipio": "PUEBLA",
    "turno": "MATUTINO"
  },
  {
    "id": 51,
    "nombre": "PABLO GONZALEZ RIVAS",
    "cct": "21EBH0326D",
    "zona": "BGE032",
    "tipo": "B.G.E.",
    "direccion": "AVENIDA ADOLFO LÓPEZ MATEOS SIN NÚMERO, ESQUINA VICENTE GUERRERO. SAN BALTAZAR TETELA, PUEBLA",
    "localidad": "PUEBLA",
    "municipio": "PUEBLA",
    "turno": "MATUTINO"
  },
  {
    "id": 52,
    "nombre": "LAZARO CARDENAS DEL RIO",
    "cct": "21EBH0408N",
    "zona": "BGE032",
    "tipo": "B.G.E.",
    "direccion": "CALLE 8 SUR SIN NÚMERO",
    "localidad": "SAN PEDRO ZACACHIMALPA",
    "municipio": "PUEBLA",
    "turno": "MATUTINO"
  },
  {
    "id": 53,
    "nombre": "BACHILLERATO HERMANOS SERDAN",
    "cct": "21EBH0051F",
    "zona": "BGE034",
    "tipo": "B.G.E.",
    "direccion": "11 PONIENTE 1302",
    "localidad": "HEROICA PUEBLA DE ZARAGOZA",
    "municipio": "PUEBLA",
    "turno": "MATUTINO"
  },
  {
    "id": 54,
    "nombre": "UNIDAD EDUCATIVA OCTAVIO PAZ",
    "cct": "21EBH0407O",
    "zona": "BGE034",
    "tipo": "B.G.E.",
    "direccion": "BOULVARD PUEBLA 26 BOSQUES DE SAN SEBASTIAN",
    "localidad": "PUEBLA.",
    "municipio": "PUEBLA",
    "turno": "MATUTINO"
  },
  {
    "id": 55,
    "nombre": "DIEGO RIVERA",
    "cct": "21EBH0943O",
    "zona": "BGE034",
    "tipo": "B.G.E.",
    "direccion": "PRIVADA MONTE  DE LOS OLIVOS 907",
    "localidad": "SAN PEDRO CHOLULA",
    "municipio": "SAN PEDRO CHOLULA",
    "turno": "MATUTINO"
  },
  {
    "id": 56,
    "nombre": "ELENA GARRO",
    "cct": "21EBH0754W",
    "zona": "BGE034",
    "tipo": "B.G.E.",
    "direccion": "CALLE VALLE DE TOLUCA 13508 FRACC. VILLA LOS ENCINOS COLONIA SNTE",
    "localidad": "HEROICA PUEBLA DE ZARAGOZA",
    "municipio": "PUEBLA",
    "turno": "MATUTINO"
  },
  {
    "id": 57,
    "nombre": "JAIME SABINES",
    "cct": "21EBH1264O",
    "zona": "BGE034",
    "tipo": "B.G.E.",
    "direccion": "OAXTEPEC S/N PLAYAS DEL SUR",
    "localidad": "PLAYAS DEL SUR",
    "municipio": "PUEBLA",
    "turno": "VESPERTINO"
  },
  {
    "id": 58,
    "nombre": "GABINO BARREDA",
    "cct": "21EBH0716T",
    "zona": "BGE046",
    "tipo": "B.G.E.",
    "direccion": "AV. NIÑO ARTILLERO S/N, ESQUINA CALLE MORELOS",
    "localidad": "HEROICA PUEBLA DE ZARAGOZA",
    "municipio": "PUEBLA",
    "turno": "MATUTINO"
  },
  {
    "id": 59,
    "nombre": "BACHILLERATO GENERAL OFICIAL PROFESOR  CANDIDO REYES ALEGRE",
    "cct": "21EBH0078M",
    "zona": "BGE058",
    "tipo": "B.G.E.",
    "direccion": "CEDRO Y TETZMULLI S/N",
    "localidad": "SAN LUCAS ATOYATENCO",
    "municipio": "SAN MARTÍN TEXMELUCAN",
    "turno": "MATUTINO"
  },
  {
    "id": 60,
    "nombre": "JOSE ALBERTO ZEPEDA SERRANO",
    "cct": "21EBH0513Y",
    "zona": "BGE058",
    "tipo": "B.G.E.",
    "direccion": "CEDRO Y TETZMULLI S/N",
    "localidad": "SAN LUCAS ATOYATENCO",
    "municipio": "SAN MARTÍN TEXMELUCAN",
    "turno": "VESPERTINO"
  },
  {
    "id": 61,
    "nombre": "RODRIGO MONTES DE OCA",
    "cct": "21EBH0154B",
    "zona": "BGE058",
    "tipo": "B.G.E.",
    "direccion": "PROL.ZARAGOZA NTE. S/N CENTRO",
    "localidad": "SAN MARTIN TEXMELUCAN",
    "municipio": "SAN MARTÍN TEXMELUCAN",
    "turno": "MATUTINO"
  },
  {
    "id": 62,
    "nombre": "AQUILES SERDAN",
    "cct": "21ECT0004P",
    "zona": "BGE059",
    "tipo": "B.G.E.",
    "direccion": "CARRETERA PUEBLA CANOA  KM. 7.5",
    "localidad": "HEROICA PUEBLA DE ZARAGOZA",
    "municipio": "PUEBLA",
    "turno": "No especificado"
  },
  {
    "id": 63,
    "nombre": "BENITO JUAREZ GARCIA",
    "cct": "21EBH0220K",
    "zona": "BGE059",
    "tipo": "B.G.E.",
    "direccion": "AV. PABLO NERUDA S/N YPROLONGACION DE LA 3 SUR",
    "localidad": "HERÓICA PUEBLA DE ZARAGOZA",
    "municipio": "PUEBLA",
    "turno": "MATUTINO"
  },
  {
    "id": 64,
    "nombre": "GREGORIO DE GANTE",
    "cct": "21EBH0008R",
    "zona": "BGE059",
    "tipo": "B.G.E.",
    "direccion": "CAMINO ANTIGUO A MANZANILLA S/N COL. BOSQUES DE MANZANILLA",
    "localidad": "PUEBLA",
    "municipio": "PUEBLA",
    "turno": "MATUTINO"
  },
  {
    "id": 65,
    "nombre": "JUAN DE DIOS PEZA",
    "cct": "21EBH0835G",
    "zona": "BGE059",
    "tipo": "B.G.E.",
    "direccion": "C. NUEVO LEON S/N COL. 15 DE SEPTIEMBRE",
    "localidad": "PUEBLA",
    "municipio": "PUEBLA",
    "turno": "MATUTINO"
  },
  {
    "id": 66,
    "nombre": "MANUEL M. FLORES",
    "cct": "21EBH1258D",
    "zona": "BGE059",
    "tipo": "B.G.E.",
    "direccion": "C. CAMINO VIEJO A BALCONES DEL SUR S/N",
    "localidad": "HEROICA PUEBLA DE ZARAGOZA",
    "municipio": "PUEBLA",
    "turno": "MATUTINO"
  },
  {
    "id": 67,
    "nombre": "RAFAEL RAMIREZ CASTANEDA",
    "cct": "21EBH0537H",
    "zona": "BGE059",
    "tipo": "B.G.E.",
    "direccion": "PROLONGACION DE LA11SUR S/N COL. UNION ANTORCHISTA",
    "localidad": "HEROICA PUEBLA DE ZARAGOZA",
    "municipio": "PUEBLA",
    "turno": "MATUTINO"
  },
  {
    "id": 68,
    "nombre": "BACHILLERATO GENERAL OFICIAL IGNACIO ZARAGOZA",
    "cct": "21EBH0073R",
    "zona": "BGE067",
    "tipo": "B.G.E.",
    "direccion": "RÚA DE DIAMANTE 3102 FRACC. LA JOYA",
    "localidad": "PUEBLA",
    "municipio": "PUEBLA",
    "turno": "MATUTINO"
  },
  {
    "id": 69,
    "nombre": "GILBERTO BOSQUES SALDIVAR",
    "cct": "21EBH0890Z",
    "zona": "BGE067",
    "tipo": "B.G.E.",
    "direccion": "JUSTICIA SOCIAL Y PLURALISMO IDEOLÓGICO S/N UNIDAD HABITACIONAL SOLIDARIDAD C.P. 72016",
    "localidad": "PUEBLA",
    "municipio": "PUEBLA",
    "turno": "MATUTINO"
  },
  {
    "id": 70,
    "nombre": "BACHILLERATO GENERAL OFICIAL CARLOS MONSIVAIS",
    "cct": "21EBH0887M",
    "zona": "BGE067",
    "tipo": "B.G.E.",
    "direccion": "CALLE PRISCOS ESQ. BULEVARD CEDROS S/N",
    "localidad": "PUEBLA",
    "municipio": "PUEBLA",
    "turno": "MATUTINO"
  },
  {
    "id": 71,
    "nombre": "LUIS DONALDO COLOSIO MURRIETA",
    "cct": "21EBH0264H",
    "zona": "BGE067",
    "tipo": "B.G.E.",
    "direccion": "CAMINO REAL A SAN MIGUEL ESPEJO S/N COL. CAMPESTRE SAN ISIDRO",
    "localidad": "SANTA MARIA XONACATEPEC",
    "municipio": "PUEBLA",
    "turno": "MATUTINO"
  },
  {
    "id": 72,
    "nombre": "NICOLAS REYES ALEGRE",
    "cct": "21EBH0062L",
    "zona": "BGE071",
    "tipo": "B.G.E.",
    "direccion": "CALLE COATEPEC S/N",
    "localidad": "SAN MATIAS COCOYOTLA",
    "municipio": "SAN PEDRO CHOLULA",
    "turno": "MATUTINO"
  },
  {
    "id": 73,
    "nombre": "TEHUILOYOCAN",
    "cct": "21EBH0584S",
    "zona": "BGE071",
    "tipo": "B.G.E.",
    "direccion": "CALLE 5 DE MAYO 2047",
    "localidad": "SAN LUIS TEHUILOYOCAN",
    "municipio": "SAN ANDRÉS CHOLULA",
    "turno": "MATUTINO"
  },
  {
    "id": 74,
    "nombre": "CADETE VICENTE SUAREZ",
    "cct": "21EBH0077N",
    "zona": "BGE071",
    "tipo": "B.G.E.",
    "direccion": "AV. 27 PONIENTE # 3113 COL. SANTA CRUZ LOS ÁNGELES",
    "localidad": "HEROICA PUEBLA DE ZARAGOZA",
    "municipio": "PUEBLA",
    "turno": "VESPERTINO"
  },
  {
    "id": 75,
    "nombre": "BACHILLERATO TECNICO EN SEGURIDAD CIUDADANA",
    "cct": "21ECT0019R",
    "zona": "BGE072",
    "tipo": "B.G.E.",
    "direccion": "KILOMETRO 6.5 CAMINO VECINAL A SANTA CRUZ ALPUYECA S/N",
    "localidad": "AMOZOC DE MOTA",
    "municipio": "AMOZOC",
    "turno": "MATUTINO"
  },
  {
    "id": 76,
    "nombre": "UNIDAD DE APOYO A LA EDUCACIÓN MEDIA SUPERIOR EN LOS HOSPITALES",
    "cct": "21FHM0001C ó 21FHM0001C",
    "zona": "BGE072",
    "tipo": "B.G.E.",
    "direccion": "BOULEVARD DEL NIÑO POBLANO 5307 RESERVA TERRITORIAL VIA ATLIXCAYOTL",
    "localidad": "HEROICA PUEBLA DE ZARAGOZA",
    "municipio": "PUEBLA",
    "turno": "MATUTINO"
  },
  {
    "id": 77,
    "nombre": "BACHILLERATO CASA DEL ADOLESCENTE",
    "cct": "21EBH0025H",
    "zona": "BGE072",
    "tipo": "B.G.E.",
    "direccion": "TLAXCALANCINGO",
    "localidad": "SAN ANDRÉS CHOLULA",
    "municipio": "PUEBLA",
    "turno": "MATUTINO"
  },
  {
    "id": 78,
    "nombre": "CARMEN SERDAN",
    "cct": "21EBH0023J",
    "zona": "BGE079",
    "tipo": "B.G.E.",
    "direccion": "BOULEVARD INDEPENDENCIA NO. 2 INFONAVIT SAN MIGUEL MAYORAZGO",
    "localidad": "PUEBLA",
    "municipio": "PUEBLA",
    "turno": "MATUTINO"
  },
  {
    "id": 79,
    "nombre": "BACHILLERATO GENERAL ESTATAL PLANTEL AZTECA PUEBLA",
    "cct": "21EBH0021L",
    "zona": "BGE079",
    "tipo": "B.G.E.",
    "direccion": "CALLE 5 PONIENTE 909",
    "localidad": "PUEBLA",
    "municipio": "PUEBLA",
    "turno": "MATUTINO"
  },
  {
    "id": 80,
    "nombre": "LUIS BERMUDEZ GALICIA",
    "cct": "21EBH0515W",
    "zona": "BGE0092",
    "tipo": "B.G.E.",
    "direccion": "CALLE CICLISMO Y REGATA, S/N, UNIDAD MAGISTERIAL MÉXICO 68",
    "localidad": "PUEBLA",
    "municipio": "PUEBLA",
    "turno": "MATUTINO"
  },
  {
    "id": 81,
    "nombre": "BACHILLERATO ANEXO A LA NORMAL SUPERIOR DEL EDO",
    "cct": "21EBH0082Z",
    "zona": "BGE0093",
    "tipo": "B.G.E.",
    "direccion": "11 SUR 1102",
    "localidad": "PUEBLA",
    "municipio": "PUEBLA",
    "turno": "VESPERTINO"
  },
  {
    "id": 82,
    "nombre": "CADETE JUAN ESCUTIA",
    "cct": "21EBH0124H",
    "zona": "BGE0093",
    "tipo": "B.G.E.",
    "direccion": "86 PONIENTE NO. 112, COL. REVOLUCIÓN MEXICANA",
    "localidad": "HERÓICA PUEBLA DE ZARAGOZA",
    "municipio": "PUEBLA",
    "turno": "MATUTINO"
  },
  {
    "id": 83,
    "nombre": "CARLOS CAMACHO ESPIRITU",
    "cct": "21EBH0516V",
    "zona": "BGE0093",
    "tipo": "B.G.E.",
    "direccion": "AV. CTO. DE LAS FLORES SUR S/N U.HAB. DR. MATEO DE REGIL RODRIGUEZ",
    "localidad": "PUEBLA",
    "municipio": "PUEBLA",
    "turno": "MATUTINO"
  },
  {
    "id": 84,
    "nombre": "ESCUELA DE ARTES Y OFICIOS SOR JUANA INES DE LA CRUZ",
    "cct": "21EBH0522F",
    "zona": "BGE0094",
    "tipo": "B.G.E.",
    "direccion": "4 NORTE # 605, COLONIA CENTRO",
    "localidad": "PUEBLA",
    "municipio": "PUEBLA",
    "turno": "VESPERTINO"
  },
  {
    "id": 85,
    "nombre": "CAMPA TLANESI",
    "cct": "21EBH0108Q",
    "zona": "BGE0094",
    "tipo": "B.G.E.",
    "direccion": "AV. ADOLFO LOPEZ MATEOS S/N, LA RESURRECCIÓN, PUEBLA, PUE.",
    "localidad": "LA RESURRECCION",
    "municipio": "PUEBLA",
    "turno": "MATUTINO"
  },
  {
    "id": 86,
    "nombre": "BACHILLERATO GENERAL OFICIAL CAMPA TLANESI",
    "cct": "21EBH1262Q",
    "zona": "BGE0094",
    "tipo": "B.G.E.",
    "direccion": "AV. ADOLFO LOPEZ MATEOS S/N, LA RESURRECCIÓN, PUEBLA, PUE.",
    "localidad": "JUNTA AUXILIAR  LA RESURRECCIÓN",
    "municipio": "PUEBLA",
    "turno": "VESPERTINO"
  },
  {
    "id": 87,
    "nombre": "PABLO NERUDA",
    "cct": "21EBH0647N",
    "zona": "BGE071",
    "tipo": "B.G.E.",
    "direccion": "23 PONIENTE 1301 CO. RIVERA DE SANTIAGO",
    "localidad": "PUEBLA",
    "municipio": "PUEBLA",
    "turno": "VESPERTINO"
  },
  {
    "id": 88,
    "nombre": "JOSE VASCONCELOS",
    "cct": "21EBH0792Z",
    "zona": "BGE099",
    "tipo": "B.G.E.",
    "direccion": "RUA DE DIAMANTE 3102, FRACC. LA JOYA C.P. 72520",
    "localidad": "HEROICA PUEBLA DE ZARAGOZA",
    "municipio": "PUEBLA",
    "turno": "VESPERTINO"
  },
  {
    "id": 89,
    "nombre": "BACHILLERATO OCTAVIO PAZ",
    "cct": "21EBH0279J",
    "zona": "BGE012",
    "tipo": "B.G.E.",
    "direccion": "AVENIDA LONDRES NO. 5, PUEBLO SANCTORUM",
    "localidad": "SANCTORUM",
    "municipio": "CUAUTLANCINGO",
    "turno": "MATUTINO"
  },
  {
    "id": 90,
    "nombre": "BACHILLERATO GENERAL ESTATAL HEROES DE LA REFORMA",
    "cct": "21EBH0272Q",
    "zona": "BGE016",
    "tipo": "B.G.E.",
    "direccion": "13 PONIENTE 902, COLONIA CENTRO",
    "localidad": "PUEBLA",
    "municipio": "PUEBLA",
    "turno": "MATUTINO"
  },
  {
    "id": 91,
    "nombre": "BACHILLERATO FRANCISCO DE ASIS",
    "cct": "21EBH0937D",
    "zona": "BGE012",
    "tipo": "B.G.E.",
    "direccion": "AVENIDA ESTACION CENTRAL, UNIDAD HABITACIONAL MISIONES DE SAN FRANCISCO OCOTLAN",
    "localidad": "SAN FRANCISCO OCOTLAN",
    "municipio": "CORONANGO",
    "turno": "MATUTINO"
  },
  {
    "id": 92,
    "nombre": "BACHILLERATO GENERAL OFICIAL AGUSTIN MELGAR",
    "cct": "21EBH0768Z",
    "zona": "BGE-POR-DEFINIR",
    "tipo": "B.G.E.",
    "direccion": "CAMINO REAL A PATLANPAYA S/N",
    "localidad": "SAN MIGUEL DE LAS MINAS",
    "municipio": "IZUCAR DE MATAMOROS",
    "turno": "MATUTINO"
  },
  {
    "id": 93,
    "nombre": "BACHILLERATO GENERAL OFICIAL \"NUEVA CREACION\"",
    "cct": "21EBH0009Q",
    "zona": "BGE-POR-DEFINIR",
    "tipo": "B.G.E.",
    "direccion": "LAZARO CARDENAS ORIENTE",
    "localidad": "PUEBLA",
    "municipio": "PUEBLA",
    "turno": "MATUTINO"
  },
  {
    "id": 94,
    "nombre": "BACHILLERATO GENERAL OFICIAL EZEQUIEL CHAVEZ",
    "cct": "21EBH0141Y",
    "zona": "BGE099",
    "tipo": "B.G.E.",
    "direccion": "CALLE 21 DE MARZO S/N",
    "localidad": "JICOLAPA",
    "municipio": "ZACATLAN",
    "turno": "MATUTINO"
  },
  {
    "id": 95,
    "nombre": "LOS HÉROES PUEBLA",
    "cct": "21EBH0940R",
    "zona": "BGE-POR-DEFINIR",
    "tipo": "B.G.E.",
    "direccion": "117 ORIENTE Y DIAGONAL DE LA 18 SUR FRACC. LOS HÉROES DE PUEBLA CP.72590",
    "localidad": "PUEBLA",
    "municipio": "PUEBLA",
    "turno": "MATUTINO"
  }
];
