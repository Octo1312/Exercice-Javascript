for (let i = 0; i < 9; i++) {
    let ligne = "";
for (let j = 0; j < 9; j++) {


    if (i === 0 || i === 8 || j === 0 || j === 8) {
        ligne += "⬛";
    }

    else if (i === 1 || i === 7 || j === 1 || j === 7) {
        ligne += "⬜";
    }
    else {
        ligne += "⬛"; 
    }
}
console.log(ligne);
}