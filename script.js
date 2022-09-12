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
        getP.forEach(p =>{            
            p.classList.remove('fadeOut')
            p.classList.add('fadeIn')
            p.classList.add('opened')
            p.style.display = "block";
        })       

        getAsideLogo.classList.remove('fadeOut');
        getAsideLogo.classList.add('fadeIn');
        getAvatar.classList.remove('fadeOut');        
        getAvatar.classList.add('fadeIn');
        getAsideLogo.style.display = "block";
        getAvatar.style.display = "block";
    }
    else if (opened) {        
        getAside.classList.remove('opened')
        getAside.classList.add('closed');
        getP.forEach(p =>{
            p.classList.remove('fadeIn')
            p.classList.add('fadeOut')
        })
        setTimeout(() => getP.forEach(p => {
            p.style.display = "none";
        }), 500)
        
        getAsideLogo.classList.remove('fadeIn');
        getAsideLogo.classList.add('fadeOut');
        getAvatar.classList.remove('fadeIn');        
        getAvatar.classList.add('fadeOut');
        
        setTimeout( () => { (getAsideLogo.style.display = "none")
        }, 500);
        setTimeout( () => { (getAvatar.style.display = "none")
        }, 500);
    }
    else {
        getAside.classList.add('opened')
        getP.forEach(e => {
            e.classList.add('opened')
            e.style.display = "block";
        });    
        getAsideLogo.style.display = "block";
        getAvatar.style.display = "block";  
    }
}