function formatCustomDate(date) {
    return date.toLocaleDateString('fr-FR', {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}
const datevoulu = new Date('2025-02-19');
console.log(formatCustomDate(datevoulu))