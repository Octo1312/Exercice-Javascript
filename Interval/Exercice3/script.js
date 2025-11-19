const blink = document.getElementById('blink')

    function cligno() {
        if(blink.textContent == 'Clignotant...') {
            blink.textContent = ''
        } else {
            blink.textContent = 'Clignotant...'
        }
    }

    const interval = setInterval(cligno, 500)