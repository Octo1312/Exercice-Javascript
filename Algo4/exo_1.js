// 1. Calcul de l'âge
// Écris une fonction qui prend en entrée une date de naissance (au format YYYY-MM-DD) et
// retourne l'âge de la personne en années

function calculate_age(birthDate) { 
    const diff = Date.now() - birthDate.getTime();
    const age = new Date(diff); 
    return Math.abs(age.getUTCFullYear() - 1970);
}

console.log(calculate_age(new Date('1990-05-15')))