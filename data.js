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
  {"promedio":9.9,"matricula":"202326285","nombre":"FERRERA GONZALEZ ANTONELLA","plan":"LEF-2016","periodo":"202625","nrc":60849,"docente":"Victor Hernández Pérez"},
  {"promedio":9.87,"matricula":"202353390","nombre":"ROBLEDO MARIN DAEL ANTONIO","plan":"LEF-2016","periodo":"202625","nrc":60849,"docente":"Victor Hernández Pérez"},
  {"promedio":9.8,"matricula":"202319247","nombre":"ALVARADO MUNOZ YADHIRA IVETTE","plan":"LEF-2016","periodo":"202625","nrc":60849,"docente":"Victor Hernández Pérez"},
  {"promedio":9.8,"matricula":"202325928","nombre":"DOMINGUEZ ARGUELLO JULIETA ANDREA","plan":"LEF-2016","periodo":"202625","nrc":60849,"docente":"Victor Hernández Pérez"},
  {"promedio":9.8,"matricula":"202351359","nombre":"PINA GUZMAN GUSTAVO","plan":"LEF-2016","periodo":"202625","nrc":60849,"docente":"Victor Hernández Pérez"},
  {"promedio":9.77,"matricula":"202324801","nombre":"BARRERA TELLEZ CRISTINA","plan":"LEF-2016","periodo":"202625","nrc":60849,"docente":"Victor Hernández Pérez"},
  {"promedio":9.74,"matricula":"202322266","nombre":"CALVA LUNA CARLOS IGNACIO","plan":"LEF-2016","periodo":"202625","nrc":60849,"docente":"Victor Hernández Pérez"},
  {"promedio":9.74,"matricula":"202368029","nombre":"VALERIO GARCIA MAITE","plan":"LEF-2016","periodo":"202625","nrc":60849,"docente":"Victor Hernández Pérez"},
  {"promedio":9.7,"matricula":"202344638","nombre":"GOMEZ VALENCIA CHRISTIAN ADAN","plan":"LEF-2016","periodo":"202625","nrc":60875,"docente":"Nayelli Salamanca M"},
  {"promedio":9.7,"matricula":"202325997","nombre":"DORANTES GONZALEZ OSVALDO","plan":"LEF-2016","periodo":"202625","nrc":60849,"docente":"Victor Hernández Pérez"},
  {"promedio":9.69,"matricula":"202356749","nombre":"SARMIENTO ANDRADE KATHUR","plan":"LEF-2016","periodo":"202625","nrc":60861,"docente":"Daniel Demetrio Tejeda Barrientos"},
  {"promedio":9.67,"matricula":"202331959","nombre":"HERNANDEZ PAEZ ALEJANDRO","plan":"LEF-2016","periodo":"202625","nrc":60849,"docente":"Victor Hernández Pérez"},
  {"promedio":9.67,"matricula":"202357352","nombre":"SUAREZ ELIOSA ISAAC","plan":"LEF-2016","periodo":"202625","nrc":60849,"docente":"Victor Hernández Pérez"},
  {"promedio":9.66,"matricula":"202357391","nombre":"SUASTEGUI VIGUERAS FRANCISCO MIGUEL","plan":"LEF-2016","periodo":"202625","nrc":60849,"docente":"Victor Hernández Pérez"},
  {"promedio":9.64,"matricula":"202350796","nombre":"PEREZ MADRID ALEJANDRO JAVIER","plan":"LEF-2016","periodo":"202625","nrc":60849,"docente":"Victor Hernández Pérez"},
  {"promedio":9.64,"matricula":"202351568","nombre":"POSADAS CONTRERAS LESLIE JACQUELINE","plan":"LEF-2016","periodo":"202625","nrc":60849,"docente":"Victor Hernández Pérez"},
  {"promedio":9.64,"matricula":"202366149","nombre":"RONQUILLO OLVERA DIANA","plan":"LEF-2016","periodo":"202625","nrc":60849,"docente":"Victor Hernández Pérez"},
  {"promedio":9.64,"matricula":"202357635","nombre":"TELLO XOCHIPA MIGUEL ANGEL","plan":"LEF-2016","periodo":"202625","nrc":60849,"docente":"Victor Hernández Pérez"},
  {"promedio":9.64,"matricula":"202358940","nombre":"VICTORIA GUERRA JEREMMY JESRAEL","plan":"LEF-2016","periodo":"202625","nrc":60849,"docente":"Victor Hernández Pérez"},
  {"promedio":9.64,"matricula":"202320944","nombre":"TORRES MENESES JAVIER","plan":"LEF-2016","periodo":"202625","nrc":61052,"docente":"Victor Arenas Pérez"},
  {"promedio":9.63,"matricula":"202379491","nombre":"VAZQUEZ RANGEL LUISA FERNANDA","plan":"LEF-2016","periodo":"202625","nrc":60849,"docente":"Victor Hernández Pérez"},
  {"promedio":9.61,"matricula":"202319608","nombre":"BADILLO ZENTENO YOSEF EMANUEL","plan":"LEF-2016","periodo":"202625","nrc":60849,"docente":"Victor Hernández Pérez"},
  {"promedio":9.61,"matricula":"202320419","nombre":"CERON MEZA EMILIANO","plan":"LEF-2016","periodo":"202625","nrc":60849,"docente":"Victor Hernández Pérez"},
  {"promedio":9.61,"matricula":"202353780","nombre":"RODRIGUEZ LUNA JOSE GAUDENCIO","plan":"LEF-2016","periodo":"202625","nrc":60861,"docente":"Daniel Demetrio Tejeda Barrientos"},
  {"promedio":9.58,"matricula":"202346799","nombre":"MARQUEZ GONZALEZ ADAIR","plan":"LEF-2016","periodo":"202625","nrc":60875,"docente":"Nayelli Salamanca M"},
  {"promedio":9.58,"matricula":"202319577","nombre":"AVILA SANCHEZ JOSUE JARED","plan":"LEF-2016","periodo":"202625","nrc":61052,"docente":"Victor Arenas Pérez"},
  {"promedio":9.58,"matricula":"202351500","nombre":"PORQUILLO MINUTTI MARICRUZ","plan":"LEF-2016","periodo":"202625","nrc":60861,"docente":"Daniel Demetrio Tejeda Barrientos"},
  {"promedio":9.54,"matricula":"202363691","nombre":"MENESES FLORES AHTZIRY","plan":"LEF-2016","periodo":"202625","nrc":60875,"docente":"Nayelli Salamanca M"},
  {"promedio":9.54,"matricula":"202358836","nombre":"VELAZQUEZ ANDRADE EMIGDIO","plan":"LEF-2016","periodo":"202625","nrc":60866,"docente":"Alejandra Marciano Mendoza"},
  {"promedio":9.54,"matricula":"202380511","nombre":"YANEZ SANCHEZ JOSELYN ALINE","plan":"LEF-2016","periodo":"202625","nrc":60866,"docente":"Alejandra Marciano Mendoza"},
  {"promedio":9.54,"matricula":"202320827","nombre":"CRUZ ROMUALDO SAMUEL DE JESUS","plan":"LEF-2016","periodo":"202625","nrc":60849,"docente":"Victor Hernández Pérez"},
  {"promedio":9.54,"matricula":"202355080","nombre":"ROSAS SANCHEZ ALVARO","plan":"LEF-2016","periodo":"202625","nrc":60849,"docente":"Victor Hernández Pérez"},
  {"promedio":9.54,"matricula":"202330302","nombre":"FRANCO COATL DANIEL","plan":"LEF-2016","periodo":"202625","nrc":61052,"docente":"Victor Arenas Pérez"},
  {"promedio":9.54,"matricula":"202368060","nombre":"VALLEJO MADRID DANIEL","plan":"LEF-2016","periodo":"202625","nrc":60853,"docente":"Daniel Demetrio Tejeda Barrientos"},
  {"promedio":9.51,"matricula":"202366550","nombre":"SANCHEZ CORONA RODRIGO","plan":"LEF-2016","periodo":"202625","nrc":60866,"docente":"Alejandra Marciano Mendoza"},
  {"promedio":9.51,"matricula":"202326138","nombre":"ESPINOZA AYALA DANIELA","plan":"LEF-2016","periodo":"202625","nrc":60857,"docente":"Jesus Torres Machorro"},
  {"promedio":9.48,"matricula":"202357580","nombre":"TELLEZ CORDERO BRUNO ANDRE","plan":"LEF-2016","periodo":"202625","nrc":60866,"docente":"Alejandra Marciano Mendoza"},
  {"promedio":9.48,"matricula":"202323854","nombre":"FIGUEROA CASTRO JESSICA ATENEA","plan":"LEF-2016","periodo":"202625","nrc":60849,"docente":"Victor Hernández Pérez"},
  {"promedio":9.48,"matricula":"202348037","nombre":"MINERO VAZQUEZ DANIEL","plan":"LEF-2016","periodo":"202625","nrc":60849,"docente":"Victor Hernández Pérez"},
  {"promedio":9.48,"matricula":"202320157","nombre":"CARMONA LEZAMA FERNANDO","plan":"LEF-2016","periodo":"202625","nrc":61052,"docente":"Victor Arenas Pérez"},
  {"promedio":9.45,"matricula":"202319354","nombre":"ANGEL HERNANDEZ STEPHANY","plan":"LEF-2016","periodo":"202625","nrc":60849,"docente":"Victor Hernández Pérez"},
  {"promedio":9.45,"matricula":"202331025","nombre":"GOMEZ SANCHEZ JESUS ANGEL","plan":"LEF-2016","periodo":"202625","nrc":60849,"docente":"Victor Hernández Pérez"},
  {"promedio":9.41,"matricula":"202318988","nombre":"ABURTO CAMACHO BRANDON","plan":"LEF-2016","periodo":"202625","nrc":60849,"docente":"Victor Hernández Pérez"},
  {"promedio":9.41,"matricula":"202328414","nombre":"JUVENCIO FELICIANO ANDREA LIZBETH","plan":"LEF-2016","periodo":"202625","nrc":60849,"docente":"Victor Hernández Pérez"},
  {"promedio":9.41,"matricula":"202349346","nombre":"ORDAZ DE LA ROSA YERALDINE NATALI","plan":"LEF-2016","periodo":"202625","nrc":60849,"docente":"Victor Hernández Pérez"},
  {"promedio":9.38,"matricula":"202325910","nombre":"DIONICIO CASTRO BRYAN","plan":"LEF-2016","periodo":"202625","nrc":60849,"docente":"Victor Hernández Pérez"},
  {"promedio":9.35,"matricula":"202361050","nombre":"BONILLA RAMOS ALICIA","plan":"LEF-2016","periodo":"202625","nrc":60866,"docente":"Alejandra Marciano Mendoza"},
  {"promedio":9.35,"matricula":"202342618","nombre":"CEJA TREJO CARLOS MANUEL","plan":"LEF-2016","periodo":"202625","nrc":60849,"docente":"Victor Hernández Pérez"},
  {"promedio":9.35,"matricula":"202364453","nombre":"GUERRERO DELGADILLO EDGAR ELIAS","plan":"LEF-2016","periodo":"202625","nrc":60849,"docente":"Victor Hernández Pérez"},
  {"promedio":9.35,"matricula":"202369697","nombre":"MARTINEZ OLIVARES ROBERTO","plan":"LEF-2016","periodo":"202625","nrc":60857,"docente":"Jesus Torres Machorro"},
  {"promedio":9.32,"matricula":"202326513","nombre":"ESTRADA VARGAS MANUEL","plan":"LEF-2016","periodo":"202625","nrc":60849,"docente":"Victor Hernández Pérez"},
  {"promedio":9.32,"matricula":"202334826","nombre":"GARCIA ZUÑIGA OSCAR ARMANDO","plan":"LEF-2016","periodo":"202625","nrc":60849,"docente":"Victor Hernández Pérez"},
  {"promedio":9.29,"matricula":"202323415","nombre":"DE LA HUERTA DE LA VEGA JAQUELINE","plan":"LEF-2016","periodo":"202625","nrc":60849,"docente":"Victor Hernández Pérez"},
  {"promedio":9.29,"matricula":"202369724","nombre":"MEZA FLORES ANDREA","plan":"LEF-2016","periodo":"202625","nrc":60866,"docente":"Alejandra Marciano Mendoza"},
  {"promedio":9.29,"matricula":"202356456","nombre":"ROSAS JUAREZ EDGAR ARMANDO","plan":"LEF-2016","periodo":"202625","nrc":60849,"docente":"Victor Hernández Pérez"},
  {"promedio":9.26,"matricula":"202367742","nombre":"URIOSTEGUI RAMIREZ ALEJANDRO","plan":"LEF-2016","periodo":"202625","nrc":60853,"docente":"Daniel Demetrio Tejeda Barrientos"},
  {"promedio":9.26,"matricula":"202327432","nombre":"GOMEZ REZA YESSENIA","plan":"LEF-2016","periodo":"202625","nrc":60857,"docente":"Jesus Torres Machorro"},
  {"promedio":9.26,"matricula":"202379471","nombre":"SANSORES DOMINGUEZ CESAR","plan":"LEF-2016","periodo":"202625","nrc":60861,"docente":"Daniel Demetrio Tejeda Barrientos"},
  {"promedio":9.23,"matricula":"202374099","nombre":"OLMOS MONTALVO DANIEL","plan":"LEF-2016","periodo":"202625","nrc":60849,"docente":"Victor Hernández Pérez"},
  {"promedio":9.22,"matricula":"202374089","nombre":"PEREZ COVARRUBIAS ABIGAIL","plan":"LEF-2016","periodo":"202625","nrc":60857,"docente":"Jesus Torres Machorro"},
  {"promedio":9.22,"matricula":"202354726","nombre":"REYES GUADARRAMA DIEGO ALBERTO","plan":"LEF-2016","periodo":"202625","nrc":60849,"docente":"Victor Hernández Pérez"},
  {"promedio":9.19,"matricula":"202371397","nombre":"BAHENA BAHENA EDGAR","plan":"LEF-2016","periodo":"202625","nrc":60866,"docente":"Alejandra Marciano Mendoza"},
  {"promedio":9.19,"matricula":"202334780","nombre":"GARCIA ESPINO MARIO ALAN","plan":"LEF-2016","periodo":"202625","nrc":60849,"docente":"Victor Hernández Pérez"},
  {"promedio":9.19,"matricula":"202342849","nombre":"CASTILLO REBOLLAR ANGELES","plan":"LEF-2016","periodo":"202625","nrc":60861,"docente":"Daniel Demetrio Tejeda Barrientos"},
  {"promedio":9.16,"matricula":"202367762","nombre":"VASQUEZ GONZALEZ KEVIN ALEJANDRO","plan":"LEF-2016","periodo":"202625","nrc":60861,"docente":"Daniel Demetrio Tejeda Barrientos"},
  {"promedio":9.13,"matricula":"202361049","nombre":"BONILLA RAMOS EDGAR","plan":"LEF-2016","periodo":"202625","nrc":60857,"docente":"Jesus Torres Machorro"},
  {"promedio":9.13,"matricula":"202338278","nombre":"JUAREZ GARCIA GERARDO","plan":"LEF-2016","periodo":"202625","nrc":60849,"docente":"Victor Hernández Pérez"},
  {"promedio":9.1,"matricula":"202366539","nombre":"RODRIGUEZ GARCIA BLANCA PATRICIA","plan":"LEF-2016","periodo":"202625","nrc":60861,"docente":"Daniel Demetrio Tejeda Barrientos"},
  {"promedio":9.1,"matricula":"202363024","nombre":"GONZALEZ COHETERO EDGAR IVAN","plan":"LEF-2016","periodo":"202625","nrc":60857,"docente":"Jesus Torres Machorro"},
  {"promedio":9.06,"matricula":"202352793","nombre":"REYES SUASTEGUI ERIKA","plan":"LEF-2016","periodo":"202625","nrc":60849,"docente":"Victor Hernández Pérez"},
  {"promedio":9.06,"matricula":"202326697","nombre":"ESCALANTE GARCIA MIGUEL ANGEL","plan":"LEF-2016","periodo":"202625","nrc":60861,"docente":"Daniel Demetrio Tejeda Barrientos"},
  {"promedio":9.03,"matricula":"202362474","nombre":"JIMENEZ CARREON JOSE RUBEN","plan":"LEF-2016","periodo":"202625","nrc":60853,"docente":"Daniel Demetrio Tejeda Barrientos"},
  {"promedio":9.03,"matricula":"202364617","nombre":"MENDEZ MENDEZ CARLOS IVAN","plan":"LEF-2016","periodo":"202625","nrc":60849,"docente":"Victor Hernández Pérez"},
  {"promedio":9.0,"matricula":"202333695","nombre":"LEDESMA LARA JOSE JAVIER","plan":"LEF-2016","periodo":"202625","nrc":60849,"docente":"Victor Hernández Pérez"},
  {"promedio":9.0,"matricula":"202337040","nombre":"LOZANO FUENTES JESSICA GUADALUPE","plan":"LEF-2016","periodo":"202625","nrc":60871,"docente":"Jesus Torres Machorro"},
  {"promedio":8.97,"matricula":"202360099","nombre":"BAUTISTA GARCIA GUSTAVO ELIEZER","plan":"LEF-2016","periodo":"202625","nrc":60857,"docente":"Jesus Torres Machorro"},
  {"promedio":8.97,"matricula":"202350867","nombre":"PEREZ MOLINA ANGEL EFRAIN","plan":"LEF-2016","periodo":"202625","nrc":60857,"docente":"Jesus Torres Machorro"},
  {"promedio":8.97,"matricula":"202356538","nombre":"SANCHEZ BAUTISTA MELINA VALERIA","plan":"LEF-2016","periodo":"202625","nrc":60849,"docente":"Victor Hernández Pérez"},
  {"promedio":8.94,"matricula":"202372844","nombre":"IBAÑEZ GARCIA GABRIEL","plan":"LEF-2016","periodo":"202625","nrc":60853,"docente":"Daniel Demetrio Tejeda Barrientos"},
  {"promedio":8.94,"matricula":"202334781","nombre":"GARCIA ESPINO OSCAR ARMANDO","plan":"LEF-2016","periodo":"202625","nrc":60849,"docente":"Victor Hernández Pérez"},
  {"promedio":8.9,"matricula":"202367267","nombre":"SILVA CAHUANTZI EDGAR ANTONIO","plan":"LEF-2016","periodo":"202625","nrc":60857,"docente":"Jesus Torres Machorro"},
  {"promedio":8.9,"matricula":"202326694","nombre":"ESCALANTE GARCIA CARLOS IGNACIO","plan":"LEF-2016","periodo":"202625","nrc":60861,"docente":"Daniel Demetrio Tejeda Barrientos"},
  {"promedio":8.87,"matricula":"202331690","nombre":"HERNANDEZ DE LA FUENTE ALEJANDRO","plan":"LEF-2016","periodo":"202625","nrc":60849,"docente":"Victor Hernández Pérez"},
  {"promedio":8.87,"matricula":"202338804","nombre":"MARTINEZ GONZALEZ LUIS DANIEL","plan":"LEF-2016","periodo":"202625","nrc":60861,"docente":"Daniel Demetrio Tejeda Barrientos"},
  {"promedio":8.86,"matricula":"202336829","nombre":"HERNANDEZ SANCHEZ MAURICIO MOISES","plan":"LEF-2016","periodo":"202625","nrc":60849,"docente":"Victor Hernández Pérez"},
  {"promedio":8.85,"matricula":"202356480","nombre":"SANCHEZ ZARATE ALAN ALDAIR","plan":"LEF-2016","periodo":"202625","nrc":61052,"docente":"Victor Arenas Pérez"},
  {"promedio":8.85,"matricula":"202336241","nombre":"GONZALEZ NAVARRO AXEL GERARDO","plan":"LEF-2016","periodo":"202625","nrc":60861,"docente":"Daniel Demetrio Tejeda Barrientos"},
  {"promedio":8.82,"matricula":"202324848","nombre":"BAUTISTA OLIVEROS DANA VALERIA","plan":"LEF-2016","periodo":"202625","nrc":61052,"docente":"Victor Arenas Pérez"},
  {"promedio":8.8,"matricula":"202344047","nombre":"FLORES PEREZ JUAN PABLO","plan":"LEF-2016","periodo":"202625","nrc":61052,"docente":"Victor Arenas Pérez"},
  {"promedio":8.8,"matricula":"202361108","nombre":"CORONA ROSADO EDGAR DAVID","plan":"LEF-2016","periodo":"202625","nrc":60871,"docente":"Jesus Torres Machorro"},
  {"promedio":8.78,"matricula":"202323373","nombre":"DAWE FLORES ARTURO ALEJANDRO","plan":"LEF-2016","periodo":"202625","nrc":61052,"docente":"Victor Arenas Pérez"},
  {"promedio":8.77,"matricula":"202324145","nombre":"MARTINEZ MENDEZ ANTONIO","plan":"LEF-2016","periodo":"202625","nrc":60857,"docente":"Jesus Torres Machorro"},
  {"promedio":8.76,"matricula":"202329038","nombre":"BARONA PINEDA ANA KAREN","plan":"LEF-2016","periodo":"202625","nrc":60849,"docente":"Victor Hernández Pérez"},
  {"promedio":8.75,"matricula":"202224715","nombre":"BAEZ RODRIGUEZ JOSE EDUARDO","plan":"LEF-2016","periodo":"202625","nrc":60866,"docente":"Alejandra Marciano Mendoza"},
  {"promedio":8.74,"matricula":"202342813","nombre":"CASTILLO MUNOZ CARLOS GABRIEL","plan":"LEF-2016","periodo":"202625","nrc":60861,"docente":"Daniel Demetrio Tejeda Barrientos"},
  {"promedio":8.73,"matricula":"202130622","nombre":"MARTINEZ VENEGAS GIANCARLO","plan":"LEF-2016","periodo":"202625","nrc":60857,"docente":"Jesus Torres Machorro"},
  {"promedio":8.7,"matricula":"202367292","nombre":"SORIANO HERNANDEZ ASHLY","plan":"LEF-2016","periodo":"202625","nrc":60861,"docente":"Daniel Demetrio Tejeda Barrientos"},
  {"promedio":8.67,"matricula":"202321196","nombre":"AGUILAR RIVERA GERARDO ISAIAS","plan":"LEF-2016","periodo":"202625","nrc":60849,"docente":"Victor Hernández Pérez"},
  {"promedio":8.67,"matricula":"202340582","nombre":"NAVA AMADOR LEONARDO","plan":"LEF-2016","periodo":"202625","nrc":60861,"docente":"Daniel Demetrio Tejeda Barrientos"},
  {"promedio":8.67,"matricula":"202359114","nombre":"ZAMBRANO MENDOZA ADRIAN","plan":"LEF-2016","periodo":"202625","nrc":60861,"docente":"Daniel Demetrio Tejeda Barrientos"},
  {"promedio":8.65,"matricula":"202226422","nombre":"GARGANTUA CALIXTO GESSIE AMELLY","plan":"LEF-2016","periodo":"202625","nrc":60871,"docente":"Jesus Torres Machorro"},
  {"promedio":8.64,"matricula":"202347775","nombre":"MENDOZA BERMUDEZ DIEGO","plan":"LEF-2016","periodo":"202625","nrc":61052,"docente":"Victor Arenas Pérez"},
  {"promedio":8.62,"matricula":"202343294","nombre":"CRUZ SANTIAGO AMEYALLI","plan":"LEF-2016","periodo":"202625","nrc":60866,"docente":"Alejandra Marciano Mendoza"},
  {"promedio":8.58,"matricula":"202326769","nombre":"GARCIA BETANCOURT IVAN YAEL","plan":"LEF-2016","periodo":"202625","nrc":60857,"docente":"Jesus Torres Machorro"},
  {"promedio":8.56,"matricula":"202349267","nombre":"OLIVARES LOPEZ EMANUEL","plan":"LEF-2016","periodo":"202625","nrc":60861,"docente":"Daniel Demetrio Tejeda Barrientos"},
  {"promedio":8.56,"matricula":"202321095","nombre":"ACEVEDO NERI ANGEL EDUARDO","plan":"LEF-2016","periodo":"202625","nrc":60871,"docente":"Jesus Torres Machorro"},
  {"promedio":8.54,"matricula":"202371665","nombre":"GALINDO RENDON URIEL","plan":"LEF-2016","periodo":"202625","nrc":60857,"docente":"Jesus Torres Machorro"},
  {"promedio":8.54,"matricula":"202128284","nombre":"HERNANDEZ OYARZABAL DANAE","plan":"LEF-2016","periodo":"202625","nrc":60857,"docente":"Jesus Torres Machorro"},
  {"promedio":8.54,"matricula":"202362692","nombre":"JUAREZ HERNANDEZ JESUS ALEJANDRO","plan":"LEF-2016","periodo":"202625","nrc":60857,"docente":"Jesus Torres Machorro"},
  {"promedio":8.54,"matricula":"202374921","nombre":"OCHOA MONTES FERNANDO NARCIZO","plan":"LEF-2016","periodo":"202625","nrc":60857,"docente":"Jesus Torres Machorro"},
  {"promedio":8.54,"matricula":"202321259","nombre":"ALBA MARTINEZ JOSE ALBERTO","plan":"LEF-2016","periodo":"202625","nrc":60871,"docente":"Jesus Torres Machorro"},
  {"promedio":8.53,"matricula":"202041663","nombre":"HUERTA ZEPEDA HIPOLITO MIGUEL","plan":"LEF-2016","periodo":"202625","nrc":60861,"docente":"Daniel Demetrio Tejeda Barrientos"},
  {"promedio":8.53,"matricula":"202368609","nombre":"VILLEGAS LOPEZ MIGUEL ANGEL","plan":"LEF-2016","periodo":"202625","nrc":60857,"docente":"Jesus Torres Machorro"},
  {"promedio":8.52,"matricula":"202136884","nombre":"LOPEZ FLORES IAN SEBASTIAN","plan":"LEF-2016","periodo":"202625","nrc":60875,"docente":"Nayelli Salamanca M"},
  {"promedio":8.48,"matricula":"202341020","nombre":"ORTEGA CARRILLO ARIEL","plan":"LEF-2016","periodo":"202625","nrc":60849,"docente":"Victor Hernández Pérez"},
  {"promedio":8.48,"matricula":"202034031","nombre":"DEL VALLE RODRIGUEZ TAIS","plan":"LEF-2016","periodo":"202625","nrc":60871,"docente":"Jesus Torres Machorro"},
  {"promedio":8.45,"matricula":"202335734","nombre":"GARCIA CASTILLO JESUS ABRAHAM","plan":"LEF-2016","periodo":"202625","nrc":60853,"docente":"Daniel Demetrio Tejeda Barrientos"},
  {"promedio":8.45,"matricula":"202334654","nombre":"CERON CAMACHO DULCE XIMENA","plan":"LEF-2016","periodo":"202625","nrc":60857,"docente":"Jesus Torres Machorro"},
  {"promedio":8.45,"matricula":"202326058","nombre":"EQUITERIO OSORIO PABLO JOAQUIN","plan":"LEF-2016","periodo":"202625","nrc":60857,"docente":"Jesus Torres Machorro"},
  {"promedio":8.45,"matricula":"202345261","nombre":"HERNANDEZ MARTINEZ JESUS DAVID","plan":"LEF-2016","periodo":"202625","nrc":60857,"docente":"Jesus Torres Machorro"},
  {"promedio":8.43,"matricula":"202347545","nombre":"MELCHOR HERNANDEZ RICARDO","plan":"LEF-2016","periodo":"202625","nrc":60849,"docente":"Victor Hernández Pérez"},
  {"promedio":8.41,"matricula":"202332829","nombre":"LEON MORENO ALAN","plan":"LEF-2016","periodo":"202625","nrc":60849,"docente":"Victor Hernández Pérez"},
  {"promedio":8.4,"matricula":"202353090","nombre":"RICHARDI NAJERA DIEGO DE JESUS","plan":"LEF-2016","periodo":"202625","nrc":60849,"docente":"Victor Hernández Pérez"},
  {"promedio":8.38,"matricula":"202355406","nombre":"SAAVEDRA ARELLANO AXEL","plan":"LEF-2016","periodo":"202625","nrc":61052,"docente":"Victor Arenas Pérez"},
  {"promedio":8.38,"matricula":"202274300","nombre":"GUEVARA BERRA GUSTAVO EDUARDO","plan":"LEF-2016","periodo":"202625","nrc":60853,"docente":"Daniel Demetrio Tejeda Barrientos"},
  {"promedio":8.38,"matricula":"202347698","nombre":"MENDEZ MONTIEL ALEJANDRO","plan":"LEF-2016","periodo":"202625","nrc":60853,"docente":"Daniel Demetrio Tejeda Barrientos"},
  {"promedio":8.37,"matricula":"202155925","nombre":"RODRIGUEZ CASTILLO PEDRO PABLO","plan":"LEF-2016","periodo":"202625","nrc":60853,"docente":"Daniel Demetrio Tejeda Barrientos"},
  {"promedio":8.34,"matricula":"201921422","nombre":"RODRIGUEZ RODRIGUEZ EDSON GIOVANNI","plan":"LEF-2016","periodo":"202625","nrc":60875,"docente":"Nayelli Salamanca M"},
  {"promedio":8.33,"matricula":"202117040","nombre":"ANTONIO MENDEZ ADRIANA","plan":"LEF-2016","periodo":"202625","nrc":60875,"docente":"Nayelli Salamanca M"},
  {"promedio":8.31,"matricula":"202339424","nombre":"MENDEZ SCHIAVON SANTIAGO","plan":"LEF-2016","periodo":"202625","nrc":60875,"docente":"Nayelli Salamanca M"},
  {"promedio":8.31,"matricula":"202339088","nombre":"MATA TELLEZ GABRIEL SANTIAGO","plan":"LEF-2016","periodo":"202625","nrc":60853,"docente":"Daniel Demetrio Tejeda Barrientos"},
  {"promedio":8.29,"matricula":"202215724","nombre":"BORROMEO RODRIGUEZ OVIDIO","plan":"LEF-2016","periodo":"202625","nrc":60857,"docente":"Jesus Torres Machorro"},
  {"promedio":8.22,"matricula":"202084391","nombre":"HERRERA ESCUDERO LUIS EDUARDO","plan":"LEF-2016","periodo":"202625","nrc":60857,"docente":"Jesus Torres Machorro"},
  {"promedio":8.21,"matricula":"202329011","nombre":"BALDERAS CASTILLO MARISOL","plan":"LEF-2016","periodo":"202625","nrc":60842,"docente":"Nayelli Salamanca M"},
  {"promedio":8.21,"matricula":"202361514","nombre":"ESPINOSA ARENAS RODRIGO","plan":"LEF-2016","periodo":"202625","nrc":60861,"docente":"Daniel Demetrio Tejeda Barrientos"},
  {"promedio":8.19,"matricula":"202333369","nombre":"LUCAS FERNANDEZ ULISES","plan":"LEF-2016","periodo":"202625","nrc":61052,"docente":"Victor Arenas Pérez"},
  {"promedio":8.14,"matricula":"201819134","nombre":"GARCIA NAZARIO JESUS ALEJANDRO","plan":"LEF-2016","periodo":"202625","nrc":60871,"docente":"Jesus Torres Machorro"},
  {"promedio":8.11,"matricula":"202364395","nombre":"ORTIZ ORTIZ ELIAS","plan":"LEF-2016","periodo":"202625","nrc":60861,"docente":"Daniel Demetrio Tejeda Barrientos"},
  {"promedio":8.11,"matricula":"202274191","nombre":"GONZALEZ LIMA JULIO","plan":"LEF-2016","periodo":"202625","nrc":60857,"docente":"Jesus Torres Machorro"},
  {"promedio":8.1,"matricula":"202327810","nombre":"HERNANDEZ DE JESUS GIOVANI","plan":"LEF-2016","periodo":"202625","nrc":61052,"docente":"Victor Arenas Pérez"},
  {"promedio":8.04,"matricula":"202069572","nombre":"LEON BARRERA ELDRICK ELIHU","plan":"LEF-2016","periodo":"202625","nrc":60853,"docente":"Daniel Demetrio Tejeda Barrientos"},
  {"promedio":8.0,"matricula":"202235092","nombre":"OSORIO ROBLES EDSON","plan":"LEF-2016","periodo":"202625","nrc":60857,"docente":"Jesus Torres Machorro"},
  {"promedio":7.94,"matricula":"202221539","nombre":"CESPEDES SOTO KEREN DEL CARMEN","plan":"LEF-2016","periodo":"202625","nrc":60861,"docente":"Daniel Demetrio Tejeda Barrientos"},
  {"promedio":7.94,"matricula":"202350635","nombre":"PEREZ GOMEZ JOSE MARCOS","plan":"LEF-2016","periodo":"202625","nrc":60861,"docente":"Daniel Demetrio Tejeda Barrientos"},
  {"promedio":7.94,"matricula":"202151636","nombre":"PADILLA ALVAREZ MAXIMILIANO","plan":"LEF-2016","periodo":"202625","nrc":60857,"docente":"Jesus Torres Machorro"},
  {"promedio":7.93,"matricula":"202372805","nombre":"HUERTA PEREZ JOSE ALFREDO","plan":"LEF-2016","periodo":"202625","nrc":60875,"docente":"Nayelli Salamanca M"},
  {"promedio":7.93,"matricula":"202371527","nombre":"FLORES NAVA ANA ROSA","plan":"LEF-2016","periodo":"202625","nrc":60861,"docente":"Daniel Demetrio Tejeda Barrientos"},
  {"promedio":7.91,"matricula":"202142906","nombre":"ARAOZ GUZMAN CESAR","plan":"LEF-2016","periodo":"202625","nrc":60857,"docente":"Jesus Torres Machorro"},
  {"promedio":7.88,"matricula":"202274671","nombre":"HERNANDEZ VARELA PEDRO MANUEL","plan":"LEF-2016","periodo":"202625","nrc":60861,"docente":"Daniel Demetrio Tejeda Barrientos"},
  {"promedio":7.85,"matricula":"202242751","nombre":"MANJARREZ CASTILLO OMAR","plan":"LEF-2016","periodo":"202625","nrc":60866,"docente":"Alejandra Marciano Mendoza"},
  {"promedio":7.84,"matricula":"202370300","nombre":"CANO PAJARO JOSE MARIA","plan":"LEF-2016","periodo":"202625","nrc":60849,"docente":"Victor Hernández Pérez"},
  {"promedio":7.82,"matricula":"202375903","nombre":"QUIROS CANCINO LEONARDO","plan":"LEF-2016","periodo":"202625","nrc":60871,"docente":"Jesus Torres Machorro"},
  {"promedio":7.81,"matricula":"202032911","nombre":"CRUZ APARICIO SARAHI","plan":"LEF-2016","periodo":"202625","nrc":60871,"docente":"Jesus Torres Machorro"},
  {"promedio":7.78,"matricula":"202346509","nombre":"LUNA ORTEGA CARLOS","plan":"LEF-2016","periodo":"202625","nrc":60871,"docente":"Jesus Torres Machorro"},
  {"promedio":7.77,"matricula":"202253363","nombre":"SANCHEZ RUEDA SERGIO KEVIN","plan":"LEF-2016","periodo":"202625","nrc":60853,"docente":"Daniel Demetrio Tejeda Barrientos"},
  {"promedio":7.74,"matricula":"202279368","nombre":"VALADEZ ALVIZAR CHRISTIAN ADONAY","plan":"LEF-2016","periodo":"202625","nrc":60875,"docente":"Nayelli Salamanca M"},
  {"promedio":7.73,"matricula":"202055182","nombre":"ROMERO AGUILAR LUIS ANTONIO","plan":"LEF-2016","periodo":"202625","nrc":60871,"docente":"Jesus Torres Machorro"},
  {"promedio":7.65,"matricula":"202323687","nombre":"ESPINOSA JIMENEZ MARCO DAVID","plan":"LEF-2016","periodo":"202625","nrc":61052,"docente":"Victor Arenas Pérez"},
  {"promedio":7.64,"matricula":"202330029","nombre":"ESPINOZA CASTILLO DIEGO ARMANDO","plan":"LEF-2016","periodo":"202625","nrc":60857,"docente":"Jesus Torres Machorro"},
  {"promedio":7.61,"matricula":"202051822","nombre":"PIMENTEL FERNANDEZ JOSE DE JESUS","plan":"LEF-2016","periodo":"202625","nrc":60875,"docente":"Nayelli Salamanca M"},
  {"promedio":7.54,"matricula":"202336037","nombre":"GOMEZ CRUZ ERICK JHONATAN","plan":"LEF-2016","periodo":"202625","nrc":60853,"docente":"Daniel Demetrio Tejeda Barrientos"}
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
