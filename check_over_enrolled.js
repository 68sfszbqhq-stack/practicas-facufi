import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAHhDJQcaDgojC0qRXQeG3M2y55KgtBaog",
    authDomain: "sistema-de-practicas-cfbuap.firebaseapp.com",
    projectId: "sistema-de-practicas-cfbuap",
    storageBucket: "sistema-de-practicas-cfbuap.firebasestorage.app",
    messagingSenderId: "802276056298",
    appId: "1:802276056298:web:9a390b2d13825b66d60b93"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function checkCapacity() {
    console.log("Conectando a Firebase...");
    const snap = await getDocs(collection(db, "solicitudes_practicas"));
    const counts = {};
    const students = {};

    snap.forEach(doc => {
        const data = doc.data();
        const escId = data.escuelaId;
        const escName = data.escuelaNombre || "Sin nombre";
        const matricula = data.matricula;
        const nombre = data.nombre;

        if (escId) {
            if (!counts[escId]) {
                counts[escId] = { name: escName, count: 0, students: [] };
            }
            counts[escId].count++;
            counts[escId].students.push(`${nombre} (${matricula})`);
        }
    });

    console.log("\n--- ESCUELAS CON SOBRECONPO (Diferente al límite) ---");
    let found = false;
    for (const id in counts) {
        const maxCap = (parseInt(id) === 81) ? 10 : 3;
        if (counts[id].count > maxCap) {
            found = true;
            console.log(`\nEscuela: ${counts[id].name} (ID: ${id})`);
            console.log(`Total Inscritos: ${counts[id].count} (Límite: ${maxCap})`);
            console.log(`Alumnos:`);
            counts[id].students.forEach(s => console.log(`  - ${s}`));
        }
    }

    if (!found) {
        console.log("No se encontraron escuelas con exceso de alumnos según su límite.");
    }
    
    process.exit(0);
}

checkCapacity().catch(err => {
    console.error(err);
    process.exit(1);
});
