const getAside = document.querySelector('aside')
const getP = document.querySelectorAll('p')
const getAsideLogo = document.querySelector('.aside-logo')
const getAvatar = document.querySelector('.avatar')

function clicou () {
    const opened = getAside.classList.contains('opened')
    const closed = getAside.classList.contains('closed')
    

    if (closed) {    
        getAside.classList.remove('closed')
        getAside.classList.add('opened')
        getP.forEach(e => {
            e.style.display = "block";
        });
        getAsideLogo.style.display = "block";
        getAvatar.style.display = "block";
    }
    else if (opened) {        
        getAside.classList.remove('opened')
        getAside.classList.add('closed')
        getP.forEach(e => {
            e.style.display = "none";
        });
        getAsideLogo.style.display = "none";
        getAvatar.style.display = "none";
    }
    else {
        console.log(getAsideLogo ,getAvatar)

        getAside.classList.add('opened')
        getP.forEach(e => {
            e.style.display = "block";
        });    
        getAsideLogo.style.display = "block";
        getAvatar.style.display = "block";  
    }
}