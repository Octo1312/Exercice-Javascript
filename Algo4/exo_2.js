// 2. Vérification de la validité d'une date
// Créer une fonction qui vérifie si une date donnée (au format YYYY-MM-DD) est valide en
// utilisant l'objet Date. La fonction doit retourner true si la date est valide et false sinon.

function isDateValid(dateString) {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return false;

    const [year, month, day] = dateString.split('-');
    return date.getFullYear() == year &&
           date.getMonth() == month - 1 &&
           date.getDate() == day;
}
    console.log(isDateValid('2024-02-29'));
    console.log(isDateValid('2023-02-29'))