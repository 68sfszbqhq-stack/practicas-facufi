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

// =============================================
// CENTROS DE PRÁCTICAS CURRICULARES NMS
// 88 escuelas – Primavera 2026
// =============================================
const ESCUELAS = [
  {"id":1,"nombre":"GILBERTO BOSQUES SALDIVAR","cct":"21EBH0127E","zona":"BGE011","direccion":"MATAMOROS 13","localidad":"SAN PEDRO CHOLULA","municipio":"SAN PEDRO CHOLULA"},
  {"id":2,"nombre":"IGNACIO M. ALTAMIRANO","cct":"21EBH0156Z","zona":"BGE011","direccion":"CHOLULTECAS NORTE NO. 9","localidad":"SAN PEDRO CHOLULA","municipio":"SAN PEDRO CHOLULA"},
  {"id":3,"nombre":"GUILLERMO GONZALEZ CAMARENA","cct":"21EBH0314Z","zona":"BGE011","direccion":"CALLE FRANCISCO JAVIER MINA #100","localidad":"SAN GREGORIO ATZOMPA","municipio":"SAN ANDRÉS CHOLULA"},
  {"id":4,"nombre":"GILBERTO BOSQUES SALDIVAR","cct":"21EBH0539F","zona":"BGE011","direccion":"ITURBIDE NO. 64","localidad":"SANTA ISABEL CHOLULA","municipio":"SAN PEDRO CHOLULA"},
  {"id":5,"nombre":"NATALIA SERDAN ALATRISTE","cct":"21EBH0726Z","zona":"BGE011","direccion":"CHOLULTECAS NO 9","localidad":"SAN PEDRO CHOLULA","municipio":"SAN PEDRO CHOLULA"},
  {"id":6,"nombre":"JOSE MARIA MORELOS Y PAVON","cct":"21EBH0247R","zona":"BGE011","direccion":"CALLE HIDALGO S/N","localidad":"SAN BERNARDINO TLAXCALANCINGO","municipio":"SAN ANDRÉS CHOLULA"},
  {"id":7,"nombre":"BACHILLERATO GENERAL ESTATAL BENITO JUAREZ","cct":"21EBH0539F","zona":"BGE011","direccion":"PROLONGACION PONIENTE 10 S/N","localidad":"SANTA CLARA OCOYUCAN","municipio":"OCOYUCAN"},
  {"id":8,"nombre":"NEZAHUALCOYOTL","cct":"21EBH0054Z","zona":"BGE013","direccion":"CALLE 2 DE ABRIL NO. 1","localidad":"SAN MARTIN TEXMELUCAN","municipio":"SAN MARTIN TEXMELUCAN"},
  {"id":9,"nombre":"MAHATMA GANDHI","cct":"21EBH0055Y","zona":"BGE013","direccion":"DIAGONAL DEFENSORES NO 1802","localidad":"HEROICA PUEBLA DE ZARAGOZA","municipio":"PUEBLA"},
  {"id":10,"nombre":"FRANCISCO I. MADERO","cct":"21EBH0057W","zona":"BGE013","direccion":"JOSE MARIA MORELOS S/N ESQ. CON 7 PONIENTE","localidad":"HEROICA PUEBLA DE ZARAGOZA","municipio":"PUEBLA"},
  {"id":11,"nombre":"DOCTOR JOSE MARIA LUIS MORA","cct":"21EBH0108Q","zona":"BGE013","direccion":"CALLE JARDIN DE SAN FRANCISCO NO 1","localidad":"HEROICA PUEBLA DE ZARAGOZA","municipio":"PUEBLA"},
  {"id":12,"nombre":"JOSE MARIA LAFRAGUA","cct":"21EBH0232Z","zona":"BGE013","direccion":"CALLE 3 NORTE NO. 1301","localidad":"HEROICA PUEBLA DE ZARAGOZA","municipio":"PUEBLA"},
  {"id":13,"nombre":"MELCHOR OCAMPO","cct":"21EBH0299F","zona":"BGE013","direccion":"AV. PUEBLA NO. 2 COL OJO DE AGUA","localidad":"SAN PEDRO CHOLULA","municipio":"SAN PEDRO CHOLULA"},
  {"id":14,"nombre":"FRANCISCO GONZALEZ BOCANEGRA","cct":"21EBH0309Z","zona":"BGE013","direccion":"PONIENTE 7 NO. 614 COLONIA EL MIRADOR","localidad":"HEROICA PUEBLA DE ZARAGOZA","municipio":"PUEBLA"},
  {"id":15,"nombre":"BENITO JUAREZ GARCIA","cct":"21EBH0316X","zona":"BGE013","direccion":"PROLONGACION 11 SUR S/N COL. CENTRO","localidad":"SAN MIGEL CANOA","municipio":"PUEBLA"},
  {"id":16,"nombre":"EMILIANO ZAPATA","cct":"21EBH0337Z","zona":"BGE013","direccion":"AV. ADOLFO LOPEZ MATEOS S/N","localidad":"SAN BALTAZAR CAMPECHE","municipio":"PUEBLA"},
  {"id":17,"nombre":"BENITO JUAREZ","cct":"21EBH0338Y","zona":"BGE013","direccion":"CALLE PRIVADA MOCTEZUMA S/N PARAJE EL CHIVO","localidad":"SAN ANDRES CHOLULA","municipio":"SAN ANDRÉS CHOLULA"},
  {"id":18,"nombre":"JOSE VASCONCELOS","cct":"21EBH0340M","zona":"BGE013","direccion":"CAMINO A SAN MATIAS S/N","localidad":"SAN MATIAS COCOYOTLA","municipio":"SAN ANDRÉS CHOLULA"},
  {"id":19,"nombre":"MIGUEL HIDALGO Y COSTILLA","cct":"21EBH0497Z","zona":"BGE013","direccion":"REFORMA NO. 8","localidad":"SAN MATEO OZOLCO","municipio":"CALPAN"},
  {"id":20,"nombre":"REPUBLICA DE CUBA","cct":"21EBH0724B","zona":"BGE013","direccion":"AV. REFORMA Y CONSTITUCION S/N","localidad":"SAN JERÓNIMO TECUANIPAN","municipio":"SAN ANDRÉS CHOLULA"},
  {"id":21,"nombre":"ALFREDO V. BONFIL BATALLA","cct":"21EBH0725A","zona":"BGE013","direccion":"CALLE MORELOS S/N","localidad":"SAN ANTONIO CACALOTEPEC","municipio":"SAN ANDRES CHOLULA"},
  {"id":22,"nombre":"ATENCO","cct":"21EBH0727Y","zona":"BGE013","direccion":"CALLE HIDALGO S/N","localidad":"SAN MIGUEL ESPEJO","municipio":"PUEBLA"},
  {"id":23,"nombre":"BACHILLERATO GENERAL OFICIAL ADOLFO LOPEZ MATEOS","cct":"21EBH0864K","zona":"BGE013","direccion":"24 PONIENTE 4102 LAS HADAS","localidad":"HEROICA PUEBLA DE ZARAGOZA","municipio":"PUEBLA"},
  {"id":24,"nombre":"ADOLFO LOPEZ MATEOS","cct":"21EBH0057W","zona":"BGE015","direccion":"AV. JUAREZ S/N","localidad":"ALMECATLA","municipio":"CUAUTLANCINGO"},
  {"id":25,"nombre":"CUAUTLANCINGO","cct":"21EBH0193P","zona":"BGE015","direccion":"CALLE JUAREZ NO. 1 NORTE","localidad":"CUAUTLANCINGO","municipio":"CUAUTLANCINGO"},
  {"id":26,"nombre":"EMILIO SÁNCHEZ PIEDRAS","cct":"21EBH0196M","zona":"BGE015","direccion":"CALLE REFORMA S/N","localidad":"SAN ANTONIO XAHUENTO","municipio":"CUAUTLANCINGO"},
  {"id":27,"nombre":"MANUEL ESPINOSA YGLESIAS","cct":"21EBH0197L","zona":"BGE015","direccion":"CALLE MORELOS SIN NUMERO","localidad":"SAN JUAN CUAUTLANCINGO","municipio":"CUAUTLANCINGO"},
  {"id":28,"nombre":"LIC. ADOLFO LOPEZ MATEOS","cct":"21EBH0324F","zona":"BGE015","direccion":"PRIVADA ORIENTE 14 NO. 11, COLONIA JARDINES DEL CENTENARIO ","localidad":"SAN ANDRÉS CHOLULA","municipio":"SAN ANDRÉS CHOLULA"},
  {"id":29,"nombre":"MAHATMA GANDHI","cct":"21EBH0325E","zona":"BGE015","direccion":"BOULEVAR FRANCISCO VILLA S/N","localidad":"SAN ANDRES CHOLULA","municipio":"SAN ANDRÉS CHOLULA"},
  {"id":30,"nombre":"JOSE MARIA LAFRAGUA","cct":"21EBH0448W","zona":"BGE015","direccion":"CAMINO REAL A CHOLULA 2508","localidad":"HEROICA PUEBLA DE ZARAGOZA","municipio":"PUEBLA"},
  {"id":31,"nombre":"QUETZALCOATL","cct":"21EBH0449V","zona":"BGE015","direccion":"JOSE MARIA MORELOS NO. 408","localidad":"HEROICA PUEBLA DE ZARAGOZA","municipio":"PUEBLA"},
  {"id":32,"nombre":"SOR JUANA INES DE LA CRUZ","cct":"21EBH0612U","zona":"BGE015","direccion":"CALLE GUADALUPE VICTORIA 4 SAN PABLO XOCHIMEHUACAN","localidad":"HEROICA PUEBLA DE ZARAGOZA","municipio":"PUEBLA"},
  {"id":33,"nombre":"CARLOS MARX","cct":"21EBH0613T","zona":"BGE015","direccion":"CALLE PROLONGACION 63 PONIENTE S/N, COLONIA CARMEN HUEXOTITLA","localidad":"HEROICA PUEBLA DE ZARAGOZA","municipio":"PUEBLA"},
  {"id":34,"nombre":"IGNACIO ALLENDE","cct":"21EBH0726Z","zona":"BGE015","direccion":"CALLE REFORMA S/N","localidad":"SAN JERONIMO CALERAS","municipio":"PUEBLA"},
  {"id":35,"nombre":"FRAY TORIBIO DE BENAVENTE MOTOLINIA","cct":"21EBH0727Y","zona":"BGE015","direccion":"3ER CALLEJON DE LA ASUNCION S/N","localidad":"HEROICA PUEBLA DE ZARAGOZA","municipio":"PUEBLA"},
  {"id":36,"nombre":"JOSE MARIA MORELOS","cct":"21EBH0728X","zona":"BGE015","direccion":"BOULEVARD 5 DE FEBRERO NO.  8221 COMPLEJO INDUSTRIAL QUETZALCOATL","localidad":"HEROICA PUEBLA DE ZARAGOZA","municipio":"PUEBLA"},
  {"id":37,"nombre":"MIGUEL HIDALGO Y COSTILLA","cct":"21EBH0729W","zona":"BGE015","direccion":"CALLE ZARAGOZA NO. 20","localidad":"SAN ANDRES CHOLULA","municipio":"SAN ANDRÉS CHOLULA"},
  {"id":38,"nombre":"EMILIANO ZAPATA","cct":"21EBH0890Z","zona":"BGE015","direccion":"BELIZARIO DOMINGUEZ 20 SAN MIGUEL OCOYUCAN","localidad":"OCOYUCAN","municipio":"OCOYUCAN"},
  {"id":39,"nombre":"LUCAS ALAMAN","cct":"21EBH0051F","zona":"BGE017","direccion":"CALLE 4 NORTE NO. 711","localidad":"HEROICA PUEBLA DE ZARAGOZA","municipio":"PUEBLA"},
  {"id":40,"nombre":"IGNACIO DE LA LLAVE","cct":"21EBH0074Q","zona":"BGE017","direccion":"CALLE 18 PONIENTE NO. 703, COL. LA PAZ","localidad":"HEROICA PUEBLA DE ZARAGOZA","municipio":"PUEBLA"},
  {"id":41,"nombre":"LAZARO CARDENAS","cct":"21EBH0164O","zona":"BGE017","direccion":"PRIVADA DEL CIPRES NO. 7420, FRACC. BOSQUES DEL OJON","localidad":"HEROICA PUEBLA DE ZARAGOZA","municipio":"PUEBLA"},
  {"id":42,"nombre":"CONSTITUCIÓN DE 1917","cct":"21EBH0165N","zona":"BGE017","direccion":"14 PONIENTE NO. 2310, COL. AGUA SANTA","localidad":"HEROICA PUEBLA DE ZARAGOZA","municipio":"PUEBLA"},
  {"id":43,"nombre":"CUAUHTEMOC","cct":"21EBH0310H","zona":"BGE017","direccion":"CALLE 3 SUR NO. 3203","localidad":"HEROICA PUEBLA DE ZARAGOZA","municipio":"PUEBLA"},
  {"id":44,"nombre":"TLAPALTEOTL","cct":"21EBH0311G","zona":"BGE017","direccion":"CALLE TLAPALTEOTL S/N ATOMATLÁN","localidad":"HEROICA PUEBLA DE ZARAGOZA","municipio":"PUEBLA"},
  {"id":45,"nombre":"VICENTE GUERRERO","cct":"21EBH0352K","zona":"BGE017","direccion":"CALLE HIDALGO S/N","localidad":"SAN MATEO PRETZOSTOC","municipio":"PUEBLA"},
  {"id":46,"nombre":"EMILIANO ZAPATA","cct":"21EBH0432F","zona":"BGE017","direccion":"CALLE FRANCISCO I. MADERO S/N","localidad":"SAN ANTONIO CACALOTEPEC","municipio":"SAN ANDRES CHOLULA"},
  {"id":47,"nombre":"FRAY JUAN DE ZUMARRAGA","cct":"21EBH0531M","zona":"BGE017","direccion":"28 PONIENTE NO. 2115 COL. LA PAZ","localidad":"HEROICA PUEBLA DE ZARAGOZA","municipio":"PUEBLA"},
  {"id":48,"nombre":"PRESIDENTE MIGUEL ALEMAN VALDES","cct":"21EBH0532L","zona":"BGE017","direccion":"CALLE LIC. HECTOR PEREZ MARTINEZ S/N","localidad":"HEROICA PUEBLA DE ZARAGOZA","municipio":"PUEBLA"},
  {"id":49,"nombre":"JOSE DAVILA OCANTOS","cct":"21EBH0149D","zona":"BGE032","direccion":"31 PONIENTE S/N  COL. PROGRESO MACUILXOCHITL","localidad":"HEROICA PUEBLA DE ZARAGOZA","municipio":"PUEBLA"},
  {"id":50,"nombre":"OCTAVIO PAZ","cct":"21EBH0246S","zona":"BGE032","direccion":"LAZARO CARDENAS S/N","localidad":"SAN ANDRES AZUMIATLA","municipio":"PUEBLA"},
  {"id":51,"nombre":"PABLO GONZALEZ RIVAS","cct":"21EBH0326D","zona":"BGE032","direccion":"AV. ADOLFO LÓPEZ MATEOS SIN NÚMERO, ESQUINA VICENTE GUERRERO","localidad":"SAN BALTAZAR TETELA","municipio":"PUEBLA"},
  {"id":52,"nombre":"LAZARO CARDENAS DEL RIO","cct":"21EBH0408N","zona":"BGE032","direccion":"CALLE 8 SUR SIN NÚMERO","localidad":"SAN PEDRO ZACACHIMALPA","municipio":"PUEBLA"},
  {"id":53,"nombre":"HERMANOS SERDAN","cct":"21EBH0051F","zona":"BGE034","direccion":"11 PONIENTE 1302","localidad":"HEROICA PUEBLA DE ZARAGOZA","municipio":"PUEBLA"},
  {"id":54,"nombre":"UNIDAD EDUCATIVA OCTAVIO PAZ","cct":"21EBH0407O","zona":"BGE034","direccion":"BOULEVARD PUEBLA 26 BOSQUES DE SAN SEBASTIAN","localidad":"PUEBLA","municipio":"PUEBLA"},
  {"id":55,"nombre":"DIEGO RIVERA","cct":"21EBH0943O","zona":"BGE034","direccion":"PRIVADA MONTE DE LOS OLIVOS 907","localidad":"SAN PEDRO CHOLULA","municipio":"SAN PEDRO CHOLULA"},
  {"id":56,"nombre":"ELENA GARRO","cct":"21EBH0754W","zona":"BGE034","direccion":"CALLE VALLE DE TOLUCA 13508 FRACC. VILLA LOS ENCINOS","localidad":"HEROICA PUEBLA DE ZARAGOZA","municipio":"PUEBLA"},
  {"id":57,"nombre":"JAIME SABINES","cct":"21EBH1264O","zona":"BGE034","direccion":"OAXTEPEC S/N PLAYAS DEL SUR","localidad":"PLAYAS DEL SUR","municipio":"PUEBLA"},
  {"id":58,"nombre":"GABINO BARREDA","cct":"21EBH0716T","zona":"BGE046","direccion":"AV. NIÑO ARTILLERO S/N, ESQUINA CALLE MORELOS","localidad":"HEROICA PUEBLA DE ZARAGOZA","municipio":"PUEBLA"},
  {"id":59,"nombre":"BACHILLERATO GENERAL OFICIAL PROF. CANDIDO REYES ALEGRE","cct":"21EBH0078M","zona":"BGE058","direccion":"CEDRO Y TETZMULLI S/N","localidad":"SAN LUCAS ATOYATENCO","municipio":"SAN MARTÍN TEXMELUCAN"},
  {"id":60,"nombre":"JOSE ALBERTO ZEPEDA SERRANO","cct":"21EBH0513Y","zona":"BGE058","direccion":"CEDRO Y TETZMULLI S/N","localidad":"SAN LUCAS ATOYATENCO","municipio":"SAN MARTÍN TEXMELUCAN"},
  {"id":61,"nombre":"RODRIGO MONTES DE OCA","cct":"21EBH0154B","zona":"BGE058","direccion":"PROL. ZARAGOZA NTE. S/N CENTRO","localidad":"SAN MARTIN TEXMELUCAN","municipio":"SAN MARTÍN TEXMELUCAN"},
  {"id":62,"nombre":"AQUILES SERDAN","cct":"21ECT0004P","zona":"BGE059","direccion":"CARRETERA PUEBLA CANOA KM. 7.5","localidad":"HEROICA PUEBLA DE ZARAGOZA","municipio":"PUEBLA"},
  {"id":63,"nombre":"BENITO JUAREZ GARCIA","cct":"21EBH0220K","zona":"BGE059","direccion":"AV. PABLO NERUDA S/N Y PROLONGACION DE LA 3 SUR","localidad":"HEROICA PUEBLA DE ZARAGOZA","municipio":"PUEBLA"},
  {"id":64,"nombre":"GREGORIO DE GANTE","cct":"21EBH0008R","zona":"BGE059","direccion":"CAMINO ANTIGUO A MANZANILLA S/N COL. BOSQUES DE MANZANILLA","localidad":"PUEBLA","municipio":"PUEBLA"},
  {"id":65,"nombre":"JUAN DE DIOS PEZA","cct":"21EBH0835G","zona":"BGE059","direccion":"C. NUEVO LEON S/N COL. 15 DE SEPTIEMBRE","localidad":"PUEBLA","municipio":"PUEBLA"},
  {"id":66,"nombre":"MANUEL M. FLORES","cct":"21EBH1258D","zona":"BGE059","direccion":"C. CAMINO VIEJO A BALCONES DEL SUR S/N","localidad":"HEROICA PUEBLA DE ZARAGOZA","municipio":"PUEBLA"},
  {"id":67,"nombre":"RAFAEL RAMIREZ CASTANEDA","cct":"21EBH0537H","zona":"BGE059","direccion":"PROLONGACION DE LA 11 SUR S/N COL. UNION ANTORCHISTA","localidad":"HEROICA PUEBLA DE ZARAGOZA","municipio":"PUEBLA"},
  {"id":68,"nombre":"BACHILLERATO GENERAL OFICIAL IGNACIO ZARAGOZA","cct":"21EBH0073R","zona":"BGE067","direccion":"RÚA DE DIAMANTE 3102 FRACC. LA JOYA","localidad":"PUEBLA","municipio":"PUEBLA"},
  {"id":69,"nombre":"GILBERTO BOSQUES SALDIVAR","cct":"21EBH0890Z","zona":"BGE067","direccion":"JUSTICIA SOCIAL Y PLURALISMO IDEOLÓGICO S/N UNIDAD HABITACIONAL SOLIDARIDAD","localidad":"PUEBLA","municipio":"PUEBLA"},
  {"id":70,"nombre":"BACHILLERATO GENERAL OFICIAL CARLOS MONSIVAIS","cct":"21EBH0887M","zona":"BGE067","direccion":"CALLE PRISCOS ESQ. BOULEVARD CEDROS S/N","localidad":"PUEBLA","municipio":"PUEBLA"},
  {"id":71,"nombre":"LUIS DONALDO COLOSIO MURRIETA","cct":"21EBH0264H","zona":"BGE067","direccion":"CAMINO REAL A SAN MIGUEL ESPEJO S/N COL. CAMPESTRE SAN ISIDRO","localidad":"SANTA MARIA XONACATEPEC","municipio":"PUEBLA"},
  {"id":72,"nombre":"NICOLAS REYES ALEGRE","cct":"21EBH0062L","zona":"BGE071","direccion":"CALLE COATEPEC S/N","localidad":"SAN MATIAS COCOYOTLA","municipio":"SAN PEDRO CHOLULA"},
  {"id":73,"nombre":"TEHUILOYOCAN","cct":"21EBH0584S","zona":"BGE071","direccion":"CALLE 5 DE MAYO 2047","localidad":"SAN LUIS TEHUILOYOCAN","municipio":"SAN ANDRÉS CHOLULA"},
  {"id":74,"nombre":"CADETE VICENTE SUAREZ","cct":"21EBH0077N","zona":"BGE071","direccion":"AV. 27 PONIENTE # 3113 COL. SANTA CRUZ LOS ÁNGELES","localidad":"HEROICA PUEBLA DE ZARAGOZA","municipio":"PUEBLA"},
  {"id":75,"nombre":"BACHILLERATO TECNICO EN SEGURIDAD CIUDADANA","cct":"21ECT0019R","zona":"BGE072","direccion":"KM. 6.5 CAMINO VECINAL A SANTA CRUZ ALPUYECA S/N","localidad":"AMOZOC DE MOTA","municipio":"AMOZOC"},
  {"id":76,"nombre":"UNIDAD DE APOYO A LA EDUCACIÓN MEDIA SUPERIOR EN LOS HOSPITALES","cct":"21FHM0001C","zona":"BGE072","direccion":"BOULEVARD DEL NIÑO POBLANO 5307 RESERVA TERRITORIAL VIA ATLIXCAYOTL","localidad":"HEROICA PUEBLA DE ZARAGOZA","municipio":"PUEBLA"},
  {"id":77,"nombre":"BACHILLERATO CASA DEL ADOLESCENTE","cct":"21EBH0025H","zona":"BGE072","direccion":"TLAXCALANCINGO","localidad":"SAN ANDRÉS CHOLULA","municipio":"PUEBLA"},
  {"id":78,"nombre":"CARMEN SERDAN","cct":"21EBH0023J","zona":"BGE079","direccion":"BOULEVARD INDEPENDENCIA NO. 2 INFONAVIT SAN MIGUEL MAYORAZGO","localidad":"PUEBLA","municipio":"PUEBLA"},
  {"id":79,"nombre":"BACHILLERATO GENERAL ESTATAL PLANTEL AZTECA PUEBLA","cct":"21EBH0021L","zona":"BGE079","direccion":"CALLE 5 PONIENTE 909","localidad":"PUEBLA","municipio":"PUEBLA"},
  {"id":80,"nombre":"LUIS BERMUDEZ GALICIA","cct":"21EBH0515W","zona":"BGE0092","direccion":"CALLE CICLISMO Y REGATA, S/N, UNIDAD MAGISTERIAL MÉXICO 68","localidad":"PUEBLA","municipio":"PUEBLA"},
  {"id":81,"nombre":"BACHILLERATO ANEXO A LA NORMAL SUPERIOR DEL EDO","cct":"21EBH0082Z","zona":"BGE0093","direccion":"11 SUR 1102","localidad":"PUEBLA","municipio":"PUEBLA"},
  {"id":82,"nombre":"CADETE JUAN ESCUTIA","cct":"21EBH0124H","zona":"BGE0093","direccion":"86 PONIENTE NO. 112, COL. REVOLUCIÓN MEXICANA","localidad":"HEROICA PUEBLA DE ZARAGOZA","municipio":"PUEBLA"},
  {"id":83,"nombre":"CARLOS CAMACHO ESPIRITU","cct":"21EBH0516V","zona":"BGE0093","direccion":"AV. CIRCUITO DE LAS FLORES SUR S/N U.HAB. DR. MATEO DE REGIL RODRIGUEZ","localidad":"PUEBLA","municipio":"PUEBLA"},
  {"id":84,"nombre":"ESCUELA DE ARTES Y OFICIOS SOR JUANA INES DE LA CRUZ","cct":"21EBH0522F","zona":"BGE0094","direccion":"4 NORTE # 605, COLONIA CENTRO","localidad":"PUEBLA","municipio":"PUEBLA"},
  {"id":85,"nombre":"CAMPA TLANESI","cct":"21EBH0108Q","zona":"BGE0094","direccion":"AV. ADOLFO LOPEZ MATEOS S/N, LA RESURRECCIÓN","localidad":"LA RESURRECCION","municipio":"PUEBLA"},
  {"id":86,"nombre":"BACHILLERATO GENERAL OFICIAL CAMPA TLANESI","cct":"21EBH1262Q","zona":"BGE0094","direccion":"AV. ADOLFO LOPEZ MATEOS S/N, LA RESURRECCIÓN","localidad":"JUNTA AUXILIAR LA RESURRECCIÓN","municipio":"PUEBLA"},
  {"id":87,"nombre":"PABLO NERUDA","cct":"21EBH0647N","zona":"BGE071","direccion":"23 PONIENTE 1301 COL. RIVERA DE SANTIAGO","localidad":"PUEBLA","municipio":"PUEBLA"},
  {"id":88,"nombre":"JOSE VASCONCELOS","cct":"21EBH0792Z","zona":"BGE099","direccion":"RUA DE DIAMANTE 3102, FRACC. LA JOYA C.P. 72520","localidad":"HEROICA PUEBLA DE ZARAGOZA","municipio":"PUEBLA"}
];
