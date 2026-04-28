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
    console.log("Ranking de escuelas con exceso de alumnos...");
    const snap = await getDocs(collection(db, "solicitudes_practicas"));
    const counts = {};

    snap.forEach(doc => {
        const data = doc.data();
        const escId = data.escuelaId;
        const escName = data.escuelaNombre || "Sin nombre";
        const matricula = data.matricula;
        const nombre = data.nombre;
        const promedio = data.promedio || 0;

        if (escId) {
            if (!counts[escId]) {
                counts[escId] = { name: escName, students: [] };
            }
            counts[escId].students.push({ nombre, matricula, promedio });
        }
    });

    console.log("\n--- ESCUELAS QUE REQUIEREN REUBICACIÓN (Exceso de límite) ---");
    let found = false;
    for (const id in counts) {
        const maxCap = (parseInt(id) === 81) ? 10 : 3; // Límite real es 3, reubicación a partir de 4 o 5? 
        // El script original decía >= 5 alumnos reubica.
        // Si el límite es 3, el 4to y 5to ya son exceso.
        // Vamos a seguir la lógica: si supera el limite + 1 (o simplemente > limite)
        
        const triggerReub = maxCap + 1; // Para la mayoría (3) es 4, para la 81 (10) es 11

        if (counts[id].students.length >= triggerReub) {
            found = true;
            console.log(`\nEscuela: ${counts[id].name} (ID: ${id})`);
            
            // Sort by promedio descending
            const sorted = counts[id].students.sort((a,b) => b.promedio - a.promedio);
            
            console.log(`Límite Sugerido: Se quedarán los mejores ${maxCap} por promedio.`);
            
            sorted.forEach((s, i) => {
                const marker = (i >= maxCap) ? "🚨 EXCESO (REUBICAR)" : "✅ SE QUEDA";
                console.log(`${i+1}. [${s.promedio.toFixed(2)}] ${s.nombre} (${s.matricula}) - ${marker}`);
            });
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
