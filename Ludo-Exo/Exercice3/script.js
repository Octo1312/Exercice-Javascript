const spaceShip = document.querySelector(".x-wing")
const space = document.querySelector("#space")

let topPosition = 850
let leftPosition = 400

    document.addEventListener('keydown', (event) => {
        if(event.key === 'z') {
            spaceShip.style.top = topPosition - 5 + "px";
            topPosition = topPosition - 5;
        }

        if(event.key === 's') {
            spaceShip.style.top = topPosition + 5 + "px";
            topPosition = topPosition + 5;
        }

        if(event.key === 'q') {
            spaceShip.style.left = leftPosition - 5 + "px";
            leftPosition = leftPosition - 5;
        }

        if(event.key === 'd') {
            spaceShip.style.left = leftPosition + 5 + "px";
            leftPosition = leftPosition + 5;
        }
    })