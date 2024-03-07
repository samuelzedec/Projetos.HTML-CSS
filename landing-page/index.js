function clickMenu() {
    if (aba.style.display == 'block') {
        aba.style.display = 'none'
    } else {
    aba.style.display = 'block'
    }
}

function mudouTamanho() {
    if (window.innerWidth>= 768) {
        aba.style.display = 'block'
    } else {
        aba.style.display = 'none'
    }
}