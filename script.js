const getAside = document.querySelector('aside')
const getP = document.querySelectorAll('p')
const getAsideLogo = document.querySelector('.aside-logo')
const getAvatar = document.querySelector('.avatar')
const getButtonTranslate = document.getElementById('translate-button')
 
function sidebar () {
    const opened = getAside.classList.contains('opened')
    const closed = getAside.classList.contains('closed')  

    if (closed) {    
        getAside.classList.replace('closed','opened')
        getP.forEach(p =>{            
            p.classList.replace('fadeOut','fadeIn')
            p.classList.add('opened')
            p.style.display = "block";
        })
        // adicionando o efeito translate para o botão de logout e mudando caso já o tenha. 
        if(getButtonTranslate.classList.contains('translateOut')){
            getButtonTranslate.classList.replace('translateOut','translateIn')
        }
        else{
            getButtonTranslate.classList.add('translateIn')
        }            
        getAsideLogo.classList.replace('fadeOut','fadeIn');
        getAvatar.classList.replace('fadeOut','fadeIn');        
        getAsideLogo.style.display = "block";
        getAvatar.style.display = "block";
    }
    else if (opened) {        
        getAside.classList.replace('opened','closed')
        getP.forEach(p =>{
            p.classList.replace('fadeIn','fadeOut')
        })
        setTimeout(() => getP.forEach(p => {
            p.style.display = "none";
        }), 500)
        getButtonTranslate.classList.replace('translateIn','translateOut')
        getAsideLogo.classList.replace('fadeIn','fadeOut');
        getAvatar.classList.replace('fadeIn','fadeOut');
        // timeout para dar tempo à animação, logo em seguida os elementos não são mais visiveis
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