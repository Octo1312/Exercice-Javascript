for (let i = 0; i < 10; i++) {
        let ligne = "";
for (let j = 0; j < 10; j++) {
    if (i === 0 || i === 9 || j === 0 || j === 9) {
        ligne += "⬛";
    } else {
        ligne += "⬜"; 
    }
}
console.log(ligne);
}