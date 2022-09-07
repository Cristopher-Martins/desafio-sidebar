const getAside = document.querySelector('aside')
const getAsideFooter = document.querySelector('.aside-footer')
const getP = document.querySelector('p')

function clicou () {
    const opened = getAside.classList.contains('opened')
    const closed = getAside.classList.contains('closed')
    

    if (closed == true) {    
        getAside.classList.remove('closed')
        getAside.classList.add('opened')
        getAsideFooter.classList.remove('closed')
        getAsideFooter.classList.add('opened')
        getP.style.display = "block";
    }
    else if (opened == true) {        
        getAside.classList.remove('opened')
        getAside.classList.add('closed')
        getAsideFooter.classList.remove('opened')
        getAsideFooter.classList.add('closed')
        getP.style.display = "block";
    }
    else {
        getAside.classList.add('opened')
        getAsideFooter.classList.add('opened')
        getP.style.display = "block";
    }
}