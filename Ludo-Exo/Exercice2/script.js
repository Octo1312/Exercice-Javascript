const btn = document.querySelector(".btn")
const allBody = document.querySelector("body")


    btn.addEventListener('click', () => {
        allBody.classList.toggle('switch');
        btn.classList.toggle('switch');
    })