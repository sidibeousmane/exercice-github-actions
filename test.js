function addition(a, b) {
    return a + b;
}

if (addition(2, 3) === 5) {
    console.log("Test réussi !");
    process.exit(0); // Code de succès
} else {
    console.error("Test échoué.");
    process.exit(1); // Code d'échec
}

