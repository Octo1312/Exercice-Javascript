const clock = document.getElementById('clock')

    function clocked() {
        const now = new Date()
        let hours = now.getHours()
        let minutes = now.getMinutes()
        let seconds = now.getSeconds()
        let totalHours = `${hours}h${minutes}m${seconds}s`
        clock.style.fontSize = '50px'
        clock.textContent = totalHours
        
    }

const interval = setInterval(clocked, 1000)